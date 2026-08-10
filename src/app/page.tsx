import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import MenuSection from './components/MenuSection';
import OffersSection from './components/OffersSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';

export const metadata: Metadata = {
  title: 'Savor — Fine Dining in the Heart of Mumbai',
  description: 'Savor restaurant offers chef-crafted dishes in a warm, elegant setting. Book your table or order online. Starters, mains, and artisan drinks in Bandra, Mumbai.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Savor — Fine Dining Mumbai',
    description: 'Chef-crafted dishes, warm ambiance, and seamless reservations.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: 'Savor',
            description: 'Chef-crafted Indian cuisine in Bandra West, Mumbai.',
            url: 'https://savorrestaurant.in',
            telephone: '+91-22-4567-8900',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '14, Linking Road',
              addressLocality: 'Bandra West',
              addressRegion: 'Mumbai',
              postalCode: '400050',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 19.059,
              longitude: 72.836,
            },
            openingHours: 'Mo-Su 12:00-23:00',
            servesCuisine: 'Indian',
            priceRange: '₹₹',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '12000',
            },
          }),
        }}
      />

      <HeroSection />
      <StatsBar />
      <MenuSection />
      <OffersSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}