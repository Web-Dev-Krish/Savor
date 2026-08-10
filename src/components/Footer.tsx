import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <a href="/" className="flex items-center gap-2.5">
            <AppLogo size={32} />
            <span className="font-display font-semibold text-lg tracking-tight text-foreground">
              Savor
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { label: 'Menu', href: '#menu' },
              { label: 'Offers', href: '#offers' },
              { label: 'Book Table', href: '#booking' },
              { label: 'Contact', href: '#contact' },
              { label: 'Privacy', href: '#' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + Copyright */}
          <div className="flex items-center gap-4">
            {[
              { icon: 'GlobeAltIcon', label: 'Instagram' },
              { icon: 'ChatBubbleLeftIcon', label: 'Facebook' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Icon name={s.icon as 'GlobeAltIcon'} size={18} />
              </a>
            ))}
            <span className="text-sm text-muted-foreground hidden sm:block">
              © 2026 Savor
            </span>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4 sm:hidden">
          © 2026 Savor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}