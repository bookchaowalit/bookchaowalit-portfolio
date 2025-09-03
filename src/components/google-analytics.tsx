"use client";

import { GoogleAnalytics as GA } from '@next/third-parties/google'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

interface GoogleAnalyticsProps {
  gaId: string;
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', gaId, {
        page_path: pathname,
      })
    }
  }, [pathname, gaId])

  return <GA gaId={gaId} />
}

// Analytics event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
    })
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: url,
    })
  }
}

// Predefined event tracking functions
export const trackProjectView = (projectName: string) => {
  trackEvent('view_project', {
    project_name: projectName,
    content_type: 'project'
  })
}

export const trackContactSubmission = () => {
  trackEvent('form_submit', {
    form_name: 'contact_form',
    content_type: 'contact'
  })
}

export const trackBlogRead = (blogTitle: string) => {
  trackEvent('read_blog', {
    blog_title: blogTitle,
    content_type: 'blog'
  })
}

export const trackBusinessView = (businessName: string) => {
  trackEvent('view_business', {
    business_name: businessName,
    content_type: 'business'
  })
}