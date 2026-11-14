import { useState } from 'react';
import {
  BookOpen,
  Building,
  FlaskConical,
  School,
  ShieldCheck,
  Wifi,
  Zap,
} from 'lucide-react';
import {
  FACILITIES,
  type FacilityCategory,
  type FacilityItem,
  filterFacilities,
} from '../utils/schoolData';
import { AnimatedText } from './AnimatedText';
import { SectionReveal } from './SectionReveal';

const CATEGORY_TABS: { id: FacilityCategory; label: string }[] = [
  { id: 'all', label: 'Semua Fasilitas' },
  { id: 'academic', label: 'Akademik' },
  { id: 'infrastructure', label: 'Infrastruktur' },
];

const FACILITY_ICONS: Record<FacilityItem['iconKey'], typeof School> = {
  school: School,
  flask: FlaskConical,
  book: BookOpen,
  zap: Zap,
  wifi: Wifi,
  shield: ShieldCheck,
};

const CATEGORY_TEXT: Record<FacilityItem['category'], string> = {
  academic: 'Sarana Akademik',
  infrastructure: 'Infrastruktur Penunjang',
};

export function FacilitiesSection() {
  const [category, setCategory] = useState<FacilityCategory>('all');
  const visibleFacilities = filterFacilities(FACILITIES, category);

  return (
    <section
      id="fasilitas"
      className="bg-slate-50 border-t border-slate-200 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <SectionReveal>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-900 mb-3">
                <Building className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Sarana dan Prasarana Sekolah</span>
              </div>
            </SectionReveal>

            <AnimatedText
              as="h2"
              text="Fasilitas Pembelajaran Modern dan Memadai"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-3"
            />

            <SectionReveal delay={0.08}>
              <p className="text-base font-normal leading-relaxed text-slate-600">
                Meski menempati lahan yang efisien, SMP Agustinus Semarang
                menyediakan fasilitas belajar lengkap mulai dari ruang kelas,
                laboratorium, perpustakaan, listrik PLN, hingga jaringan internet.
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.1}>
            <div
              role="tablist"
              aria-label="Filter kategori fasilitas sekolah"
              className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-white p-1"
            >
              {CATEGORY_TABS.map((tab) => {
                const isActive = category === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setCategory(tab.id)}
                    className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-blue-900 text-white'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </SectionReveal>
        </div>

        <div
          data-testid="facilities-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {visibleFacilities.map((facility, index) => {
            const Icon = FACILITY_ICONS[facility.iconKey];
            return (
              <SectionReveal key={facility.id} delay={index * 0.05}>
                <article className="h-full rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-xs font-medium text-slate-500">
                        {CATEGORY_TEXT[facility.category]}
                      </span>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-blue-900">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                      {facility.title}
                    </h3>

                    <p className="text-sm font-medium text-slate-700 leading-relaxed">
                      {facility.summary}
                    </p>
                  </div>

                  <p className="mt-4 pt-4 border-t border-slate-100 text-sm font-normal text-slate-600 leading-relaxed">
                    {facility.detail}
                  </p>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
