import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const NAV_ITEMS = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#identitas', label: 'Identitas' },
  { href: '#statistik', label: 'Statistik' },
  { href: '#fasilitas', label: 'Fasilitas' },
  { href: '#kontak', label: 'Kontak' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#beranda"
          className="font-display text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900 rounded"
        >
          SMP Agustinus Semarang
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 text-slate-600 hover:text-blue-900 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900 rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#kontak"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-blue-900 px-4 py-2 text-xs font-medium text-white hover:bg-blue-800 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
          >
            Hubungi Sekolah
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex md:hidden items-center justify-center h-11 w-11 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            aria-label="Navigasi seluler"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-slate-200 bg-white px-4 py-4 shadow-sm"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontak"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-blue-900 px-4 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
              >
                Hubungi Sekolah
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
