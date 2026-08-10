'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Offers', href: '#offers' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-full px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-500 ${
              scrolled
                ? 'glass-warm shadow-lg shadow-black/5'
                : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0">
              <AppLogo
                size={32}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-display font-semibold text-lg sm:text-xl tracking-tight text-foreground">
                Savor
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 bg-muted/60 rounded-full px-2 py-1.5">
              {navLinks?.map((link) => (
                <a
                  key={link?.label}
                  href={link?.href}
                  className="px-3 xl:px-4 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-200"
                >
                  {link?.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <a
                href="#booking"
                className="px-4 xl:px-5 py-2 xl:py-2.5 rounded-full border-2 border-foreground text-foreground text-sm font-semibold hover:bg-foreground hover:text-background transition-all duration-200 whitespace-nowrap"
              >
                Book Table
              </a>
              <a
                href="#menu"
                className="btn-primary text-sm px-4 xl:px-5 py-2 xl:py-2.5 whitespace-nowrap"
              >
                Order Now
              </a>
            </div>

            {/* Tablet: show just CTAs, hide full nav */}
            <div className="hidden md:flex lg:hidden items-center gap-2">
              <a
                href="#booking"
                className="px-4 py-2 rounded-full border-2 border-foreground text-foreground text-sm font-semibold hover:bg-foreground hover:text-background transition-all duration-200 whitespace-nowrap"
              >
                Book Table
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
                aria-label="Open navigation menu"
              >
                <Icon name="Bars3Icon" size={22} />
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
              aria-label="Open navigation menu"
            >
              <Icon name="Bars3Icon" size={24} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile/Tablet Menu Overlay */}
      <div
        className={`mobile-menu-overlay fixed inset-0 z-[100] ${
          mobileOpen ? 'visible-menu' : 'hidden-menu'
        }`}
      >
        <div
          className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
          onClick={handleNavClick}
        />
        <div className="absolute top-0 right-0 bottom-0 w-72 sm:w-80 bg-background shadow-2xl flex flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <AppLogo size={32} />
              <span className="font-display font-semibold text-lg">Savor</span>
            </div>
            <button
              onClick={handleNavClick}
              className="p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
              aria-label="Close navigation menu"
            >
              <Icon name="XMarkIcon" size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 sm:gap-2 flex-1">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                onClick={handleNavClick}
                className="px-4 py-3 sm:py-3.5 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors min-h-[44px] flex items-center"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            <a
              href="#booking"
              onClick={handleNavClick}
              className="btn-outline text-center justify-center min-h-[48px]"
            >
              Book Table
            </a>
            <a
              href="#menu"
              onClick={handleNavClick}
              className="btn-primary text-center justify-center min-h-[48px]"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}