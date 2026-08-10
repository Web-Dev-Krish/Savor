'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  quote: "The Rogan Josh was unlike anything I've had in Mumbai. The depth of spice, the tenderness of the lamb — it felt like dining in a Kashmiri home. We've been back three times since.",
  name: 'Priya Nair',
  role: 'Food Blogger, Mumbai',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee51c2d6-1772781868223.png",
  rating: 5,
  dish: 'Rogan Josh Royale'
},
{
  quote: "Savor's Chef's Table was our anniversary dinner — 7 courses, each more stunning than the last. The kokum cooler palate cleanser was genius. Absolutely memorable.",
  name: 'Rahul & Sneha Kapoor',
  role: 'Regular Guests',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b201033f-1774627667672.png",
  rating: 5,
  dish: "Chef\'s Table Experience"
},
{
  quote: "Best paneer tikka in the city, no debate. And the masala chai to close the meal is perfection. The staff remembered our preferences on our second visit — that's rare.",
  name: 'Anjali Mehta',
  role: 'Architect, Bandra',
  avatar: "https://images.unsplash.com/photo-1657205937641-01d8c906274f",
  rating: 5,
  dish: 'Paneer Tikka + Masala Chai'
}];


export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1 }
    );
    el?.querySelectorAll('.slide-up')?.forEach((child) => observer?.observe(child));
    return () => observer?.disconnect();
  }, []);

  const current = testimonials?.[activeIndex];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Warm bg accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] md:w-[700px] md:h-[400px] blob-primary opacity-40" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <p className="section-label slide-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Guest Stories
          </p>
          <h2 className="font-display text-section-title text-foreground slide-up delay-1">
            What Our Guests <span className="italic text-primary">Say.</span>
          </h2>
        </div>

        {/* Stacked testimonial cards */}
        <div className="relative slide-up delay-2">
          {/* Back card 2 */}
          <div
            className="absolute inset-x-4 sm:inset-x-8 top-0 bottom-0 rounded-3xl bg-muted border border-border testimonial-back-2 pointer-events-none"
            aria-hidden="true" />
          
          {/* Back card 1 */}
          <div
            className="absolute inset-x-2 sm:inset-x-4 top-0 bottom-0 rounded-3xl bg-card border border-border testimonial-back-1 pointer-events-none"
            aria-hidden="true" />

          {/* Front card */}
          <div className="relative z-10 bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Quote + Meta */}
              <div className="flex-1 min-w-0">
                {/* Quote mark */}
                <div className="text-primary/20 font-display text-6xl sm:text-8xl leading-none select-none mb-2">
                  "
                </div>
                <blockquote className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground leading-relaxed italic -mt-4 sm:-mt-6">
                  {current?.quote}
                </blockquote>
                <div className="mt-5 md:mt-6 flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                    <AppImage
                      src={current?.avatar}
                      alt={`Portrait of ${current?.name}`}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm sm:text-base">{current?.name}</p>
                    <p className="text-xs text-muted-foreground">{current?.role}</p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="w-full md:w-52 lg:w-56 flex flex-row md:flex-col gap-3 sm:gap-4 flex-shrink-0">
                <div className="bg-muted rounded-2xl p-3 sm:p-4 border border-border flex-1 md:flex-none">
                  <div className="flex gap-0.5 mb-1 sm:mb-2">
                    {Array.from({ length: current?.rating })?.map((_, i) =>
                    <span key={i} className="star-filled text-base sm:text-lg">★</span>
                    )}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Their Order</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground mt-0.5 sm:mt-1">{current?.dish}</p>
                </div>
                <div className="bg-primary rounded-2xl p-3 sm:p-4 text-center flex-1 md:flex-none">
                  <p className="text-2xl sm:text-3xl font-display font-bold text-white">4.9</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70 mt-0.5 sm:mt-1">Avg Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 slide-up delay-3">
          {testimonials?.map((_, i) =>
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`transition-all duration-300 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center`}
            aria-label={`View testimonial ${i + 1}`}>
            
              <span
              className={`block rounded-full transition-all duration-300 ${
              i === activeIndex ?
              'w-8 h-3 bg-primary' : 'w-3 h-3 bg-border hover:bg-muted-foreground'}`
              } />
            
            </button>
          )}
        </div>
      </div>
    </section>);

}