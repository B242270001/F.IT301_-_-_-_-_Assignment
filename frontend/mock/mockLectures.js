/**
 * Mock Lectures Service
 * —————————————————————
 * Лекцийн жагсаалт, хайлт, дэлгэрэнгүй.
 */

const mockLectures = {
  /** Бүх лекц татах */
  async getAll() {
    const res = await fetch('/mock/lectures.json');
    const data = await res.json();
    return data.lectures;
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
};

export default mockLectures;
