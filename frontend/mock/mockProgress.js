/**
 * Mock Progress Service
 * —————————————————————
 * Unit progress ба topic progress.
 */

const UNIT_PROGRESS_KEY = 'studyquest.unitProgress';
const TOPIC_PROGRESS_KEY = 'studyquest.topicProgress';

const mockProgress = {
  /** Unit progress seed */
  async _seedUnits() {
    const existing = localStorage.getItem(UNIT_PROGRESS_KEY);
    if (existing) return JSON.parse(existing);

    const res = await fetch('/mock/user-progress.json');
    const data = await res.json();
    localStorage.setItem(UNIT_PROGRESS_KEY, JSON.stringify(data.progress));
    return data.progress;
  },

  /** Topic progress seed */
  async _seedTopics() {
    const existing = localStorage.getItem(TOPIC_PROGRESS_KEY);
    if (existing) return JSON.parse(existing);

    const res = await fetch('/mock/topic-progress.json');
    const data = await res.json();
    localStorage.setItem(TOPIC_PROGRESS_KEY, JSON.stringify(data.topicProgress));
    return data.topicProgress;
  },

  /** Хэрэглэгчийн unit progress авах (courseId-ээр шүүнэ) */
  async getUnitProgress(userId, courseId) {
    const progress = await this._seedUnits();
    const unitsRes = await fetch('/mock/units.json');
    const unitsData = await unitsRes.json();
    const courseUnitIds = unitsData.units
      .filter((u) => u.courseId === courseId)
      .map((u) => u.id);

    return progress.filter(
      (p) => p.userId === userId && courseUnitIds.includes(p.unitId)
    );
  },

  /** Learning path (units + status) */
  async getLearningPath(userId, courseId) {
    const unitsRes = await fetch('/mock/units.json');
    const unitsData = await unitsRes.json();
    const courseUnits = unitsData.units
      .filter((u) => u.courseId === courseId)
      .sort((a, b) => a.order - b.order);

    const progress = await this._seedUnits();
    const userProgress = progress.filter((p) => p.userId === userId);

    return courseUnits.map((unit) => {
      const p = userProgress.find((up) => up.unitId === unit.id);
      return {
        ...unit,
        status: p ? p.status : 'LOCKED',
        score: p ? p.score : 0,
      };
    });
  },

  async completeUnit(userId, unitId, score) {
    const progress = await this._seedUnits();
    const unitsRes = await fetch('/mock/units.json');
    const units = (await unitsRes.json()).units;
    const unit = units.find((item) => item.id === unitId);
    if (!unit) return;

    const courseUnits = units.filter((item) => item.courseId === unit.courseId).sort((a, b) => a.order - b.order);
    const existing = progress.find((item) => item.userId === userId && item.unitId === unitId);
    if (existing) Object.assign(existing, { status: 'COMPLETED', score });
    else progress.push({ userId, unitId, status: 'COMPLETED', score });

    const nextUnit = courseUnits.find((item) => item.order > unit.order);
    if (nextUnit) {
      const nextProgress = progress.find((item) => item.userId === userId && item.unitId === nextUnit.id);
      if (nextProgress?.status === 'LOCKED') nextProgress.status = 'CURRENT';
      else if (!nextProgress) progress.push({ userId, unitId: nextUnit.id, status: 'CURRENT', score: 0 });
    }
    localStorage.setItem(UNIT_PROGRESS_KEY, JSON.stringify(progress));
  },

  /** Topic progress авах */
  async getTopicProgress(userId) {
    const progress = await this._seedTopics();
    return progress.filter((p) => p.userId === userId);
  },

  reset() {
    localStorage.removeItem(UNIT_PROGRESS_KEY);
    localStorage.removeItem(TOPIC_PROGRESS_KEY);
  },
};

export default mockProgress;
