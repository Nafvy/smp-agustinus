import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  Clock,
  FileBadge,
  GraduationCap,
  Landmark,
  MapPin,
  UserCheck,
  Users,
} from 'lucide-react';
import { SCHOOL_PROFILE, calculateSchoolMetrics } from '../utils/schoolData';
import { AnimatedText } from './AnimatedText';
import { SectionReveal } from './SectionReveal';

export function HeroSection() {
  const metrics = calculateSchoolMetrics(SCHOOL_PROFILE);

  return (
    <section
      id="beranda"
      className="relative bg-white border-b border-slate-200 overflow-hidden"
    >
      {/* Subtle architectural hairline grid background on pure white */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:48px_48px] opacity-70"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Primary Editorial Hero Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionReveal immediate yOffset={12}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-wide uppercase text-blue-900 mb-4">
                <span className="inline-flex items-center gap-2 whitespace-nowrap">
                  <Landmark className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Sekolah Swasta Unggul</span>
                </span>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
                  ·
                </span>
                <span className="text-slate-600 whitespace-nowrap">{SCHOOL_PROFILE.city}</span>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
                  ·
                </span>
                <span className="text-amber-700 whitespace-nowrap">Sejak 10 Februari 1970</span>
              </div>
            </SectionReveal>

            <AnimatedText
              as="h1"
              immediate
              text="Membentuk Generasi Muda Berakhlak Mulia, Cerdas, dan Kompeten"
              className="font-display text-3xl sm:text-4xl lg:text-[3.125rem] font-bold tracking-tight leading-[1.15] text-slate-900 mb-6"
            />

            <SectionReveal immediate delay={0.18} yOffset={14}>
              <p className="max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-slate-600 mb-8">
                SMP Agustinus Semarang menyelenggarakan pendidikan menengah pertama
                yang berkualitas dengan fokus pada pengembangan karakter dan
                prestasi siswa. Berlokasi di Jalan Tentara Pelajar No 70, Lamper
                Kidul, Semarang Selatan, di bawah naungan Kementerian Pendidikan dan
                Kebudayaan.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#tentang"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-6 py-3 text-sm font-medium text-white hover:bg-blue-800 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                >
                  <span>Pelajari Profil Sekolah</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href="#identitas"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                >
                  <span>Lihat Identitas Resmi</span>
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Institutional Crest & Key Facts Card */}
          <SectionReveal
            immediate
            delay={0.12}
            className="lg:col-span-5 flex"
          >
            <div className="w-full rounded-2xl border border-slate-200 bg-slate-50/90 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2">
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        aria-hidden="true"
                      >
                        <path
                          d="M24 4L40 10V23C40 33.2 33.1 41.3 24 44C14.9 41.3 8 33.2 8 23V10L24 4Z"
                          stroke="#1E3A8A"
                          strokeWidth="2.2"
                          fill="#FFFFFF"
                        />
                        <path
                          d="M16 28V18L24 14L32 18V28"
                          stroke="#1E3A8A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24 14V34M16 28H32"
                          stroke="#B45309"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle cx="24" cy="10.5" r="1.5" fill="#B45309" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-lg font-bold text-slate-900 leading-snug">
                        SMP Agustinus
                      </p>
                      <p className="text-xs font-normal text-slate-500 mt-0.5">
                        Kota Semarang · Jawa Tengah
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-500">
                      NPSN
                    </span>
                    <span className="font-mono text-sm font-bold tabular-nums text-blue-900">
                      {SCHOOL_PROFILE.npsn}
                    </span>
                  </div>
                </div>

                <dl className="divide-y divide-slate-200 mt-2">
                  <div className="py-3.5 flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-2.5 text-sm font-normal text-slate-600 shrink-0">
                      <UserCheck className="h-4 w-4 text-blue-900 shrink-0" aria-hidden="true" />
                      <span>Kepala Sekolah</span>
                    </dt>
                    <dd className="text-sm font-medium text-slate-900 text-right">
                      {SCHOOL_PROFILE.principal}
                    </dd>
                  </div>

                  <div className="py-3.5 flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-2.5 text-sm font-normal text-slate-600 shrink-0">
                      <Award className="h-4 w-4 text-amber-700 shrink-0" aria-hidden="true" />
                      <span>Akreditasi</span>
                    </dt>
                    <dd className="text-sm font-medium text-slate-900 text-right">
                      Peringkat {SCHOOL_PROFILE.accreditation}
                    </dd>
                  </div>

                  <div className="py-3.5 flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-2.5 text-sm font-normal text-slate-600 shrink-0">
                      <Building2 className="h-4 w-4 text-blue-900 shrink-0" aria-hidden="true" />
                      <span>Status</span>
                    </dt>
                    <dd className="text-sm font-medium text-slate-900 text-right">
                      {SCHOOL_PROFILE.status}
                    </dd>
                  </div>

                  <div className="py-3.5 flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-2.5 text-sm font-normal text-slate-600 shrink-0">
                      <CalendarDays className="h-4 w-4 text-blue-900 shrink-0" aria-hidden="true" />
                      <span>Berdiri</span>
                    </dt>
                    <dd className="text-sm font-medium text-slate-900 text-right">
                      {SCHOOL_PROFILE.foundedDate}
                    </dd>
                  </div>

                  <div className="py-3.5 flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-2.5 text-sm font-normal text-slate-600 shrink-0">
                      <Clock className="h-4 w-4 text-blue-900 shrink-0" aria-hidden="true" />
                      <span>Jam Buka</span>
                    </dt>
                    <dd className="text-right">
                      <span className="block text-sm font-medium text-slate-900">
                        07.00 - 13.00 WIB
                      </span>
                      <span className="block text-xs font-normal text-slate-500 mt-0.5">
                        Senin hingga Sabtu
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs font-normal leading-relaxed text-slate-600">
                <MapPin className="h-4 w-4 text-blue-900 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{SCHOOL_PROFILE.address}</span>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Full-Width 4-Column Institutional Summary Strip */}
        <SectionReveal delay={0.22} yOffset={16}>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 rounded-xl border border-slate-200 bg-white">
            <div className="p-5 sm:p-6 flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-900">
                <Users className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Total Guru</p>
                <p className="font-mono text-2xl font-bold tabular-nums text-slate-900 mt-0.5">
                  {SCHOOL_PROFILE.totalTeachers}
                </p>
                <p className="text-xs font-normal text-slate-600 mt-0.5">Tenaga Pendidik Aktif</p>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-900">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Total Siswa</p>
                <p className="font-mono text-2xl font-bold tabular-nums text-slate-900 mt-0.5">
                  {metrics.totalStudents}
                </p>
                <p className="text-xs font-normal text-slate-600 mt-0.5">
                  {SCHOOL_PROFILE.maleStudents} Putra · {SCHOOL_PROFILE.femaleStudents} Putri
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-800">
                <FileBadge className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Nomor Pokok Sekolah</p>
                <p className="font-mono text-2xl font-bold tabular-nums text-slate-900 mt-0.5">
                  {SCHOOL_PROFILE.npsn}
                </p>
                <p className="text-xs font-normal text-slate-600 mt-0.5">Terdaftar Resmi Kemendikbud</p>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-800">
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Usia Pengabdian</p>
                <p className="font-mono text-2xl font-bold tracking-tight tabular-nums text-slate-900 mt-0.5">
                  {metrics.yearsSinceFounded} Tahun
                </p>
                <p className="text-xs font-normal text-slate-600 mt-0.5">Berdiri {SCHOOL_PROFILE.foundedDate}</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
