/**
 * Mock Leaderboard Service
 * ————————————————————————
 * Weekly ба allTime чансааны өгөгдөл.
 */

const mockLeaderboard = {
  /** Долоо хоногийн чансаа */
  async getWeekly() {
    const res = await fetch('/mock/leaderboard-weekly.json');
    return res.json();
  },

  /** Бүх цагийн чансаа */
  async getAllTime() {
    const res = await fetch('/mock/leaderboard-allTime.json');
    return res.json();
  },

  /** Period-ээр авах */
  async getByPeriod(period) {
    if (period === 'weekly') return this.getWeekly();
    return this.getAllTime();
  },

  /** Хоёуланг нь зэрэг татах */
  async getAll() {
    const [weekly, allTime] = await Promise.all([
      this.getWeekly(),
      this.getAllTime(),
    ]);
    return { weekly, allTime };
  },
};

export default mockLeaderboard;
