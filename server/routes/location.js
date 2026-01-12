import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// Helper function to fetch with timeout
const fetchWithTimeout = async (url, timeout = 8000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'JigishaEnvirocare/1.0 (Contact Form)',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

// Fixed company headquarters location (fallback)
const HEADQUARTERS = {
  address: '9TH FLOOR-923, I SQUARE, NR. SHUKAN MALL CROSS RD., SOLA, AHMEDABAD, GUJARAT-380060',
  position: [23.0620, 72.5412],
  city: 'Ahmedabad',
  state: 'Gujarat',
  country: 'India'
};

// Main ZIP/PIN code lookup endpoint
router.get("/:pin", async (req, res) => {
  const pin = req.params.pin.trim();

  // Basic validation
  if (!pin || pin.length < 3) {
    return res.status(400).json({
      success: false,
      error: "Invalid input. Please enter a valid ZIP/PIN code (minimum 3 characters)."
    });
  }

  // console.log(`🔍 Looking up location for PIN/ZIP: ${pin}`);

  try {
    // Strategy 1: Indian Postal Code API (for 6-digit Indian PIN codes)
    if (/^\d{6}$/.test(pin)) {
      // console.log(`🇮🇳 Trying Indian postal API for PIN: ${pin}`);
      try {
        const response = await fetchWithTimeout(`https://api.postalpincode.in/pincode/${pin}`);
        const data = await response.json();
        
        if (data[0]?.Status === "Success" && data[0]?.PostOffice?.length > 0) {
          const postOffice = data[0].PostOffice[0];
          // console.log(`✅ Found via Indian postal API: ${postOffice.District}, ${postOffice.State}`);
          
          return res.json({
            success: true,
            source: 'india_postal',
            city: postOffice.District || postOffice.Name,
            state: postOffice.State,
            country: 'India',
            pincode: pin,
            fullAddress: `${postOffice.Name}, ${postOffice.District}, ${postOffice.State}, India`
          });
        }
      } catch (indianError) {
        // console.log('Indian postal API failed:', indianError.message);
      }
    }

    // Strategy 2: Zippopotam API (for international ZIP codes)
    console.log(`🌍 Trying Zippopotam API for code: ${pin}`);
    try {
      // Try multiple country codes in order
      const countries = ['IN', 'US', 'GB', 'CA', 'AU', 'DE', 'FR', 'JP'];
      
      for (const country of countries) {
        try {
          const response = await fetchWithTimeout(`https://api.zippopotam.us/${country}/${pin}`, 5000);
          if (response.ok) {
            const data = await response.json();
            
            if (data.places && data.places.length > 0) {
              const place = data.places[0];
              console.log(`✅ Found via Zippopotam: ${place['place name']}, ${place['state']}, ${data.country}`);
              
              return res.json({
                success: true,
                source: 'zippopotam',
                city: place['place name'],
                state: place['state'],
                country: data.country,
                pincode: pin,
                fullAddress: `${place['place name']}, ${place['state']}, ${data.country}`
              });
            }
          }
        } catch (countryError) {
          // Try next country
          continue;
        }
      }
    } catch (zipError) {
      console.log('Zippopotam API failed:', zipError.message);
    }

    // Strategy 3: Nominatim (OpenStreetMap) as fallback
    console.log(`🗺️ Trying Nominatim API for code: ${pin}`);
    try {
      const response = await fetchWithTimeout(
        `https://nominatim.openstreetmap.org/search?postalcode=${pin}&format=json&limit=5`
      );
      const data = await response.json();
      
      if (data.length > 0) {
        // Find the most relevant result (usually the first)
        const location = data[0];
        const address = location.display_name.split(',');
        
        // Extract city, state, and country from address components
        let city = address[0] || '';
        let state = '';
        let country = '';
        
        // Try to extract better info from address components
        if (location.address) {
          city = location.address.city || 
                 location.address.town || 
                 location.address.village || 
                 location.address.county || 
                 city;
          state = location.address.state || 
                  location.address.region || 
                  (address.length > 2 ? address[address.length - 3].trim() : '');
          country = location.address.country || 
                    (address.length > 0 ? address[address.length - 1].trim() : '');
        } else {
          state = address.length > 2 ? address[address.length - 3]?.trim() : '';
          country = address.length > 0 ? address[address.length - 1]?.trim() : '';
        }
        
        console.log(`✅ Found via Nominatim: ${city}, ${state}, ${country}`);
        
        return res.json({
          success: true,
          source: 'nominatim',
          city: city,
          state: state,
          country: country,
          pincode: pin,
          fullAddress: location.display_name
        });
      }
    } catch (nominatimError) {
      console.log('Nominatim API failed:', nominatimError.message);
    }

    // Strategy 4: Geocode.xyz API (another fallback)
    console.log(`📍 Trying Geocode.xyz API for code: ${pin}`);
    try {
      const response = await fetchWithTimeout(
        `https://geocode.xyz/${pin}?json=1&auth=your-auth-key-if-needed`
      );
      const data = await response.json();
      
      if (data.city || data.region || data.country) {
        console.log(`✅ Found via Geocode.xyz: ${data.city || ''}, ${data.region || ''}, ${data.country || ''}`);
        
        return res.json({
          success: true,
          source: 'geocode_xyz',
          city: data.city || '',
          state: data.region || '',
          country: data.country || '',
          pincode: pin,
          fullAddress: `${data.city || ''}, ${data.region || ''}, ${data.country || ''}`
        });
      }
    } catch (geocodeError) {
      console.log('Geocode.xyz API failed:', geocodeError.message);
    }

    // If all APIs fail, return headquarters as fallback
    console.log(`❌ All APIs failed for ${pin}, returning headquarters as fallback`);
    return res.json({
      success: true,
      source: 'fallback_headquarters',
      city: HEADQUARTERS.city,
      state: HEADQUARTERS.state,
      country: HEADQUARTERS.country,
      pincode: pin,
      fullAddress: HEADQUARTERS.address,
      note: 'Using company headquarters as fallback location'
    });

  } catch (error) {
    console.error('Location lookup error:', error);
    
    // Return headquarters on any critical error
    return res.json({
      success: true,
      source: 'error_fallback',
      city: HEADQUARTERS.city,
      state: HEADQUARTERS.state,
      country: HEADQUARTERS.country,
      pincode: pin,
      fullAddress: HEADQUARTERS.address,
      note: 'Service error, using headquarters as fallback'
    });
  }
});

// Batch lookup for multiple ZIP codes
router.post("/batch", async (req, res) => {
  const { pincodes } = req.body;
  
  if (!Array.isArray(pincodes) || pincodes.length === 0) {
    return res.status(400).json({
      success: false,
      error: "Please provide an array of ZIP/PIN codes"
    });
  }
  
  if (pincodes.length > 10) {
    return res.status(400).json({
      success: false,
      error: "Maximum 10 codes per batch request"
    });
  }
  
  const results = [];
  
  for (const pin of pincodes) {
    try {
      // Simulate the single lookup logic
      const pinStr = pin.toString().trim();
      
      if (pinStr.length >= 3) {
        // Try Indian API first for 6-digit codes
        if (/^\d{6}$/.test(pinStr)) {
          try {
            const response = await fetchWithTimeout(`https://api.postalpincode.in/pincode/${pinStr}`);
            const data = await response.json();
            
            if (data[0]?.Status === "Success" && data[0]?.PostOffice?.length > 0) {
              const postOffice = data[0].PostOffice[0];
              results.push({
                pincode: pinStr,
                success: true,
                city: postOffice.District || postOffice.Name,
                state: postOffice.State,
                country: 'India',
                source: 'india_postal'
              });
              continue;
            }
          } catch (error) {
            // Continue to next API
          }
        }
        
        // Try Zippopotam as fallback
        try {
          const response = await fetchWithTimeout(`https://api.zippopotam.us/us/${pinStr}`);
          if (response.ok) {
            const data = await response.json();
            
            if (data.places && data.places.length > 0) {
              const place = data.places[0];
              results.push({
                pincode: pinStr,
                success: true,
                city: place['place name'],
                state: place['state'],
                country: data.country,
                source: 'zippopotam'
              });
              continue;
            }
          }
        } catch (error) {
          // Continue
        }
        
        // If all APIs fail
        results.push({
          pincode: pinStr,
          success: false,
          error: "Could not find location"
        });
      } else {
        results.push({
          pincode: pinStr,
          success: false,
          error: "Invalid code"
        });
      }
    } catch (error) {
      results.push({
        pincode: pin,
        success: false,
        error: "Lookup failed"
      });
    }
  }
  
  res.json({
    success: true,
    results: results
  });
});

// Direct endpoint to get headquarters info
router.get("/headquarters", (req, res) => {
  res.json({
    success: true,
    address: HEADQUARTERS.address,
    city: HEADQUARTERS.city,
    state: HEADQUARTERS.state,
    country: HEADQUARTERS.country,
    coordinates: HEADQUARTERS.position
  });
});

// Enhanced test endpoint
router.get("/test/:pin", async (req, res) => {
  const pin = req.params.pin.trim();
  console.log(`🧪 Test request for PIN: ${pin}`);

  try {
    // Test all APIs
    const apiTests = [];
    
    // Test Indian API
    if (/^\d{6}$/.test(pin)) {
      try {
        const start = Date.now();
        const response = await fetchWithTimeout(`https://api.postalpincode.in/pincode/${pin}`, 5000);
        const time = Date.now() - start;
        apiTests.push({
          name: 'India Postal API',
          status: response.ok ? 'OK' : 'Failed',
          time: `${time}ms`
        });
      } catch (e) {
        apiTests.push({
          name: 'India Postal API',
          status: 'Error',
          error: e.message
        });
      }
    }
    
    // Test Zippopotam
    try {
      const start = Date.now();
      const response = await fetchWithTimeout(`https://api.zippopotam.us/us/${pin}`, 5000);
      const time = Date.now() - start;
      apiTests.push({
        name: 'Zippopotam API',
        status: response.ok ? 'OK' : 'Failed',
        time: `${time}ms`
      });
    } catch (e) {
      apiTests.push({
        name: 'Zippopotam API',
        status: 'Error',
        error: e.message
      });
    }
    
    // Test Nominatim
    try {
      const start = Date.now();
      const response = await fetchWithTimeout(
        `https://nominatim.openstreetmap.org/search?postalcode=${pin}&format=json&limit=1`,
        5000
      );
      const time = Date.now() - start;
      apiTests.push({
        name: 'Nominatim API',
        status: response.ok ? 'OK' : 'Failed',
        time: `${time}ms`
      });
    } catch (e) {
      apiTests.push({
        name: 'Nominatim API',
        status: 'Error',
        error: e.message
      });
    }

    res.json({
      pin,
      timestamp: new Date().toISOString(),
      apiStatus: apiTests,
      headquarters: {
        address: HEADQUARTERS.address,
        city: HEADQUARTERS.city,
        state: HEADQUARTERS.state,
        country: HEADQUARTERS.country
      }
    });
  } catch (error) {
    res.status(500).json({
      error: "Test failed",
      message: error.message
    });
  }
});

// Health check endpoint
router.get("/health", async (req, res) => {
  try {
    // Quick test of one API
    await fetchWithTimeout('https://api.postalpincode.in/pincode/380060', 3000);
    
    res.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: "Location Lookup API",
      version: "1.2.0",
      features: [
        "Indian PIN code lookup",
        "International ZIP code lookup",
        "Multiple API fallbacks",
        "Batch processing"
      ]
    });
  } catch (error) {
    res.json({
      status: "degraded",
      timestamp: new Date().toISOString(),
      service: "Location Lookup API",
      warning: "Some external APIs may be unavailable",
      error: error.message
    });
  }
});

// Quick lookup (fastest available)
router.get("/quick/:pin", async (req, res) => {
  const pin = req.params.pin.trim();
  
  if (!pin || pin.length < 3) {
    return res.json({
      success: false,
      error: "Invalid code"
    });
  }
  
  // Quick Indian lookup
  if (/^\d{6}$/.test(pin)) {
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
      const data = await response.json();
      
      if (data[0]?.Status === "Success" && data[0]?.PostOffice?.length > 0) {
        const postOffice = data[0].PostOffice[0];
        return res.json({
          success: true,
          city: postOffice.District || postOffice.Name,
          state: postOffice.State,
          country: 'India'
        });
      }
    } catch (error) {
      // Continue to fallback
    }
  }
  
  // Return headquarters as quick fallback
  res.json({
    success: true,
    city: HEADQUARTERS.city,
    state: HEADQUARTERS.state,
    country: HEADQUARTERS.country
  });
});

// Statistics endpoint
let requestStats = {
  totalRequests: 0,
  successfulLookups: 0,
  failedLookups: 0,
  bySource: {},
  startTime: new Date().toISOString()
};

// Middleware to collect stats
router.use((req, res, next) => {
  requestStats.totalRequests++;
  next();
});

router.get("/stats", (req, res) => {
  res.json({
    ...requestStats,
    uptime: Math.floor((Date.now() - new Date(requestStats.startTime).getTime()) / 1000) + ' seconds'
  });
});

export default router;