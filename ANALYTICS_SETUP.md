# Analytics Setup Guide

This guide explains how to set up Google Analytics 4 (GA4) and Google Search Console for the portfolio website.

## Google Analytics 4 (GA4) Setup

### 1. Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Get your Measurement ID (format: G-XXXXXXXXXX)

### 2. Environment Variables
Add the following environment variables to your `.env.local` file:

```bash
# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Base URL for your website
NEXT_PUBLIC_BASE_URL=https://chaowalitgreepoke.com
```

### 3. Event Tracking
The website includes predefined event tracking functions:

```typescript
import { trackProjectView, trackContactSubmission, trackBlogRead, trackBusinessView } from '@/components/google-analytics'

// Track project views
trackProjectView('Project Name')

// Track contact form submissions
trackContactSubmission()

// Track blog post reads
trackBlogRead('Blog Title')

// Track business page views
trackBusinessView('Business Name')
```

## Google Search Console Setup

### 1. Add Property
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your website as a new property
3. Choose "URL prefix" method

### 2. Verify Ownership
1. Copy the verification meta tag from Google Search Console
2. Add it to your `.env.local` file:

```bash
# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-site-verification-code
```

### 3. Submit Sitemap
1. After verification, go to "Sitemaps" in Google Search Console
2. Submit your sitemap URL: `https://chaowalitgreepoke.com/sitemap.xml`

## Files Created/Modified

- `/src/components/google-analytics.tsx` - GA4 component with event tracking
- `/src/app/[locale]/layout.tsx` - Added GA4 and Search Console verification
- `/src/app/sitemap.ts` - Updated sitemap with all pages
- `/src/app/robots.ts` - Created robots.txt for search engines
- `/.env.example` - Environment variables template

## Testing

### GA4 Testing
1. Install GA4 debug extension in Chrome
2. Visit your website with the extension enabled
3. Check that events are being tracked in real-time reports

### Search Console Testing
1. Use "URL Inspection" tool to test pages
2. Check "Coverage" report for indexed pages
3. Monitor "Performance" for search visibility

## Features Implemented

✅ **Google Analytics 4 Integration**
- Automatic page view tracking
- Custom event tracking functions
- Path change tracking for SPA navigation

✅ **Google Search Console Integration**
- Meta verification tag
- Complete sitemap.xml
- Proper robots.txt

✅ **SEO Enhancements**
- Updated meta descriptions
- Structured data (JSON-LD)
- Optimized keywords
- Multi-language support

## Next Steps

1. Set up environment variables with your actual GA4 Measurement ID
2. Add Google Search Console verification code
3. Submit sitemap to Google Search Console
4. Monitor analytics and search performance
5. Add event tracking to key user interactions throughout the site