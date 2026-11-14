import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ABOUT_PARAGRAPHS,
  FACILITIES,
  SCHOOL_PROFILE,
  VISION_PILLARS,
  calculateSchoolMetrics,
  containsForbiddenSyntax,
  filterFacilities,
  isSchoolOpenNow,
  validateInquiry,
} from './schoolData';

test('calculateSchoolMetrics computes totals, gender percentages, ratio, and age accurately', () => {
  const metrics = calculateSchoolMetrics(SCHOOL_PROFILE, 2026);
  assert.equal(metrics.totalStudents, 88);
  assert.equal(metrics.malePercentage, 55.7);
  assert.equal(metrics.femalePercentage, 44.3);
  assert.equal(metrics.studentToTeacherRatio, '1 : 9,8');
  assert.equal(metrics.yearsSinceFounded, 56);
});

test('calculateSchoolMetrics handles zero teachers and zero students safely', () => {
  const metrics = calculateSchoolMetrics(
    { totalTeachers: 0, maleStudents: 0, femaleStudents: 0, foundedYear: 1970 },
    1970
  );
  assert.equal(metrics.totalStudents, 0);
  assert.equal(metrics.malePercentage, 0);
  assert.equal(metrics.femalePercentage, 0);
  assert.equal(metrics.studentToTeacherRatio, '1 : 0,0');
  assert.equal(metrics.yearsSinceFounded, 0);
});

test('filterFacilities returns all or filtered categories properly', () => {
  assert.equal(filterFacilities(FACILITIES, 'all').length, 6);
  assert.equal(filterFacilities(FACILITIES, 'academic').length, 3);
  assert.equal(filterFacilities(FACILITIES, 'infrastructure').length, 3);
});

test('isSchoolOpenNow respects Senin-Sabtu 07.00-13.00 WIB schedule', () => {
  assert.equal(isSchoolOpenNow(1, 7), true); // Senin 07:00
  assert.equal(isSchoolOpenNow(6, 12), true); // Sabtu 12:00
  assert.equal(isSchoolOpenNow(6, 13), false); // Sabtu 13:00 tutup
  assert.equal(isSchoolOpenNow(0, 9), false); // Minggu tutup
  assert.equal(isSchoolOpenNow(3, 6), false); // Rabu 06:00 belum buka
});

test('validateInquiry catches missing fields and invalid emails and passes valid input', () => {
  const bad = validateInquiry({
    fullName: 'A',
    email: 'bukan-email',
    subject: 'Hi',
    message: 'Pendek',
  });
  assert.equal(bad.valid, false);
  assert.ok(bad.errors.fullName);
  assert.ok(bad.errors.email);
  assert.ok(bad.errors.subject);
  assert.ok(bad.errors.message);

  const good = validateInquiry({
    fullName: 'Budi Santoso',
    email: 'budi@example.com',
    subject: 'Informasi Pendaftaran',
    message: 'Saya ingin menanyakan jadwal pendaftaran siswa baru tahun ajaran ini.',
  });
  assert.equal(good.valid, true);
  assert.deepEqual(good.errors, {});
});

test('all school copy strictly avoids parentheses and emojis', () => {
  const allStrings: string[] = [
    ...Object.values(SCHOOL_PROFILE).map((v) => String(v)),
    ...ABOUT_PARAGRAPHS,
    ...VISION_PILLARS.flatMap((p) => [p.number, p.title, p.description]),
    ...FACILITIES.flatMap((f) => [f.title, f.summary, f.detail]),
  ];

  for (const text of allStrings) {
    assert.equal(
      containsForbiddenSyntax(text),
      false,
      `Found forbidden parenthesis or emoji in: ${text}`
    );
  }
});
