import type { SEOData, SEOConfigs } from "./types";

// SEO Constants for TerrTwenty Farms
export const SEO_DATA: SEOData = {
  // Base site information
  siteName: 'TerrTwenty Farms',
  siteUrl: 'https://yourdomain.com/',
  siteDescription: 'TerrTwenty Farms delivers fresh, sustainable produce from our farms to your hands. Discover our team, services, and news.',
  siteKeywords: 'farm, agriculture, sustainable, fresh produce, organic, local farming, vegetables, fruits, team, services, news, enquiry, contact',
  
  // Contact information
  contactPhone: '+1-555-123-4567',
  contactAddress: {
    street: '123 Farm Road',
    city: 'Farm City',
    state: 'CA',
    zip: '12345',
    country: 'US'
  },
  
  // Social media links
  socialLinks: [
    'https://facebook.com/terrtwentyfarms',
    'https://twitter.com/terrtwentyfarms',
    'https://instagram.com/terrtwentyfarms'
  ],
  
  // Default images
  defaultImage: '/images/og-image.png',
  logoImage: '/images/logo.png'
};

// Structured data for different pages
export const STRUCTURED_DATA = {
  // Homepage structured data
  homepage: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SEO_DATA.siteName,
    "description": SEO_DATA.siteDescription,
    "url": SEO_DATA.siteUrl,
    "logo": SEO_DATA.logoImage,
    "image": SEO_DATA.defaultImage,
    "sameAs": SEO_DATA.socialLinks,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SEO_DATA.contactPhone,
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_DATA.contactAddress.street,
      "addressLocality": SEO_DATA.contactAddress.city,
      "addressRegion": SEO_DATA.contactAddress.state,
      "postalCode": SEO_DATA.contactAddress.zip,
      "addressCountry": SEO_DATA.contactAddress.country
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fresh Produce",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Fresh Vegetables",
            "description": "Locally grown, organic vegetables"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Fresh Fruits",
            "description": "Seasonal fruits from our orchards"
          }
        }
      ]
    }
  },

  // Products page structured data
  products: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Fresh Produce Products",
    "description": "Quality fresh produce from TerrTwenty Farms",
    "url": `${SEO_DATA.siteUrl}products`,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Fresh Vegetables",
        "description": "Locally grown, organic vegetables",
        "image": "https://yourdomain.com/images/vegetables.jpg",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "price": "15.99"
        }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Fresh Fruits",
        "description": "Seasonal fruits from our orchards",
        "image": "https://yourdomain.com/images/fruits.jpg",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "price": "12.99"
        }
      }
    ]
  },

  // Contact page structured data
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact TerrTwenty Farms",
    "description": "Get in touch with TerrTwenty Farms for fresh produce inquiries and orders",
    "url": `${SEO_DATA.siteUrl}contact`,
    "mainEntity": {
      "@type": "Organization",
      "name": SEO_DATA.siteName,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": SEO_DATA.contactPhone,
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SEO_DATA.contactAddress.street,
        "addressLocality": SEO_DATA.contactAddress.city,
        "addressRegion": SEO_DATA.contactAddress.state,
        "postalCode": SEO_DATA.contactAddress.zip,
        "addressCountry": SEO_DATA.contactAddress.country
      }
    }
  }
};

// SEO configurations for different pages
export const PAGE_SEO_CONFIG: SEOConfigs = {
  homepage: {
    title: `${SEO_DATA.siteName} | Quality Products & Sustainable Farming`,
    description: SEO_DATA.siteDescription,
    keywords: SEO_DATA.siteKeywords,
    image: SEO_DATA.defaultImage,
    url: SEO_DATA.siteUrl,
    type: 'website',
    canonical: SEO_DATA.siteUrl,
    structuredData: STRUCTURED_DATA.homepage
  },
  
  products: {
    title: 'Fresh Produce Products | TerrTwenty Farms',
    description: 'Discover our quality fresh produce including organic vegetables and seasonal fruits. Locally grown and sustainably farmed.',
    keywords: 'fresh produce, organic vegetables, seasonal fruits, local farming, sustainable agriculture, farm products',
    image: '/images/products-og-image.png',
    url: `${SEO_DATA.siteUrl}products`,
    type: 'website',
    canonical: `${SEO_DATA.siteUrl}products`,
    structuredData: STRUCTURED_DATA.products
  },
  
  contact: {
    title: 'Contact Us | TerrTwenty Farms',
    description: 'Get in touch with TerrTwenty Farms for fresh produce inquiries, orders, and customer support. We\'re here to help with all your farming needs.',
    keywords: 'contact, customer service, farm contact, produce inquiry, order fresh produce, farm support',
    image: '/images/contact-og-image.png',
    url: `${SEO_DATA.siteUrl}contact`,
    type: 'website',
    canonical: `${SEO_DATA.siteUrl}contact`,
    structuredData: STRUCTURED_DATA.contact
  }
}; 