'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = heroRef?.current?.querySelectorAll<HTMLElement>('.hero-el');
    if (!elements) return;
    elements?.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.8s ease`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
        el.style.filter = 'blur(0)';
        el?.classList?.add('entered');
      }, 150 + i * 130);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center overflow-hidden pt-20">
      
      {/* Blob backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] blob-primary animate-pulse-glow"
          style={{ transform: 'translate(-30%, -20%)' }} />
        
        <div
          className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] blob-accent animate-pulse-glow"
          style={{ animationDelay: '1.5s', transform: 'translate(20%, 20%)' }} />
        
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center py-12 md:py-16 lg:py-24">
          {/* Left: Text */}
          <div className="space-y-6 lg:space-y-7 text-center md:text-left">
            {/* Badge */}
            <div
              className="hero-el inline-flex items-center gap-2 px-4 py-2 rounded-full glass-warm border border-primary/20 mx-auto md:mx-0"
              style={{ opacity: 0, transform: 'translateY(20px)', filter: 'blur(4px)' }}>
              
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Open Now · Mumbai, Bandra West
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-el font-display text-hero text-foreground"
              style={{ opacity: 0, transform: 'translateY(30px)', filter: 'blur(4px)' }}>
              
              Where Every<br />
              <span className="italic text-primary">Bite Tells</span><br />
              a Story.
            </h1>

            {/* Subtext */}
            <p
              className="hero-el text-base sm:text-lg text-muted-foreground max-w-md mx-auto md:mx-0 leading-relaxed"
              style={{ opacity: 0, transform: 'translateY(20px)', filter: 'blur(4px)' }}>
              
              Chef-crafted dishes rooted in Indian heritage. Every plate a
              celebration of spice, technique, and soul.
            </p>

            {/* CTAs */}
            <div
              className="hero-el flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
              style={{ opacity: 0, transform: 'translateY(20px)', filter: 'blur(4px)' }}>
              
              <a href="#menu" className="btn-primary text-sm sm:text-base">
                Order Now
                <Icon name="ArrowRightIcon" size={18} />
              </a>
              <a href="#booking" className="btn-outline text-sm sm:text-base">
                Book a Table
                <Icon name="CalendarDaysIcon" size={18} />
              </a>
            </div>

            {/* Micro stats */}
            <div
              className="hero-el flex flex-wrap gap-5 sm:gap-6 justify-center md:justify-start pt-2"
              style={{ opacity: 0, transform: 'translateY(20px)', filter: 'blur(4px)' }}>
              
              {[
              { num: '4.9★', label: 'Rating' },
              { num: '12k+', label: 'Happy Diners' },
              { num: '8 Yrs', label: 'Of Excellence' }]?.
              map((s) =>
              <div key={s?.label} className="text-center md:text-left">
                  <p className="text-xl sm:text-2xl font-bold font-display text-foreground tracking-tight">{s?.num}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{s?.label}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="hero-el relative group mt-4 md:mt-0"
            style={{ opacity: 0, transform: 'translateY(20px) scale(0.97)', filter: 'blur(4px)' }}>
            
            {/* Spinning dashed ring */}
            <div className="absolute inset-[-16px] rounded-3xl border-2 border-dashed border-primary/25 spin-border pointer-events-none hidden lg:block" />

            {/* Glow */}
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700 pointer-events-none" />

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl aspect-[4/3] sm:aspect-[4/4] md:aspect-[3/4]">
              <AppImage
                src="https://images.unsplash.com/photo-1488992783499-418eb1f62d08"
                alt="Elegant plated dish in warm, dim restaurant lighting with rich sauce and garnish on white ceramic"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                priority />
              
              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />

              {/* Floating dish card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 glass-dark rounded-2xl p-3 sm:p-4 flex items-end justify-between">
                <div>
                  <p className="text-accent font-display italic text-base sm:text-lg leading-tight">Chef&apos;s Special</p>
                  <p className="text-white font-bold text-sm sm:text-base">Rogan Josh Royale</p>
                  <p className="text-white/60 text-xs mt-0.5">Slow-braised lamb · Kashmir spices</p>
                </div>
                <div className="bg-primary rounded-xl px-2.5 sm:px-3 py-1.5 text-white font-bold text-sm whitespace-nowrap">
                  ₹ 895
                </div>
              </div>
            </div>

            {/* Floating badge top-right */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 glass-warm rounded-2xl px-3 sm:px-4 py-2 sm:py-3 border border-border shadow-lg animate-float hidden sm:block">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Tonight&apos;s Pick</p>
              <p className="text-sm font-bold text-foreground mt-0.5">Butter Chicken</p>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5]?.map((i) =>
                <span key={i} className="star-filled text-xs">★</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}