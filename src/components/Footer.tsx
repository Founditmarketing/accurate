import Link from "next/link";
import Image from "next/image";
import { services, locations } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white relative grain-overlay pb-24 lg:pb-0">
      {/* Red top accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image src="/images/logo.png" alt="Accurate Shoring & Foundation" width={180} height={54} className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Setting the Standards in Foundation Repairs. Serving Louisiana for over 30 years.
            </p>
            <a href="tel:3183213000" className="text-primary font-bold text-lg hover:text-primary-light transition-colors">
              (318) 321-3000
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-white/40 mb-5 uppercase">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/70 hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-white/40 mb-5 uppercase">Locations</h4>
            <ul className="space-y-4">
              {locations.map((loc) => (
                <li key={loc.city}>
                  <p className="text-sm font-semibold text-white">{loc.city}</p>
                  <p className="text-xs text-white/50">{loc.address}</p>
                  <a href={`tel:${loc.phoneRaw}`} className="text-xs text-primary hover:text-primary-light transition-colors">
                    {loc.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-white/40 mb-5 uppercase">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
                { label: "Locations", href: "/locations" },
                { label: "Leave a Review", href: "/review" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Accurate Shoring & Foundation. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Serving Louisiana for 30+ Years &bull; Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
