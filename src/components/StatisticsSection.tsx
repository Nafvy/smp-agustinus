import { useState } from 'react';
import {
  BarChart3,
  GraduationCap,
  Layers,
  Scale,
  User,
  UserCheck,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { SCHOOL_PROFILE, calculateSchoolMetrics } from '../utils/schoolData';
import { AnimatedText } from './AnimatedText';
import { SectionReveal } from './SectionReveal';

type StatViewMode = 'summary' | 'students' | 'ratio';

const VIEW_TABS: { id: StatViewMode; label: string }[] = [
  { id: 'summary', label: 'Ringkasan Komunitas' },
  { id: 'students', label: 'Rincian Siswa' },
  { id: 'ratio', label: 'Rasio Pembelajaran' },
];

export function StatisticsSection() {
  const [viewMode, setViewMode] = useState<StatViewMode>('summary');
  const metrics = calculateSchoolMetrics(SCHOOL_PROFILE);

  return (
    <section id="statistik" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <SectionReveal>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-900 mb-3">
                <BarChart3 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Data Pendidik dan Peserta Didik</span>
              </div>
            </SectionReveal>

            <AnimatedText
              as="h2"
              text="Statistik Guru dan Siswa SMP Agustinus Semarang"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight"
            />
          </div>

          <SectionReveal delay={0.1} className="shrink-0">
            <div
              role="tablist"
              aria-label="Mode tampilan statistik sekolah"
              className="inline-flex flex-wrap sm:flex-nowrap items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1"
            >
              {VIEW_TABS.map((tab) => {
                const isActive = viewMode === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setViewMode(tab.id)}
                    className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-white text-blue-900 shadow-xs border border-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </SectionReveal>
        </div>

        {/* Core 4-Column Metric Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <SectionReveal delay={0.04}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Total Guru
                </span>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-900">
                  <Users className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
              <p className="font-mono text-3xl font-bold tabular-nums text-slate-900">
                {SCHOOL_PROFILE.totalTeachers} Guru
              </p>
              <p className="mt-2 text-sm font-normal text-slate-600">
                Tenaga pendidik berdedikasi dalam pembimbingan kelas dan karakter.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Siswa Laki-laki
                </span>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-900">
                  <User className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
              <p className="font-mono text-3xl font-bold tabular-nums text-slate-900">
                {SCHOOL_PROFILE.maleStudents} Siswa
              </p>
              <p className="mt-2 text-sm font-normal text-slate-600">
                Setara <span className="font-mono tabular-nums font-medium">{metrics.malePercentage}%</span> dari seluruh peserta didik aktif.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Siswa Perempuan
                </span>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-800">
                  <UserCheck className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
              <p className="font-mono text-3xl font-bold tabular-nums text-slate-900">
                {SCHOOL_PROFILE.femaleStudents} Siswi
              </p>
              <p className="mt-2 text-sm font-normal text-slate-600">
                Setara <span className="font-mono tabular-nums font-medium">{metrics.femalePercentage}%</span> dari seluruh peserta didik aktif.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.16}>
            <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Total Siswa Keseluruhan
                </span>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 text-blue-900">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
              <p className="font-mono text-3xl font-bold tabular-nums text-blue-900">
                {metrics.totalStudents} Siswa
              </p>
              <p className="mt-2 text-sm font-normal text-slate-600">
                Terbagi dalam <span className="font-mono tabular-nums font-medium">{SCHOOL_PROFILE.studyGroups}</span> rombongan belajar aktif.
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* Dynamic Analytical Breakdown Panel */}
        <SectionReveal delay={0.2}>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
            {viewMode === 'summary' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Komposisi Peserta Didik Putra dan Putri
                  </h3>
                  <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600">
                    Sebaran peserta didik laki-laki dan perempuan di SMP Agustinus
                    Semarang berada dalam komposisi yang berimbang dengan suasana
                    belajar yang inklusif dan kondusif.
                  </p>
                </div>

                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <div className="flex items-center justify-between text-sm font-medium text-slate-800 mb-2">
                      <span className="flex items-center gap-2">
                        <User className="h-4 w-4 text-blue-900" aria-hidden="true" />
                        <span>Siswa Laki-laki</span>
                      </span>
                      <span className="font-mono tabular-nums font-bold">
                        {SCHOOL_PROFILE.maleStudents} siswa · {metrics.malePercentage}%
                      </span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        className="h-full rounded-full bg-blue-900"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metrics.malePercentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-sm font-medium text-slate-800 mb-2">
                      <span className="flex items-center gap-2">
                        <UserCheck className="h-4 w-4 text-amber-700" aria-hidden="true" />
                        <span>Siswa Perempuan</span>
                      </span>
                      <span className="font-mono tabular-nums font-bold">
                        {SCHOOL_PROFILE.femaleStudents} siswi · {metrics.femalePercentage}%
                      </span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        className="h-full rounded-full bg-amber-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metrics.femalePercentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {viewMode === 'students' ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs font-medium uppercase tracking-wider text-slate-500">
                      <th className="py-3 pr-4">Kategori Peserta Didik</th>
                      <th className="py-3 px-4 text-right">Jumlah</th>
                      <th className="py-3 px-4 text-right">Persentase</th>
                      <th className="py-3 pl-4">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm font-normal text-slate-700">
                    <tr>
                      <td className="py-3.5 pr-4 font-medium text-slate-900">
                        Siswa Laki-laki
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums font-bold">
                        {SCHOOL_PROFILE.maleStudents}
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                        {metrics.malePercentage}%
                      </td>
                      <td className="py-3.5 pl-4 text-slate-600">
                        Peserta didik putra jenjang kelas VII hingga IX
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 pr-4 font-medium text-slate-900">
                        Siswa Perempuan
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums font-bold">
                        {SCHOOL_PROFILE.femaleStudents}
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                        {metrics.femalePercentage}%
                      </td>
                      <td className="py-3.5 pl-4 text-slate-600">
                        Peserta didik putri jenjang kelas VII hingga IX
                      </td>
                    </tr>
                    <tr className="bg-white/70 font-bold text-slate-900">
                      <td className="py-3.5 pr-4">Total Keseluruhan Siswa</td>
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                        {metrics.totalStudents}
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                        100%
                      </td>
                      <td className="py-3.5 pl-4 font-normal text-slate-600">
                        Terdistribusi dalam {SCHOOL_PROFILE.studyGroups} rombongan belajar
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}

            {viewMode === 'ratio' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 text-blue-900">
                    <Scale className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Rasio Guru dan Siswa
                    </p>
                    <p className="font-mono text-2xl font-bold tabular-nums text-slate-900 mt-1">
                      {metrics.studentToTeacherRatio}
                    </p>
                    <p className="mt-1 text-sm font-normal text-slate-600">
                      Pendampingan personal untuk memaksimalkan perhatian terhadap potensi tiap siswa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 text-blue-900">
                    <Layers className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Rombongan Belajar
                    </p>
                    <p className="font-mono text-2xl font-bold tabular-nums text-slate-900 mt-1">
                      {SCHOOL_PROFILE.studyGroups} Kelas
                    </p>
                    <p className="mt-1 text-sm font-normal text-slate-600">
                      Rata-rata 22 siswa per rombongan belajar sehingga kelas tetap fokus dan tertib.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 text-amber-800">
                    <Users className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Tenaga Pendidik
                    </p>
                    <p className="font-mono text-2xl font-bold tabular-nums text-slate-900 mt-1">
                      {SCHOOL_PROFILE.totalTeachers} Guru Aktif
                    </p>
                    <p className="mt-1 text-sm font-normal text-slate-600">
                      Hadir penuh selama penyelenggaraan pagi 6 hari dari Senin hingga Sabtu.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
