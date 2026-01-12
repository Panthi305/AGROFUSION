// Menu Data
export const menuData = [
    {
        id: 'home',
        title: 'Home',
        href: '/',
        hasDropdown: false,
        icon: '<svg width="16" height="16" class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'
    },
    {
        id: 'about-us',
        title: 'About Us',
        hasDropdown: true,
        isMega: true,
        icon: '<svg width="16" height="16" class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
        columns: [
            {
                id: 'col1',
                title: 'Group Companies',
                expandable: true,
                items: [
                    { title: 'JIGISHA INDUSTRIAL SERVICES Pvt. Ltd.', href: '/companies/industrial-services' },
                    { title: 'JIGISHA ENVIROCARE Pvt. Ltd.', href: '/companies/envirocare' },
                    { title: 'JIGISHA TECHNOLOGIES Pvt. Ltd.', href: '/companies/technologies' },
                    { title: 'JIGISHA INDUSTRIES Pvt. Ltd.', href: '/companies/industries' },
                    { title: 'JIGISHA ENGINEERING Pvt. Ltd.', href: '/companies/engineering' },
                    { title: 'JIGISHA AUTOMOBILES Pvt. Ltd.', href: '/companies/automobiles' },
                    { title: 'JIGISHA INFRA Pvt. Ltd.', href: '/companies/infra' },
                    { title: 'JIGISHA DEFENSE TECHNOLOGIES Pvt. Ltd.', href: '/companies/defense' },
                    { title: 'JIGISHA INFIN Pvt. Ltd.', href: '/companies/infin' },
                    { title: 'JIGISHA PHARMA & HEALTHCARE Pvt. Ltd.', href: '/companies/pharma' },
                    { title: 'JIGISHA LOGISTICS Pvt. Ltd.', href: '/companies/logistics' },
                    { title: 'JIGISHA AGRO INDUSTRIES Pvt. Ltd.', href: '/companies/agro' },
                    { title: 'JIGISHA ELECTRICALS & ELECTRONICS Pvt. Ltd.', href: '/companies/electricals' },
                    { title: 'JIGISHA RAILTECH Pvt. Ltd.', href: '/companies/railtech' },
                    { title: 'JIGISHA RETAILS Pvt. Ltd.', href: '/companies/retails' },
                    { title: 'Jigisha Media Vision Pvt. Ltd.', href: '/companies/media' },
                    { title: 'Jigisha Infotech Pvt. Ltd.', href: '/companies/infotech' },
                    { title: 'Jigisha Green Pvt. Ltd.', href: '/companies/green' },
                    { title: 'JIGISHA INTERNATIONAL Pvt. Ltd.', href: '/companies/international' }
                ]
            },
            {
                id: 'col1-websites',
                title: 'Group Websites',
                expandable: true,
                items: [
                    { title: 'www.jigisha.site', href: 'https://www.jigisha.site', external: true },
                    { title: 'www.jigisharailtech.in', href: 'https://www.jigisharailtech.in', external: true },
                    { title: 'www.jigishainfotech.com', href: 'https://www.jigishainfotech.com', external: true },
                    { title: 'www.innews.world', href: 'https://www.innews.world', external: true },
                    { title: 'www.innews.org', href: 'https://www.innews.org', external: true },
                    { title: 'www.jigisha.technology', href: 'https://www.jigisha.technology', external: true },
                    { title: 'www.jigishaenviro.com', href: 'https://www.jigishaenviro.com', external: true },
                    { title: 'www.jigishaagro.com', href: 'https://www.jigishaagro.com', external: true },
                    { title: 'www.jigisha.media', href: 'https://www.jigisha.media', external: true },
                    { title: 'www.jigisha.life', href: 'https://www.jigisha.life', external: true },
                    { title: 'www.jigisha.international', href: 'https://www.jigisha.international', external: true },
                    { title: 'www.jigisha.green', href: 'https://www.jigisha.green', external: true },
                    { title: 'www.jigisha.engineering', href: 'https://www.jigisha.engineering', external: true },
                    { title: 'www.jigisha.co', href: 'https://www.jigisha.co', external: true },
                    { title: 'www.jigisharetail.com', href: 'https://www.jigisharetail.com', external: true },
                    { title: 'www.jigisharetail.in', href: 'https://www.jigisharetail.in', external: true },
                    { title: 'www.jigisharailtech.com', href: 'https://www.jigisharailtech.com', external: true },
                    { title: 'www.jigisha.online', href: 'https://www.jigisha.online', external: true },
                    { title: 'www.jigisha.in', href: 'https://www.jigisha.in', external: true },
                    { title: 'www.jigisha.store', href: 'https://www.jigisha.store', external: true },
                    { title: 'www.jigisha.services', href: 'https://www.jigisha.services', external: true },
                    { title: 'www.jigisha.co.in', href: 'https://www.jigisha.co.in', external: true },
                    { title: 'www.jigishalogistic.com', href: 'https://www.jigishalogistic.com', external: true },
                    { title: 'www.jigisha.global', href: 'https://www.jigisha.global', external: true },
                    { title: 'www.jigisha.world', href: 'https://www.jigisha.world', external: true },
                    { title: 'www.jigisha.industries', href: 'https://www.jigisha.industries', external: true },
                    { title: 'www.jigishaautomobiles.com', href: 'https://www.jigishaautomobiles.com', external: true },
                    { title: 'www.jigishaelectronics.com', href: 'https://www.jigishaelectronics.com', external: true },
                    { title: 'www.jigishaelectricals.com', href: 'https://www.jigishaelectricals.com', external: true },
                    { title: 'www.jigisha.digital', href: 'https://www.jigisha.digital', external: true },
                    { title: 'www.jigisha.shop', href: 'https://www.jigisha.shop', external: true },
                    { title: 'www.jigisharailtech.online', href: 'https://www.jigisharailtech.online', external: true },
                    { title: 'www.jigishainfra.com', href: 'https://www.jigishainfra.com', external: true }
                ]
            },
            {
                id: 'col1-policies',
                title: 'Policies',
                expandable: true,
                items: [
                    { title: 'Privacy Policy', href: '/about/policies/privacy' },
                    { title: 'Terms & Conditions', href: '/about/policies/terms' },
                    { title: 'Refund Policy', href: '/about/policies/refund' }
                ]
            }
        ],
        columns2: [
            {
                id: 'col2',
                title: 'Group Businesses',
                expandable: true,
                subItems: [
                    {
                        id: 'international-business',
                        title: 'International Business',
                        expandable: true,
                        items: [
                            { title: 'Import', href: '/business/international/import' },
                            { title: 'Export', href: '/business/international/export' },
                            { title: 'ICMBRO', href: '/business/international/icmbro' },
                            { title: 'E-commerce', href: '/business/international/ecommerce' },
                            { title: 'Overseas Shipping & Logistics', href: '/business/international/overseas-shipping' },
                            { title: 'Contract Manufacturing', href: '/business/international/contract-manufacturing' },
                            { title: 'Join Venture', href: '/business/international/joint-venture' },
                            { title: 'Collaboration', href: '/business/international/collaboration' },
                            { title: 'Outsourcing', href: '/business/international/outsourcing' },
                            { title: 'Service Sector', href: '/business/international/service-sector' },
                            { title: 'White Labeling', href: '/business/international/white-labeling' }
                        ]
                    }
                ],
                items: [
                    { title: 'International Business', href: '/business/international', expandable: true },
                    { title: 'Agro Industry', href: '/business/agro' },
                    { title: 'Advertising', href: '/business/advertising' },
                    { title: 'Agrofusion', href: '/business/agrofusion' },
                    { title: 'Automobiles', href: '/business/automobiles' },
                    { title: 'Collaboration', href: '/business/collaboration' },
                    { title: 'Contract Manufacturing', href: '/business/contract-manufacturing' },
                    { title: 'Defence Technology', href: '/business/defence' },
                    { title: 'E-commerce', href: '/business/ecommerce' },
                    { title: 'Electricals', href: '/business/electricals' },
                    { title: 'Electronics', href: '/business/electronics' },
                    { title: 'Engineering', href: '/business/engineering' },
                    { title: 'Green Fuel Tech', href: '/business/green-fuel-tech' },
                    { title: 'ICMBRO', href: '/business/icmbro' },
                    { title: 'Industrial Supply', href: '/business/industrial-supply' },
                    { title: 'Infra', href: '/business/infra' },
                    { title: 'Insurance & Finance (TPC)', href: '/business/insurance-finance' },
                    { title: 'IT & Infotech', href: '/business/it' },
                    { title: 'Join Venture', href: '/business/joint-venture' },
                    { title: 'News & Media', href: '/business/news-media' },
                    { title: 'Our Infrastructure', href: '/business/our-infrastructure' },
                    { title: 'Outsourcing', href: '/business/outsourcing' },
                    { title: 'Pharma & Healthcare', href: '/business/pharma' },
                    { title: 'Railway & Metro', href: '/business/railways' },
                    { title: 'Retails', href: '/business/retails' },
                    { title: 'Shipping & Logistics', href: '/business/shipping-logistics' },
                    { title: 'Technology', href: '/business/technology' }
                ]
            }
        ],
        columns3: [
            {
                id: 'col3-info',
                title: 'Corporate Information',
                expandable: true,
                items: [
                    { title: 'Our Mission', href: '/about/mission' },
                    { title: 'Our Vision', href: '/about/vision' },
                    { title: 'Our Way', href: '/about/way' },
                    { title: 'Our Client', href: '/about/client' },
                    { title: 'Our Values', href: '/about/values' },
                    { title: 'Our Core Benefits', href: '/about/core-benefits' },
                    { title: 'Our Stratergy', href: '/about/strategy' },
                    { title: 'Infrastructure', href: '/about/infrastructure' },
                    { title: 'Our Team', href: '/about/team' },
                    { title: 'Corporate Social Responsbility', href: '/about/csr' },
                    { title: 'Corporate Philosophy', href: '/about/philosophy' },
                    { title: 'Investor Relationship', href: '/about/investor-relationship' }
                ]
            }
        ]
    },
    {
        id: 'parts-products',
        title: 'Parts & Products',
        hasDropdown: true,
        isMega: true,
        icon: '<svg width="16" height="16" class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>',
        columns: [
            {
                id: 'products-col1',
                title: 'Agricultural & Raw Materials',
                items: [
                    { title: 'Agriculture Products', href: '/products/agriculture' },
                    { title: 'Industrial Raw Material', href: '/products/industrial-raw' },
                    { title: 'Envirocare', href: '/products/envirocare' },
                    { title: 'Metro Train Products', href: '/products/metro-train' },
                    { title: 'Industrial Products', href: '/products/industrial' },
                    { title: 'Commercial Products', href: '/products/commercial' },
                    { title: 'Domestic Products', href: '/products/domestic' },
                    { title: 'Pharma & Healthcare', href: '/products/pharma' }
                ]
            }
        ],
        columns2: [
            {
                id: 'products-col2',
                title: 'Automobiles & Heavy Equipment',
                items: [
                    { title: 'Industrial Automobiles', href: '/products/industrial-automobiles' },
                    { title: 'Commercial Automobiles', href: '/products/commercial-automobiles' },
                    { title: 'Domestic Automobiles', href: '/products/domestic-automobiles' },
                    { title: 'Earthmovers & Mining Products', href: '/products/earthmovers' },
                    { title: 'Industrial Electrical Products', href: '/products/industrial-electrical' },
                    { title: 'Commercial Electrical Products', href: '/products/commercial-electrical' },
                    { title: 'Domestic Electrical Products', href: '/products/domestic-electrical' }
                ]
            }
        ],
        columns3: [
            {
                id: 'products-col3',
                title: 'Electronics & Technology',
                items: [
                    { title: 'Industrial Electronics Products', href: '/products/industrial-electronics' },
                    { title: 'Commercial Electronics Products', href: '/products/commercial-electronics' },
                    { title: 'Domestic Electronics Products', href: '/products/domestic-electronics' },
                    { title: 'IT Products', href: '/products/it' },
                    { title: 'Industrial Technology & Automation', href: '/products/automation' },
                    { title: 'Solar Products', href: '/products/solar' },
                    { title: 'Large Power Production, Products & Parts', href: '/products/power-production' },
                    { title: 'contract manufacturing', href: '/products/contract-manufacturing' }
                ]
            }
        ]
    },
    {
        id: 'services',
        title: 'Services',
        href: '/services',
        hasDropdown: true,
        isMega: true,
        icon: '<svg width="16" height="16" class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>',
        columns: [
            {
                id: 'services-col1',
                title: 'Core Services',
                items: [
                    { title: 'Engineering Services', href: '/services/engineering' },
                    { title: 'Agriculture', href: '/services/agriculture' },
                    { title: 'Envirocare', href: '/services/envirocare' },
                    { title: 'Metro Train', href: '/services/metro-train' },
                    { title: 'Industrial', href: '/services/industrial' },
                    { title: 'Commercial', href: '/services/commercial' },
                    { title: 'Domestic', href: '/services/domestic' },
                    { title: 'Pharma & Healthcare', href: '/services/pharma' },
                    { title: 'Industrial Automobiles', href: '/services/industrial-automobiles' },
                    { title: 'Commercial Automobiles', href: '/services/commercial-automobiles' },
                    { title: 'Domestic Automobiles', href: '/services/domestic-automobiles' },
                    { title: 'Earthmovers & Mining', href: '/services/earthmovers' }
                ]
            }
        ],
        columns2: [
            {
                id: 'services-col2',
                title: 'Technical Services',
                items: [
                    { title: 'Industrial Electrical', href: '/services/industrial-electrical' },
                    { title: 'Commercial Electrical', href: '/services/commercial-electrical' },
                    { title: 'Domestic Electrical', href: '/services/domestic-electrical' },
                    { title: 'Industrial Electronics', href: '/services/industrial-electronics' },
                    { title: 'Commercial Electronics', href: '/services/commercial-electronics' },
                    { title: 'Domestic Electronics', href: '/services/domestic-electronics' },
                    { title: 'IT Services', href: '/services/it' },
                    { title: 'Industrial Technology & Automation', href: '/services/automation' },
                    { title: 'Solar & Other Energy Sector', href: '/services/solar-energy' },
                    { title: 'Large Power Production Plants', href: '/services/power-plants' }
                ]
            }
        ],
        columns3: [
            {
                id: 'services-col3',
                title: 'Specialized Services',
                items: [
                    { title: 'Contract Manufacturing', href: '/services/contract-manufacturing' },
                    { title: 'Services for Railway', href: '/services/railway' },
                    { title: 'Services for Metro Project', href: '/services/metro-project' },
                    { title: 'Railway Products', href: '/services/railway-products' },
                    { title: 'Industrial Service', href: '/services/industrial-service' },
                    { title: 'Finance', href: '/services/finance' },
                    { title: 'Insurance', href: '/services/insurance' },
                    { title: 'Advertising', href: '/services/advertising' },
                    { title: 'News & Media', href: '/services/news-media' }
                ]
            }
        ]
    },
    {
        id: 'contact-us',
        title: 'Contact Us',
        hasDropdown: true,
        isTwoColumn: true,
        icon: '<svg width="16" height="16" class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>',
        contactItems: [
            { title: 'Customer Care', href: '/contact/customer-care' },
            { title: 'Enquiry', href: '/contact/enquiry' },
            { title: 'Commercial Services', href: '/contact/commercial' },
            { title: 'Vendor Support', href: '/contact/vendor-support' },
            { title: 'Logistics Support', href: '/contact/logistics-support' },
            { title: 'Product Support', href: '/contact/product-support' },
            { title: 'Service Support', href: '/contact/service-support' },
            { title: 'Advertise With Us', href: '/contact/advertise' }
        ],
        opportunityItems: [
            { title: 'Join Us', href: '/opportunity/join-us' },
            { title: 'career', href: '/opportunity/career' },
            { title: 'Becom A Vendor', href: '/opportunity/become-vendor' },
            { title: 'advertise with us', href: '/opportunity/advertise' }
        ]
    },
    {
        id: 'media',
        title: 'Media',
        hasDropdown: true,
        icon: '<svg width="16" height="16" class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>',
        items: [
            { title: 'Downloads', href: '/media/downloads' },
            { title: 'News', href: '/media/news' },
            { title: 'Blogs', href: '/media/blogs' },
            { title: 'Certificates', href: '/media/certificates' },
            { title: 'Booklets', href: '/media/booklets' },
            { title: 'Product Brochures', href: '/media/product-brochures' },
            { title: 'Service Brochures', href: '/media/service-brochures' },
            { title: 'Warranty Cards', href: '/media/warranty-cards' },
            { title: 'Product Catalogs', href: '/media/product-catalogs' }
        ]
    },
    {
        id: 'login',
        title: 'Login',
        hasDropdown: true,
        icon: '<svg width="16" height="16" class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>',
        items: [
            { title: 'Buyer Login', href: '/login/buyer' },
            { title: 'Employee Email Login', href: '/login/employee' },
            { title: 'Vendor Login', href: '/login/vendor' },
            { title: 'Project Team Login', href: '/login/project-team' }
        ]
    }
];