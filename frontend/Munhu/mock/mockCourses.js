/**
 * Mock Courses Service
 * ————————————————————
 * Хичээлийн CRUD + жагсаалт.
 */

const STORAGE_KEY = 'studyquest.courses';

const mockCourses = {
  /** Анхны seed-ийг серверээс татах, localStorage-д хадгалах */
  async _seed() {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) return JSON.parse(existing);

    const res = await fetch('/mock/courses.json');
    const data = await res.json();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.courses));
    return data.courses;
  },

  _save(courses) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  },

  /** Бүх хичээл авах */
  async getAll() {
    return this._seed();
  },

  /** ID-гаар нэг хичээл авах */
  async getById(id) {
    const courses = await this._seed();
    return courses.find((c) => c.id === id) || null;
  },

  /** Дадлага хичээлүүд (оюутанд зориулсан) */
  async getPracticeCourses() {
    const courses = await this._seed();
    return courses.map((c) => ({
      id: c.id,
      title: c.title,
      description: c.description,
      totalUnits: c.totalUnits,
    }));
  },

  /** Шинэ хичээл нэмэх (CRUD - Create) */
  async create(courseData) {
    const courses = await this._seed();
    const newCourse = {
      id: `C${String(courses.length + 1).padStart(2, '0')}`,
      ...courseData,
      createdAt: new Date().toISOString(),
    };
    courses.push(newCourse);
    this._save(courses);
    return newCourse;
  },

  /** Хичээл засах (CRUD - Update) */
  async update(id, courseData) {
    const courses = await this._seed();
    const idx = courses.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    courses[idx] = { ...courses[idx], ...courseData };
    this._save(courses);
    return courses[idx];
  },

  /** Хичээл устгах (CRUD - Delete) */
  async remove(id) {
    const courses = await this._seed();
    const filtered = courses.filter((c) => c.id !== id);
    if (filtered.length === courses.length) return false;
    this._save(filtered);
    return true;
  },

  /** localStorage дахь хадгалсан өгөгдлийг цэвэрлэх (seed дахин ачаална) */
  reset() {
    localStorage.removeItem(STORAGE_KEY);
  },
};

export default mockCourses;
