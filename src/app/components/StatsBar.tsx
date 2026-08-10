'use client';
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 80, suffix: '+', label: 'Signature Dishes' },
  { end: 8, suffix: ' Yrs', label: 'In Business' },
  { end: 12, suffix: 'k+', label: 'Happy Diners' },
  { end: 4.9, suffix: '★', label: 'Avg Rating', isFloat: true },
];

function useCountUp(end: number, isFloat: boolean, triggered: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const duration = 1800;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(isFloat ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [end, isFloat, triggered]);
  return isFloat ? value.toFixed(1) : value;
}

function StatItem({ stat, triggered }: { stat: typeof stats[0]; triggered: boolean }) {
  const val = useCountUp(stat.end, !!stat.isFloat, triggered);
  return (
    <div className="text-center slide-up">
      <p className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">
        {val}{stat.suffix}
      </p>
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          // Add in-view class to slide-up children
          el.querySelectorAll('.slide-up').forEach((child, i) => {
            setTimeout(() => child.classList.add('in-view'), i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-14 border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}