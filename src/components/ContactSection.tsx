import { useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import {
  SCHOOL_PROFILE,
  type InquiryPayload,
  validateInquiry,
} from '../utils/schoolData';
import { AnimatedText } from './AnimatedText';
import { SectionReveal } from './SectionReveal';

interface SubmittedRecord extends InquiryPayload {
  id: string;
  submittedAt: string;
}

const INITIAL_FORM: InquiryPayload = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactSection() {
  const [form, setForm] = useState<InquiryPayload>(INITIAL_FORM);
  const [errors, setErrors] = useState<
    Partial<Record<keyof InquiryPayload, string>>
  >({});
  const [submittedRecords, setSubmittedRecords] = useState<SubmittedRecord[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateInquiry(form);

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const newRecord: SubmittedRecord = {
      ...form,
      id: `pesan-${Date.now()}`,
      submittedAt: 'Baru saja dikirim',
    };

    setSubmittedRecords((prev) => [newRecord, ...prev]);
    setForm(INITIAL_FORM);
  };

  const latestSubmission = submittedRecords[0];

  return (
    <section
      id="kontak"
      className="bg-white border-t border-slate-200 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <SectionReveal>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-900 mb-3">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Lokasi dan Layanan Informasi</span>
            </div>
          </SectionReveal>

          <AnimatedText
            as="h2"
            text="Hubungi dan Kunjungi SMP Agustinus Semarang"
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-3"
          />

          <SectionReveal delay={0.08}>
            <p className="text-base font-normal leading-relaxed text-slate-600">
              Orang tua, calon peserta didik, maupun mitra pendidikan dapat
              menghubungi pihak sekolah melalui email resmi atau berkunjung pada
              jam operasional pagi.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location & Visiting Hours Card */}
          <SectionReveal delay={0.1} className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Informasi Kunjungan Langsung
                  </h3>
                  <p className="mt-1.5 text-sm font-normal text-slate-600 leading-relaxed">
                    Kantor tata usaha dan layanan informasi sekolah melayani tamu
                    pada jam penyelenggaraan pagi.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-200">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="h-5 w-5 text-blue-900 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Alamat Sekolah
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-900 leading-relaxed">
                        {SCHOOL_PROFILE.address}
                      </p>
                      <p className="mt-0.5 text-xs font-normal text-slate-600">
                        {SCHOOL_PROFILE.district} · {SCHOOL_PROFILE.province}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      className="h-5 w-5 text-blue-900 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Jam Operasional
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-900">
                        {SCHOOL_PROFILE.openHours}
                      </p>
                      <p className="mt-0.5 text-xs font-normal text-slate-600">
                        Hari {SCHOOL_PROFILE.openDays}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail
                      className="h-5 w-5 text-amber-800 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Email Resmi Sekolah
                      </p>
                      <a
                        href={`mailto:${SCHOOL_PROFILE.email}`}
                        className="mt-1 block font-mono text-sm font-bold text-blue-900 hover:underline break-all"
                      >
                        {SCHOOL_PROFILE.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200">
                <a
                  href="https://maps.google.com/?q=Jalan+Tentara+Pelajar+No+70+Lamper+Kidul+Semarang+Selatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <span>Buka Lokasi di Peta Digital</span>
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Interactive Contact Form */}
          <SectionReveal delay={0.16} className="lg:col-span-7 flex">
            <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-1.5">
                Kirim Pesan atau Pertanyaan
              </h3>
              <p className="text-sm font-normal text-slate-600 mb-6">
                Sampaikan pertanyaan terkait informasi sekolah, jadwal kunjungan,
                maupun pendaftaran peserta didik baru.
              </p>

              {latestSubmission ? (
                <div
                  role="status"
                  className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 flex items-start gap-3"
                >
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="text-sm">
                    <p className="font-bold text-emerald-900">
                      Pesan berhasil dicatat untuk {latestSubmission.fullName}
                    </p>
                    <p className="mt-1 font-normal text-emerald-800">
                      Subjek: {latestSubmission.subject} · Balasan resmi akan
                      dikirimkan ke {latestSubmission.email} atau melalui{' '}
                      {SCHOOL_PROFILE.email}.
                    </p>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-fullname"
                      className="block text-xs font-medium uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="contact-fullname"
                      type="text"
                      value={form.fullName}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, fullName: e.target.value }))
                      }
                      placeholder="Contoh: Budi Santoso"
                      className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/15"
                    />
                    {errors.fullName ? (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.fullName}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Alamat Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="Contoh: nama@email.com"
                      className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/15"
                    />
                    {errors.email ? (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Subjek Pesan
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, subject: e.target.value }))
                    }
                    placeholder="Contoh: Informasi Pendaftaran Peserta Didik Baru"
                    className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/15"
                  />
                  {errors.subject ? (
                    <p className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.subject}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Isi Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Tuliskan pertanyaan atau keperluan Anda secara jelas"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/15"
                  />
                  {errors.message ? (
                    <p className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs font-normal text-slate-500">
                    Ditujukan ke tata usaha resmi SMP Agustinus Semarang.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors whitespace-nowrap shrink-0"
                  >
                    <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Kirim Pesan</span>
                  </button>
                </div>
              </form>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
