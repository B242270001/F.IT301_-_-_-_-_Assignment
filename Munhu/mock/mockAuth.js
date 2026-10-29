/**
 * Mock Auth Service
 * —————————————————
 * Login, logout, current user, role check.
 *
 * Нууц үг:
 *   Оюутнууд: student123
 *   Багш:     teacher123
 */

const STORAGE_KEY = 'studyquest.currentUser';

const mockAuth = {
  /** Хэрэглэгчийн жагсаалтыг татах */
  async fetchUsers() {
    const res = await fetch('/mock/users.json');
    const data = await res.json();
    return data.users;
  },

  /**
   * Нэвтрэх (username + password → user | null)
   * @param {string} username
   * @param {string} password
   * @returns {Promise<object|null>} user объект эсвэл null
   */
  async login(username, password) {
    const users = await this.fetchUsers();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!user) return null;

    // Нууц үгийг хадгалахгүй
    const { password: _pw, ...safeUser } = user;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser));
    return safeUser;
  },

  /** Гарах */
  logout() {
    sessionStorage.removeItem(STORAGE_KEY);
  },

  /** Одоо нэвтэрсэн хэрэглэгчийг авах */
  getCurrentUser() {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  },

  /** Нэвтэрсэн эсэх */
  isLoggedIn() {
    return !!this.getCurrentUser();
  },

  /** Багш эсэх */
  isTeacher() {
    const user = this.getCurrentUser();
    return user?.role === 'TEACHER';
  },

  /** Оюутан эсэх */
  isStudent() {
    const user = this.getCurrentUser();
    return user?.role === 'STUDENT';
  },
};

export default mockAuth;
