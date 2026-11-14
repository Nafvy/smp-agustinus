import { BookOpenCheck, Compass, HeartHandshake, Lightbulb } from 'lucide-react';
import { ABOUT_PARAGRAPHS, VISION_PILLARS } from '../utils/schoolData';
import { AnimatedText } from './AnimatedText';
import { SectionReveal } from './SectionReveal';

const PILLAR_ICONS = [HeartHandshake, Lightbulb, Compass];

export function AboutSection() {
  return (
    <section id="tentang" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Editorial Narrative Column */}
          <div className="lg:col-span-7">
            <SectionReveal>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-900 mb-3">
                <BookOpenCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Profil dan Sejarah Sekolah</span>
              </div>
            </SectionReveal>

            <AnimatedText
              as="h2"
              text="SMP Agustinus: Sekolah Swasta Unggul di Kota Semarang"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-6"
            />

            <SectionReveal delay={0.1}>
              <div className="space-y-5 max-w-prose text-base font-normal leading-relaxed text-slate-700">
                {ABOUT_PARAGRAPHS.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? 'first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-blue-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none'
                        : undefined
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Vision & Character Pillars Column */}
          <SectionReveal delay={0.15} className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="pb-5 border-b border-slate-200">
                <p className="text-xs font-medium uppercase tracking-wider text-amber-800 mb-1.5">
                  Visi dan Misi Pendidikan
                </p>
                <AnimatedText
                  as="h3"
                  text="Komitmen Pembentukan Karakter dan Prestasi"
                  className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug"
                />
              </div>

              <div className="divide-y divide-slate-200 mt-2">
                {VISION_PILLARS.map((pillar, index) => {
                  const Icon = PILLAR_ICONS[index] ?? Compass;
                  return (
                    <div key={pillar.id} className="py-5 first:pt-4 last:pb-1">
                      <div className="flex items-start gap-3.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-blue-900 mt-0.5">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-mono text-xs font-medium text-amber-800">
                              {pillar.number}.
                            </span>
                            <h4 className="text-base font-medium text-slate-900">
                              {pillar.title}
                            </h4>
                          </div>
                          <p className="mt-1.5 text-sm font-normal leading-relaxed text-slate-600">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
