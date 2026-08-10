'use client';
import React, { useState, useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const categories = ['Starters', 'Main Course', 'Drinks'] as const;
type Category = typeof categories[number];

const menuData: Record<Category, {
  name: string;
  description: string;
  price: string;
  tag?: string;
  image: string;
  alt: string;
  veg: boolean;
}[]> = {
  Starters: [
  {
    name: 'Tandoori Prawns',
    description: 'Jumbo prawns marinated in saffron, yogurt & coastal spices, grilled in clay oven.',
    price: '₹ 595',
    tag: 'Best Seller',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_140762308-1768556723359.png",
    alt: 'Grilled tandoori prawns with lemon wedge and mint chutney on dark slate plate',
    veg: false
  },
  {
    name: 'Paneer Tikka',
    description: 'Cottage cheese cubes with bell peppers, marinated in spiced yogurt, charred to perfection.',
    price: '₹ 385',
    tag: 'Veg',
    image: "https://images.unsplash.com/photo-1680359870402-5cc2954e50c6",
    alt: 'Golden paneer tikka skewers with colorful bell peppers on wooden board',
    veg: true
  },
  {
    name: 'Chicken Seekh Kebab',
    description: 'Minced chicken with fresh herbs, green chillies, and house spice blend.',
    price: '₹ 425',
    image: "https://images.unsplash.com/photo-1592036219795-8533b3c132af",
    alt: 'Juicy chicken seekh kebabs on skewers with onion rings and green chutney',
    veg: false
  },
  {
    name: 'Dahi Puri',
    description: 'Crispy puris filled with potato, chickpeas, tangy tamarind & chilled yogurt.',
    price: '₹ 265',
    tag: 'New',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10481e6ba-1772259856514.png",
    alt: 'Colorful dahi puri chaat on a banana leaf with tamarind and chutneys',
    veg: true
  }],

  'Main Course': [
  {
    name: 'Rogan Josh Royale',
    description: 'Slow-braised lamb in Kashmiri red chile, whole spices, and saffron-kissed gravy.',
    price: '₹ 895',
    tag: "Chef's Pick",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b6fc7dca-1771887857787.png",
    alt: 'Rich dark rogan josh curry in a copper bowl with garnish of cream and coriander',
    veg: false
  },
  {
    name: 'Dal Makhani',
    description: 'Black lentils slow-cooked overnight with tomato, butter, and cream.',
    price: '₹ 445',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1caa52553-1772827107890.png",
    alt: 'Creamy dal makhani in a terracotta bowl with a swirl of cream on top',
    veg: true
  },
  {
    name: 'Butter Chicken',
    description: 'Tandoor-roasted chicken in velvety tomato-fenugreek sauce. A timeless classic.',
    price: '₹ 695',
    tag: 'Favourite',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1393b4932-1767453388099.png",
    alt: 'Vibrant orange butter chicken curry in a white bowl with coriander garnish',
    veg: false
  },
  {
    name: 'Paneer Lababdar',
    description: 'Silken cottage cheese in cashew-tomato gravy with dried fenugreek.',
    price: '₹ 525',
    image: "https://images.unsplash.com/photo-1582580202176-82541e1dd65a",
    alt: 'Paneer lababdar curry with rich orange gravy in a brass bowl',
    veg: true
  }],

  Drinks: [
  {
    name: 'Mango Lassi',
    description: 'Thick Alphonso mango blended with chilled yogurt, cardamom, and rose water.',
    price: '₹ 195',
    tag: 'Summer Special',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d2160a5f-1772889720125.png",
    alt: 'Tall glass of golden mango lassi garnished with saffron strands and pistachio',
    veg: true
  },
  {
    name: 'Masala Chai',
    description: 'Hand-poured Darjeeling tea brewed with ginger, cardamom, and cloves.',
    price: '₹ 120',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1edae3c66-1765129892610.png",
    alt: 'Steaming clay kulhad cup of masala chai with spices on wooden table',
    veg: true
  },
  {
    name: 'Kokum Cooler',
    description: 'Coastal kokum shrub with black salt, cumin, and fresh mint. Naturally cooling.',
    price: '₹ 165',
    tag: 'House Special',
    image: "https://images.unsplash.com/photo-1642821371326-7ca8b591ede3",
    alt: 'Deep pink kokum cooler in a tall glass with mint leaves and ice',
    veg: true
  },
  {
    name: 'Thandai',
    description: 'Chilled milk blended with almonds, rose petals, fennel, and saffron.',
    price: '₹ 225',
    tag: 'New',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11bb9b666-1766465064458.png",
    alt: 'Creamy white thandai in a silver glass with rose petal garnish and crushed nuts',
    veg: true
  }]

};

export default function MenuSection() {
  const [active, setActive] = useState<Category>('Starters');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    el.querySelectorAll('.slide-up').forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  const items = menuData[active];

  return (
    <section id="menu" ref={sectionRef} className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 space-y-3 md:space-y-4">
          <p className="section-label slide-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Our Menu
          </p>
          <h2 className="font-display text-section-title text-foreground slide-up delay-1">
            Crafted with <span className="italic text-primary">Passion.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto slide-up delay-2">
            Every dish tells the story of a region, a season, and a chef who cares deeply.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 md:mb-10 slide-up delay-3 overflow-x-auto pb-1">
          <div className="flex bg-muted p-1.5 rounded-full gap-1 flex-shrink-0">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 min-h-[40px] sm:min-h-[44px] whitespace-nowrap ${
              active === cat ? 'tab-active' : 'tab-inactive'}`
              }>
              {cat}
            </button>
            )}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="relative min-h-[400px] md:min-h-[480px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {items.map((item, i) =>
            <MenuCard key={`${active}-${item.name}`} item={item} index={i} />
            )}
          </div>
        </div>
      </div>
    </section>);

}

function MenuCard({
  item,
  index
}: {item: {name: string;description: string;price: string;tag?: string;image: string;alt: string;veg: boolean;};index: number;}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.filter = 'blur(0)';
          }, index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="menu-card group"
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        filter: 'blur(4px)',
        transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1), filter 0.6s ease, box-shadow 0.4s ease'
      }}>
      
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <AppImage
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {item.tag && (
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
              {item.tag}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${item.veg ? 'border-green-500' : 'border-red-500'}`}>
            <span className={`w-2.5 h-2.5 rounded-full ${item.veg ? 'bg-green-500' : 'bg-red-500'}`} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-base sm:text-lg text-foreground leading-tight">{item.name}</h3>
          <span className="text-primary font-bold text-sm sm:text-base whitespace-nowrap flex-shrink-0">{item.price}</span>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">{item.description}</p>
        <button className="mt-3 sm:mt-4 w-full btn-primary justify-center text-xs sm:text-sm py-2.5 sm:py-3">
          Add to Order
          <Icon name="PlusIcon" size={14} />
        </button>
      </div>
    </div>
  );
}