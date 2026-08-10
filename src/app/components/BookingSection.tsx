'use client';
import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const timeSlots = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
];

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    el.querySelectorAll('.slide-up').forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" ref={sectionRef} className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Form */}
          <div className="slide-up">
            <div className="space-y-3 mb-8 md:mb-10">
              <p className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                Reservations
              </p>
              <h2 className="font-display text-section-title text-foreground">
                Reserve Your <span className="italic text-primary">Table.</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
                We hold your table for 15 minutes. Please arrive on time or call us if you&apos;re running late.
              </p>
            </div>

            {submitted ? (
              <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 text-center space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="CheckIcon" size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">Reservation Confirmed!</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  We&apos;ve sent a confirmation to <strong>{form.email}</strong>. See you on {form.date} at {form.time}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary mx-auto mt-2"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-5 sm:p-7 md:p-8 space-y-4 sm:space-y-5">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Riya Sharma"
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="riya@example.com"
                    className="input-field"
                  />
                </div>

                {/* Date + Time + Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Date</label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Time</label>
                    <select name="time" value={form.time} onChange={handleChange} required className="input-field">
                      <option value="">Select</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Guests</label>
                    <select name="guests" value={form.guests} onChange={handleChange} className="input-field">
                      {['1','2','3','4','5','6','7','8+'].map((n) => (
                        <option key={n} value={n}>{n} {n === '1' ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Occasion */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Occasion (Optional)</label>
                  <select name="occasion" value={form.occasion} onChange={handleChange} className="input-field">
                    <option value="">None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Business Dinner</option>
                    <option>Date Night</option>
                    <option>Family Gathering</option>
                  </select>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Special Requests</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Dietary restrictions, seating preferences, surprise arrangements..."
                    className="input-field resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-sm sm:text-base min-h-[48px] sm:min-h-[52px]">
                  Confirm Reservation
                  <Icon name="CheckIcon" size={18} />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  No payment required. Free cancellation up to 2 hours before.
                </p>
              </form>
            )}
          </div>

          {/* Right: Contact + Map */}
          <div className="space-y-6 sm:space-y-7 slide-up delay-2">
            <div className="space-y-3">
              <p className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                Find Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                Visit <span className="italic text-primary">Savor.</span>
              </h2>
            </div>

            {/* Contact details */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-7 space-y-4 sm:space-y-5">
              {[
                {
                  icon: 'MapPinIcon',
                  label: 'Address',
                  value: '14, Linking Road, Bandra West, Mumbai 400050',
                },
                {
                  icon: 'PhoneIcon',
                  label: 'Phone',
                  value: '+91 22 4567 8900',
                },
                {
                  icon: 'EnvelopeIcon',
                  label: 'Email',
                  value: 'hello@savorrestaurant.in',
                },
                {
                  icon: 'ClockIcon',
                  label: 'Hours',
                  value: 'Mon–Sun · 12:00 PM – 11:00 PM',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon as 'MapPinIcon'} size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-lg" style={{ height: '240px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3!2d72.836!3d19.059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9!2sBandra+West!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'saturate(0.8) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Savor Restaurant Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}