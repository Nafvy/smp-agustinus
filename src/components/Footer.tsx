import { Mail, MapPin, School } from 'lucide-react';
import { SCHOOL_PROFILE } from '../utils/schoolData';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <School className="h-5 w-5 text-blue-900 shrink-0" aria-hidden="true" />
              <span className="font-display text-lg font-bold text-slate-900">
                {SCHOOL_PROFILE.name}
              </span>
            </div>
            <p className="text-sm font-normal text-slate-600 leading-relaxed max-w-sm">
              Lembaga pendidikan menengah pertama swasta di bawah naungan{' '}
              {SCHOOL_PROFILE.ministry}. Berdiri sejak {SCHOOL_PROFILE.foundedDate}{' '}
              dengan Akreditasi {SCHOOL_PROFILE.accreditation}.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Navigasi Halaman
            </p>
            <ul className="space-y-2 text-sm font-normal text-slate-600">
              <li>
                <a href="#tentang" className="hover:text-blue-900 transition-colors">
                  Tentang Sekolah
                </a>
              </li>
              <li>
                <a href="#identitas" className="hover:text-blue-900 transition-colors">
                  Identitas dan NPSN
                </a>
              </li>
              <li>
                <a href="#statistik" className="hover:text-blue-900 transition-colors">
                  Statistik Guru dan Siswa
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-blue-900 transition-colors">
                  Fasilitas Pembelajaran
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-blue-900 transition-colors">
                  Kontak Sekolah
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Alamat dan Kontak
            </p>
            <div className="flex items-start gap-2.5 text-sm font-normal text-slate-600">
              <MapPin className="h-4 w-4 text-blue-900 shrink-0 mt-1" aria-hidden="true" />
              <span>{SCHOOL_PROFILE.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-600">
              <Mail className="h-4 w-4 text-blue-900 shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${SCHOOL_PROFILE.email}`}
                className="font-mono font-medium text-blue-900 hover:underline"
              >
                {SCHOOL_PROFILE.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            SMP Agustinus Semarang · NPSN {SCHOOL_PROFILE.npsn} · Akreditasi{' '}
            {SCHOOL_PROFILE.accreditation}
          </p>
          <p>
            Buka {SCHOOL_PROFILE.openDays} · {SCHOOL_PROFILE.openHours}
          </p>
        </div>
      </div>
    </footer>
  );
}
