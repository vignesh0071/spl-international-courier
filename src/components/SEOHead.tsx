import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: 'website' | 'article' | 'business.business';
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: Record<string, any> | Array<Record<string, any>>;
}

const BASE_URL = 'https://splexpress.in';
const DEFAULT_IMAGE = `${BASE_URL}/spl-official-logo.png`;

function setMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string | undefined) {
  if (!content) {
    const existing = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (existing) {
      existing.remove();
    }
    return;
  }

  let tag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attributeName, attributeValue);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '/',
  keywords,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  breadcrumbs,
  structuredData,
}) => {
  useEffect(() => {
    // 1. Page Title
    document.title = title;

    // 2. Canonical URL (strictly https://splexpress.in/...)
    const normalizedPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${BASE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`;
    setCanonical(canonicalUrl);

    // 3. Primary Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. Open Graph Meta Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'SPL Worldwide Express');
    setMetaTag('property', 'og:locale', 'en_IN');

    // 5. Twitter Card Meta Tags
    setMetaTag('property', 'twitter:card', 'summary_large_image');
    setMetaTag('property', 'twitter:title', title);
    setMetaTag('property', 'twitter:description', description);
    setMetaTag('property', 'twitter:url', canonicalUrl);
    setMetaTag('property', 'twitter:image', ogImage);

    // 6. Dynamic JSON-LD Structured Data
    const graph: any[] = [];

    // Add BreadcrumbList if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': crumb.name,
          'item': crumb.item.startsWith('http') ? crumb.item : `${BASE_URL}${crumb.item}`,
        })),
      });
    }

    // Add custom page structured data
    if (structuredData) {
      if (Array.isArray(structuredData)) {
        graph.push(...structuredData);
      } else {
        graph.push(structuredData);
      }
    }

    let scriptTag = document.getElementById('spl-page-ldjson') as HTMLScriptElement | null;
    if (graph.length > 0) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'spl-page-ldjson';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': graph,
      }, null, 2);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Cleanup custom page JSON-LD on unmount
      const existingScript = document.getElementById('spl-page-ldjson');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, canonicalPath, keywords, ogType, ogImage, breadcrumbs, structuredData]);

  return null;
};
export default SEOHead;
