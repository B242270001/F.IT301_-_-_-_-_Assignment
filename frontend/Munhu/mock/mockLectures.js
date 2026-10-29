/**
 * Mock Lectures Service
 * —————————————————————
 * Лекцийн жагсаалт, хайлт, дэлгэрэнгүй, засах, устгах.
 */

const STORAGE_KEY = 'studyquest.lectures';

const mockLectures = {
  /** Анхны seed-ийг серверээс татах, localStorage-д хадгалах */
  async _seed() {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) return JSON.parse(existing);

    const res = await fetch('/mock/lectures.json');
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.lectures));
    return data.lectures;
  },

  _save(lectures) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lectures));
  },

  /** Бүх лекц татах */
  async getAll() {
    return this._seed();
  },

  /** ID-гаар нэг лекц авах */
  async getById(id) {
    const lectures = await this.getAll();
    return lectures.find((l) => l.id === id) || null;
  },

  /** Topic-оор шүүх */
  async getByTopic(topicId) {
    const lectures = await this.getAll();
    return lectures.filter((l) => l.topicId === topicId);
  },

  /** Course-оор шүүх */
  async getByCourse(courseId) {
    const lectures = await this.getAll();
    return lectures.filter((l) => l.courseId === courseId);
  },

  /** Хайлт + ангилал шүүлтүүр */
  async search(query = '', category = '') {
    const lectures = await this.getAll();
    const coursesRes = await fetch('/mock/courses.json');
    const coursesData = await coursesRes.json();

    return lectures.filter((l) => {
      const matchQuery = !query ||
        l.title.toLowerCase().includes(query.toLowerCase()) ||
        l.summary.toLowerCase().includes(query.toLowerCase());

      if (!category) return matchQuery;

      const course = coursesData.courses.find((c) => c.id === l.courseId);
      const matchCategory = course && course.category === category;
      return matchQuery && matchCategory;
    });
  },

  /** Лекц засах (PUT /api/lectures/:id) */
  async update(id, lectureData) {
    const lectures = await this._seed();
    const idx = lectures.findIndex((l) => l.id === id);
    if (idx === -1) return null;
    lectures[idx] = { ...lectures[idx], ...lectureData };
    this._save(lectures);
    return lectures[idx];
  },

  /** Лекц устгах (DELETE /api/lectures/:id) */
  async remove(id) {
    const lectures = await this._seed();
    const filtered = lectures.filter((l) => l.id !== id);
    if (filtered.length === lectures.length) return false;
    this._save(filtered);
    return true;
  },

  /** localStorage дахь хадгалсан өгөгдлийг цэвэрлэх (seed дахин ачаална) */
  reset() {
    localStorage.removeItem(STORAGE_KEY);
  },
};

export default mockLectures;
