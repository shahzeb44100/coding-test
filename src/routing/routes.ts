import { lazy } from 'react';
import type { Route } from '../constant/types';

// Lazy load pages for better performance
const HomePage = lazy(() => import('../pages/HomePage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const TeamPage = lazy(() => import('../pages/TeamPage'));
const EnquiryPage = lazy(() => import('../pages/EnquiryPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

export const routes: Route[] = [
  {
    path: '/',
    element: HomePage,
    title: 'About - TerrTwenty Farms',
    description: 'Welcome to TerrTwenty Farms - Your trusted partner in agricultural excellence'
  },
  {
    path: '/news',
    element: NewsPage,
    title: 'News - TerrTwenty Farms',
    description: 'Latest news and updates from TerrTwenty Farms'
  },
  {
    path: '/services',
    element: ServicesPage,
    title: 'Services - TerrTwenty Farms',
    description: 'Comprehensive agricultural services offered by TerrTwenty Farms'
  },
  {
    path: '/team',
    element: TeamPage,
    title: 'Our Team - TerrTwenty Farms',
    description: 'Meet the dedicated team behind TerrTwenty Farms'
  },
  {
    path: '/enquiry',
    element: EnquiryPage,
    title: 'Make Enquiry - TerrTwenty Farms',
    description: 'Get in touch with TerrTwenty Farms for your agricultural needs'
  },
  {
    path: '/contact',
    element: ContactPage,
    title: 'Contact Us - TerrTwenty Farms',
    description: 'Contact TerrTwenty Farms for any inquiries or support'
  }
]; 