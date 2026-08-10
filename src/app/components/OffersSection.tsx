'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const offers = [
{
  id: 'happy-hour',
  title: 'Happy Hour',
  subtitle: 'Every day 3–6 PM',
  description: '30% off on all drinks and starters. Perfect for an early evening with friends.',
  badge: '30% OFF',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10a7a8bc7-1773018326317.png",
  alt: 'Colorful cocktails and drinks on a bar counter in warm dim lighting',
  cta: 'Claim Offer',
  tall: true
},
{
  id: 'weekend-brunch',
  title: 'Weekend Brunch',
  subtitle: 'Sat & Sun · 11 AM–3 PM',
  description: 'Unlimited chai, fresh-pressed juices, and a rotating brunch spread.',
  badge: 'Limited Seats',
  image: "https://images.unsplash.com/photo-1645542934809-1d668ceedc6d",
  alt: 'Sunlit brunch spread with colorful dishes and fresh juices on a wooden table',
  cta: 'Book Now',
  tall: false
},
{
  id: 'chefs-table',
  title: "Chef\'s Table",
  subtitle: '7-Course Tasting Menu',
  description: 'An intimate dining experience curated by Chef Arjun Mehta. 6 guests max.',
  badge: '₹ 3,200/head',
  image: "https://images.unsplash.com/photo-1457823838960-5b94fb2985fb",
  alt: 'Elegantly plated fine dining course on white plate with microgreens and sauce art',
  cta: 'Reserve',
  tall: false
},
{
  id: 'loyalty',
  title: 'Savor Loyalty Club',
  subtitle: 'Earn points on every visit',
  description: 'Join free. Get ₹100 off your 5th visit, free dessert on birthdays, and priority bookings.',
  badge: 'Free to Join',
  image: '',
  alt: '',
  cta: 'Join Now',
  tall: false,
  isCard: true
}];


export default function OffersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    el?.querySelectorAll('.slide-up')?.forEach((child) => observer?.observe(child));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="offers" ref={sectionRef} className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4 md:gap-6">
          <div className="space-y-3">
            <p className="section-label slide-up">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Special Offers
            </p>
            <h2 className="font-display text-section-title text-foreground slide-up delay-1">
              Deals Worth <span className="italic text-primary">Savoring.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base slide-up delay-2">
            Curated experiences and exclusive savings — available for a limited time.
          </p>
        </div>

        {/* Mobile: stacked layout */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Happy Hour */}
          <div className="relative overflow-hidden rounded-3xl group slide-up" style={{ height: '320px' }}>
            <AppImage
              src={offers?.[0]?.image}
              alt={offers?.[0]?.alt}
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 offer-gradient-dark" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
                {offers?.[0]?.badge}
              </span>
              <h3 className="font-display text-2xl font-bold text-white">{offers?.[0]?.title}</h3>
              <p className="text-white/70 text-sm font-semibold mt-1">{offers?.[0]?.subtitle}</p>
              <p className="text-white/80 text-sm mt-2 leading-relaxed">{offers?.[0]?.description}</p>
              <button className="mt-4 btn-outline-light text-sm self-start min-h-[44px]">
                {offers?.[0]?.cta}
                <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          </div>

          {/* Weekend Brunch */}
          <div className="relative overflow-hidden rounded-3xl group slide-up delay-1" style={{ height: '220px' }}>
            <AppImage
              src={offers?.[1]?.image}
              alt={offers?.[1]?.alt}
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 offer-gradient-dark" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2 self-start">
                {offers?.[1]?.badge}
              </span>
              <h3 className="font-display text-xl font-bold text-white">{offers?.[1]?.title}</h3>
              <p className="text-white/70 text-xs font-semibold mt-0.5">{offers?.[1]?.subtitle}</p>
              <button className="mt-3 text-xs font-semibold text-white/90 hover:text-white flex items-center gap-1 transition-colors min-h-[36px]">
                {offers?.[1]?.cta} <Icon name="ArrowRightIcon" size={14} />
              </button>
            </div>
          </div>

          {/* Chef's Table */}
          <div className="relative overflow-hidden rounded-3xl group slide-up delay-2" style={{ height: '220px' }}>
            <AppImage
              src={offers?.[2]?.image}
              alt={offers?.[2]?.alt}
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 offer-gradient-dark" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="inline-block bg-foreground/80 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 self-start">
                {offers?.[2]?.badge}
              </span>
              <h3 className="font-display text-xl font-bold text-white">{offers?.[2]?.title}</h3>
              <p className="text-white/70 text-xs font-semibold mt-0.5">{offers?.[2]?.subtitle}</p>
              <button className="mt-3 text-xs font-semibold text-white/90 hover:text-white flex items-center gap-1 transition-colors min-h-[36px]">
                {offers?.[2]?.cta} <Icon name="ArrowRightIcon" size={14} />
              </button>
            </div>
          </div>

          {/* Loyalty Card */}
          <div className="offer-card-wide rounded-3xl overflow-hidden slide-up delay-3 flex flex-col justify-between p-6"
          style={{ background: 'linear-gradient(135deg, #C8341A 0%, #E8863A 60%, #f5a055 100%)' }}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {offers?.[3]?.badge}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">{offers?.[3]?.title}</h3>
                <p className="text-white/80 text-sm font-semibold mt-1">{offers?.[3]?.subtitle}</p>
              </div>
              <div className="w-12 h-12 bg-white/15 rounded-2xl items-center justify-center flex-shrink-0 flex">
                <Icon name="StarIcon" size={24} className="text-white" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
              <p className="text-white/85 text-sm leading-relaxed">{offers?.[3]?.description}</p>
              <button className="btn-outline-light text-sm whitespace-nowrap min-h-[44px]">
                {offers?.[3]?.cta}
                <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet: bento grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 auto-rows-[260px]">
          {/* Happy Hour — tall card */}
          <div className="relative overflow-hidden rounded-3xl offer-card-tall row-span-2 group slide-up">
            <AppImage
              src={offers?.[0]?.image}
              alt={offers?.[0]?.alt}
              fill
              sizes="33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 offer-gradient-dark" />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
                {offers?.[0]?.badge}
              </span>
              <h3 className="font-display text-3xl font-bold text-white">{offers?.[0]?.title}</h3>
              <p className="text-white/70 text-sm font-semibold mt-1">{offers?.[0]?.subtitle}</p>
              <p className="text-white/80 text-sm mt-2 leading-relaxed">{offers?.[0]?.description}</p>
              <button className="mt-5 btn-outline-light text-sm self-start min-h-[44px]">
                {offers?.[0]?.cta}
                <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          </div>

          {/* Weekend Brunch */}
          <div className="relative overflow-hidden rounded-3xl group slide-up delay-1">
            <AppImage
              src={offers?.[1]?.image}
              alt={offers?.[1]?.alt}
              fill
              sizes="33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 offer-gradient-dark" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2 self-start">
                {offers?.[1]?.badge}
              </span>
              <h3 className="font-display text-xl font-bold text-white">{offers?.[1]?.title}</h3>
              <p className="text-white/70 text-xs font-semibold mt-0.5">{offers?.[1]?.subtitle}</p>
              <button className="mt-3 text-xs font-semibold text-white/90 hover:text-white flex items-center gap-1 transition-colors min-h-[36px]">
                {offers?.[1]?.cta} <Icon name="ArrowRightIcon" size={14} />
              </button>
            </div>
          </div>

          {/* Chef's Table */}
          <div className="relative overflow-hidden rounded-3xl group slide-up delay-2">
            <AppImage
              src={offers?.[2]?.image}
              alt={offers?.[2]?.alt}
              fill
              sizes="33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 offer-gradient-dark" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="inline-block bg-foreground/80 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 self-start">
                {offers?.[2]?.badge}
              </span>
              <h3 className="font-display text-xl font-bold text-white">{offers?.[2]?.title}</h3>
              <p className="text-white/70 text-xs font-semibold mt-0.5">{offers?.[2]?.subtitle}</p>
              <button className="mt-3 text-xs font-semibold text-white/90 hover:text-white flex items-center gap-1 transition-colors min-h-[36px]">
                {offers?.[2]?.cta} <Icon name="ArrowRightIcon" size={14} />
              </button>
            </div>
          </div>

          {/* Loyalty Card — wide, no image */}
          <div className="col-span-2 rounded-3xl overflow-hidden slide-up delay-3 flex flex-col justify-between p-7 lg:p-8"
          style={{ background: 'linear-gradient(135deg, #C8341A 0%, #E8863A 60%, #f5a055 100%)' }}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {offers?.[3]?.badge}
                </span>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white">{offers?.[3]?.title}</h3>
                <p className="text-white/80 text-sm font-semibold mt-1">{offers?.[3]?.subtitle}</p>
              </div>
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/15 rounded-2xl items-center justify-center flex-shrink-0 flex">
                <Icon name="StarIcon" size={28} className="text-white" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
              <p className="text-white/85 text-sm leading-relaxed max-w-sm">{offers?.[3]?.description}</p>
              <button className="btn-outline-light text-sm whitespace-nowrap min-h-[44px]">
                {offers?.[3]?.cta}
                <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}