/**
 * Image Optimization Utilities
 * Provides lazy loading, preloading, and caching strategies
 */

// Preload critical images
export const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
};

// Preload multiple images
export const preloadImages = (srcArray) => {
    return Promise.all(srcArray.map(src => preloadImage(src)));
};

// Generate optimized Unsplash URLs with proper parameters
export const getOptimizedUnsplashUrl = (url, options = {}) => {
    const {
        width = 1200,
        quality = 80,
        format = 'webp'
    } = options;

    // If it's already an Unsplash URL, optimize it
    if (url.includes('unsplash.com')) {
        const baseUrl = url.split('?')[0];
        return `${baseUrl}?w=${width}&q=${quality}&fm=${format}&fit=crop&auto=format`;
    }

    return url;
};

// Create a blur placeholder data URL
export const createBlurPlaceholder = (width = 10, height = 10) => {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Crect width='${width}' height='${height}' fill='%23f0f0f0' filter='url(%23b)'/%3E%3C/svg%3E`;
};
