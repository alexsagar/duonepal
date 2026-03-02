import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://duonepal.com';

const SEO_BY_PATH = {
  '/': {
    title: 'DuoNepal | Book Duolingo English Test in Nepal',
    description:
      'Book your Duolingo English Test in Nepal with local payment methods. Fast confirmation, secure support, and reliable booking assistance.',
  },
  '/pricing': {
    title: 'Pricing | Duolingo Test Booking Nepal - NPR 8,500',
    description:
      'View transparent Duolingo English Test booking pricing in Nepal. Current price NPR 8,500 with local payment support.',
  },
  '/book-now': {
    title: 'Book Now | Duolingo English Test - DuoNepal',
    description:
      'Complete your Duolingo English Test booking in Nepal. Upload payment receipt and get fast confirmation from DuoNepal.',
  },
  '/partner': {
    title: 'Become a Partner | DuoNepal',
    description:
      'Partner with DuoNepal for bulk Duolingo test bookings, consultancy support, and priority handling for students.',
  },
  '/bulk-booking': {
    title: 'Bulk Booking | DuoNepal',
    description:
      'Request bulk Duolingo English Test vouchers for consultancies, schools, and institutions in Nepal.',
  },
  '/refer': {
    title: 'Refer & Earn | DuoNepal',
    description:
      'Share DuoNepal with friends and earn rewards on successful Duolingo English Test bookings.',
  },
  '/contact': {
    title: 'Contact DuoNepal | Support for DET Booking',
    description:
      'Get in touch with DuoNepal for Duolingo English Test booking help, payment support, and partnership inquiries.',
  },
  '/blog': {
    title: 'Blog | Duolingo English Test Guides in Nepal - DuoNepal',
    description:
      'Read DuoNepal blogs on Duolingo English Test booking, pricing, and preparation tips for students in Nepal.',
  },
  '/terms': {
    title: 'Terms and Conditions | DuoNepal',
    description: 'Read DuoNepal terms and conditions for Duolingo English Test booking services.',
  },
  '/privacy': {
    title: 'Privacy Policy | DuoNepal',
    description: 'Read DuoNepal privacy policy and data handling practices.',
  },
  '/track-booking': {
    title: 'Track Booking | DuoNepal',
    description: 'Track your Duolingo English Test booking status with DuoNepal.',
  },
};

const setMeta = (selector, attribute, value) => {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, selector.includes('property=') ? selector.match(/property="([^"]+)"/)?.[1] || '' : selector.match(/name="([^"]+)"/)?.[1] || '');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
};

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = SEO_BY_PATH[pathname] || SEO_BY_PATH['/'];
    const canonical = `${SITE_URL}${pathname}`;

    document.title = seo.title;

    setMeta('meta[name="description"]', 'name', seo.description);
    setMeta('meta[property="og:title"]', 'property', seo.title);
    setMeta('meta[property="og:description"]', 'property', seo.description);
    setMeta('meta[property="og:url"]', 'property', canonical);
    setMeta('meta[name="twitter:title"]', 'name', seo.title);
    setMeta('meta[name="twitter:description"]', 'name', seo.description);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
  }, [pathname]);

  return null;
};

export default SeoManager;
