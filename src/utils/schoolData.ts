export type FacilityCategory = 'all' | 'academic' | 'infrastructure';

export interface SchoolProfile {
  name: string;
  tagline: string;
  principal: string;
  address: string;
  district: string;
  city: string;
  province: string;
  npsn: string;
  foundedDate: string;
  foundedYear: number;
  accreditation: string;
  accreditationSk: string;
  accreditationDate: string;
  status: string;
  ministry: string;
  openDays: string;
  openHours: string;
  email: string;
  websiteLabel: string;
  totalTeachers: number;
  maleStudents: number;
  femaleStudents: number;
  studyGroups: number;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: Exclude<FacilityCategory, 'all'>;
  summary: string;
  detail: string;
  iconKey: 'school' | 'flask' | 'book' | 'zap' | 'wifi' | 'shield';
}

export interface InquiryPayload {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface InquiryValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof InquiryPayload, string>>;
}

export const SCHOOL_PROFILE: SchoolProfile = {
  name: 'SMP Agustinus Semarang',
  tagline: 'Sekolah Swasta Unggul di Kota Semarang',
  principal: 'Aloysius Andreanto',
  address: 'Jalan Tentara Pelajar No 70, Lamper Kidul, Semarang Selatan, Kota Semarang',
  district: 'Lamper Kidul, Semarang Selatan',
  city: 'Kota Semarang',
  province: 'Jawa Tengah',
  npsn: '20328957',
  foundedDate: '10 Februari 1970',
  foundedYear: 1970,
  accreditation: 'B',
  accreditationSk: '165/BAP-SM/XI/2017',
  accreditationDate: '09 November 2017',
  status: 'Swasta',
  ministry: 'Kementerian Pendidikan dan Kebudayaan',
  openDays: 'Senin hingga Sabtu',
  openHours: '07.00 hingga 13.00 WIB',
  email: 'agustinussmp@gmail.com',
  websiteLabel: 'Portal Resmi SMP Agustinus Semarang',
  totalTeachers: 9,
  maleStudents: 49,
  femaleStudents: 39,
  studyGroups: 4,
};

export const ABOUT_PARAGRAPHS: string[] = [
  'SMP Agustinus, yang terletak di Jalan Tentara Pelajar No 70, Lamper Kidul, Semarang Selatan, Kota Semarang, merupakan sekolah swasta dengan waktu penyelenggaraan pagi selama 6 hari dari Senin hingga Sabtu. Didirikan sejak tanggal 10 Februari 1970, sekolah ini telah meraih Akreditasi B berdasarkan SK Nomor 165/BAP-SM/XI/2017 yang diterbitkan pada tanggal 09 November 2017. SMP Agustinus berada di bawah naungan Kementerian Pendidikan dan Kebudayaan dan terdaftar dengan Nomor Pokok Sekolah Nasional, yaitu NPSN 20328957.',
  'SMP Agustinus dikenal sebagai lembaga pendidikan yang memberikan pembelajaran berkualitas dengan fokus utama pada pengembangan karakter dan prestasi siswa. Sekolah ini mengemban visi untuk mencetak generasi muda yang berakhlak mulia, cerdas, dan kompeten serta memiliki dedikasi tinggi dalam melayani bangsa. Untuk mendukung tercapainya visi tersebut, SMP Agustinus menerapkan sistem pembelajaran yang inovatif dan berorientasi pada kebutuhan setiap peserta didik.',
  'Meskipun berdiri di atas lahan yang efisien, SMP Agustinus mampu menghadirkan fasilitas pembelajaran yang memadai dan tertata rapi, mencakup ruang kelas yang nyaman, laboratorium praktikum, serta perpustakaan sekolah. Seluruh area belajar juga didukung sumber listrik PLN yang stabil serta koneksi internet guna menunjang proses belajar mengajar yang modern.',
  'Untuk kebutuhan informasi akademik, pendaftaran peserta didik baru, maupun kerja sama kelembagaan, masyarakat dapat mengakses portal resmi SMP Agustinus Semarang atau menghubungi pihak sekolah secara langsung melalui surat elektronik agustinussmp@gmail.com maupun berkunjung pada jam layanan pagi.'
];

export const VISION_PILLARS = [
  {
    id: 'berakhlak',
    number: '01',
    title: 'Berakhlak Mulia',
    description: 'Membentuk budi pekerti luhur, kedisiplinan harian, dan sikap saling menghormati dalam kehidupan bermasyarakat.'
  },
  {
    id: 'cerdas',
    number: '02',
    title: 'Cerdas dan Inovatif',
    description: 'Menghadirkan metode pembelajaran aktif yang adaptif terhadap perkembangan ilmu pengetahuan serta kebutuhan siswa.'
  },
  {
    id: 'kompeten',
    number: '03',
    title: 'Kompeten dan Berdedikasi',
    description: 'Membekali siswa dengan kecakapan akademik dan semangat pelayanan tinggi bagi lingkungan dan bangsa.'
  }
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'ruang-kelas',
    title: 'Ruang Kelas Nyaman',
    category: 'academic',
    summary: 'Ruang belajar kondusif dengan pencahayaan alami dan sirkulasi udara terjaga.',
    detail: 'Mendukung kegiatan belajar mengajar tatap muka selama 6 hari penuh dengan rasio kelas yang fokus.',
    iconKey: 'school'
  },
  {
    id: 'laboratorium',
    title: 'Laboratorium Sekolah',
    category: 'academic',
    summary: 'Sarana praktikum sains dan eksperimen terbimbing untuk pemahaman konsep nyata.',
    detail: 'Digunakan siswa untuk mengasah keterampilan observasi, analisis ilmiah, dan kerja sama tim.',
    iconKey: 'flask'
  },
  {
    id: 'perpustakaan',
    title: 'Perpustakaan Terpadu',
    category: 'academic',
    summary: 'Koleksi buku pelajaran, referensi pengetahuan umum, dan ruang baca tenang.',
    detail: 'Menumbuhkan budaya literasi serta mendukung pendalaman materi pembelajaran bagi siswa dan guru.',
    iconKey: 'book'
  },
  {
    id: 'listrik-pln',
    title: 'Sumber Listrik PLN',
    category: 'infrastructure',
    summary: 'Pasokan daya listrik PLN yang andal untuk seluruh perangkat ajar dan penerangan kelas.',
    detail: 'Menjamin kelancaran aktivitas laboratorium, perangkat audio visual, dan administrasi sekolah setiap hari.',
    iconKey: 'zap'
  },
  {
    id: 'internet',
    title: 'Koneksi Internet Aktif',
    category: 'infrastructure',
    summary: 'Jaringan internet sekolah untuk akses sumber belajar digital dan sistem pendidikan nasional.',
    detail: 'Memfasilitasi literasi digital siswa serta pelaporan akademik terintegrasi ke Kementerian Pendidikan dan Kebudayaan.',
    iconKey: 'wifi'
  },
  {
    id: 'tata-kelola',
    title: 'Tata Kelola Terakreditasi',
    category: 'infrastructure',
    summary: 'Manajemen mutu pendidikan tersertifikasi Akreditasi B sejak November 2017.',
    detail: 'Berpedoman pada standar nasional pendidikan dengan jadwal operasional pagi yang teratur.',
    iconKey: 'shield'
  }
];

export interface StudentTeacherMetrics {
  totalStudents: number;
  malePercentage: number;
  femalePercentage: number;
  studentToTeacherRatio: string;
  yearsSinceFounded: number;
}

export function calculateSchoolMetrics(
  profile: Pick<SchoolProfile, 'totalTeachers' | 'maleStudents' | 'femaleStudents' | 'foundedYear'>,
  currentYear: number = 2026
): StudentTeacherMetrics {
  const totalStudents = Math.max(0, profile.maleStudents + profile.femaleStudents);
  const malePercentage =
    totalStudents > 0 ? Math.round((profile.maleStudents / totalStudents) * 1000) / 10 : 0;
  const femalePercentage =
    totalStudents > 0 ? Math.round((profile.femaleStudents / totalStudents) * 1000) / 10 : 0;
  const ratioValue =
    profile.totalTeachers > 0
      ? (totalStudents / profile.totalTeachers).toFixed(1).replace('.', ',')
      : '0,0';
  const yearsSinceFounded = Math.max(0, currentYear - profile.foundedYear);

  return {
    totalStudents,
    malePercentage,
    femalePercentage,
    studentToTeacherRatio: `1 : ${ratioValue}`,
    yearsSinceFounded,
  };
}

export function filterFacilities(
  items: FacilityItem[],
  category: FacilityCategory
): FacilityItem[] {
  if (category === 'all') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

export function isSchoolOpenNow(dayIndex: number, hour24: number): boolean {
  // dayIndex: 0 = Minggu, 1 = Senin ... 6 = Sabtu
  const isOperationalDay = dayIndex >= 1 && dayIndex <= 6;
  const isOperationalHour = hour24 >= 7 && hour24 < 13;
  return isOperationalDay && isOperationalHour;
}

export function validateInquiry(payload: InquiryPayload): InquiryValidationResult {
  const errors: Partial<Record<keyof InquiryPayload, string>> = {};

  if (!payload.fullName.trim() || payload.fullName.trim().length < 2) {
    errors.fullName = 'Nama lengkap wajib diisi minimal 2 huruf.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email.trim() || !emailPattern.test(payload.email.trim())) {
    errors.email = 'Alamat email tidak valid. Contoh format yang benar adalah nama@domain.com.';
  }

  if (!payload.subject.trim() || payload.subject.trim().length < 3) {
    errors.subject = 'Subjek pertanyaan wajib diisi minimal 3 huruf.';
  }

  if (!payload.message.trim() || payload.message.trim().length < 10) {
    errors.message = 'Isi pesan wajib ditulis minimal 10 karakter agar pihak sekolah dapat memahami keperluan Anda.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function containsForbiddenSyntax(text: string): boolean {
  if (/[()]/.test(text)) {
    return true;
  }
  // Detect common emoji unicode ranges
  const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
  return emojiRegex.test(text);
}
