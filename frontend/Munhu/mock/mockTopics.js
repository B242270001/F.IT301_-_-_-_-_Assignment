/**
 * Mock Topics Service
 * ———————————————————
 * Хичээлийн сэдвүүд (order-оор эрэмбэлсэн).
 */

const mockTopics = {
  /** Бүх сэдэв татах */
  async getAll() {
    const res = await fetch('/mock/topics.json');
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return data.topics;
  },

  /** Course-оор шүүх */
  async getByCourse(courseId) {
    const topics = await this.getAll();
    return topics
      .filter((t) => t.courseId === courseId)
      .sort((a, b) => a.order - b.order);
  },
};

export default mockTopics;
