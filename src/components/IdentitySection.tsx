import { useState } from 'react';
import {
  Award,
  Building2,
  CalendarDays,
  Check,
  Clock,
  Copy,
  FileBadge,
  Landmark,
  Mail,
  MapPin,
} from 'lucide-react';
import { SCHOOL_PROFILE } from '../utils/schoolData';
import { AnimatedText } from './AnimatedText';
import { SectionReveal } from './SectionReveal';

export function IdentitySection() {
  const [copiedField, setCopiedField] = useState<'address' | 'email' | null>(null);

  const handleCopy = async (value: string, field: 'address' | 'email') => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
      }
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2500);
    } catch {
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2500);
    }
  };

  const identityItems = [
    {
      id: 'npsn',
      label: 'Nomor Pokok Sekolah Nasional',
      value: SCHOOL_PROFILE.npsn,
      detail: 'Kode registrasi resmi satuan pendidikan nasional',
      icon: FileBadge,
      mono: true,
    },
    {
      id: 'akreditasi',
      label: 'Akreditasi Sekolah',
      value: `Peringkat ${SCHOOL_PROFILE.accreditation}`,
      detail: `SK Nomor ${SCHOOL_PROFILE.accreditationSk} · Terbit ${SCHOOL_PROFILE.accreditationDate}`,
      icon: Award,
      mono: false,
    },
    {
      id: 'status',
      label: 'Status Penyelenggaraan',
      value: SCHOOL_PROFILE.status,
      detail: 'Penyelenggaraan pendidikan pagi selama 6 hari penuh',
      icon: Building2,
      mono: false,
    },
    {
      id: 'naungan',
      label: 'Naungan Kelembagaan',
      value: SCHOOL_PROFILE.ministry,
      detail: 'Mengikuti standar kurikulum dan evaluasi pendidikan nasional',
      icon: Landmark,
      mono: false,
    },
    {
      id: 'berdiri',
      label: 'Tanggal Pendirian',
      value: SCHOOL_PROFILE.foundedDate,
      detail: 'Berdedikasi mencerdaskan generasi Kota Semarang sejak tahun 1970',
      icon: CalendarDays,
      mono: false,
    },
    {
      id: 'operasional',
      label: 'Waktu Operasional Sekolah',
      value: SCHOOL_PROFILE.openHours,
      detail: `Buka setiap hari ${SCHOOL_PROFILE.openDays}`,
      icon: Clock,
      mono: false,
    },
  ];

  return (
    <section
      id="identitas"
      className="bg-slate-50 border-y border-slate-200 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <SectionReveal>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-900 mb-3">
              <FileBadge className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Data Pokok dan Legalitas Resmi</span>
            </div>
          </SectionReveal>

          <AnimatedText
            as="h2"
            text="Identitas Kelembagaan SMP Agustinus Semarang"
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-3"
          />

          <SectionReveal delay={0.08}>
            <p className="text-base font-normal leading-relaxed text-slate-600">
              Informasi resmi pendirian, akreditasi, jadwal layanan sekolah, serta
              alamat kontak yang dapat diverifikasi secara langsung.
            </p>
          </SectionReveal>
        </div>

        {/* 6-Card Structured Registry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {identityItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={item.id} delay={idx * 0.05}>
                <article className="h-full rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-blue-900">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-slate-500">
                        {item.label}
                      </h3>
                    </div>

                    <p
                      className={`text-lg font-bold text-slate-900 leading-snug ${
                        item.mono ? 'font-mono tabular-nums tracking-tight' : ''
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>

                  <p className="mt-3 pt-3 border-t border-slate-100 text-sm font-normal text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </article>
              </SectionReveal>
            );
          })}
        </div>

        {/* Address and Email Interactive Action Cards */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <SectionReveal delay={0.18}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-900 mt-0.5">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Alamat Lengkap Sekolah
                  </p>
                  <p className="mt-1 text-base font-bold text-slate-900 leading-snug">
                    {SCHOOL_PROFILE.address}
                  </p>
                  <p className="mt-1 text-xs font-normal text-slate-500">
                    Provinsi {SCHOOL_PROFILE.province}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(SCHOOL_PROFILE.address, 'address')}
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
              >
                {copiedField === 'address' ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-700 shrink-0" aria-hidden="true" />
                    <span className="text-emerald-800">Alamat Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.22}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-800 mt-0.5">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Surat Elektronik Resmi
                  </p>
                  <a
                    href={`mailto:${SCHOOL_PROFILE.email}`}
                    className="mt-1 block font-mono text-base font-bold text-blue-900 hover:underline break-all"
                  >
                    {SCHOOL_PROFILE.email}
                  </a>
                  <p className="mt-1 text-xs font-normal text-slate-500">
                    Layanan korespondensi dan informasi pendaftaran
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(SCHOOL_PROFILE.email, 'email')}
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-700 shrink-0" aria-hidden="true" />
                    <span className="text-emerald-800">Email Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Salin Email</span>
                  </>
                )}
              </button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
