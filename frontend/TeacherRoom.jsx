import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * TASK-04 — Д. Баттөмөр
 * /teacher — Багш · Удирдах өрөө
 *
 * Wireframe #11: Статистик, хичээлийн хүснэгт (CRUD),
 * суралцагчийн хүснэгт, bar chart.
 */
export default function TeacherRoom() {
  const navigate = useNavigate();

  // TODO: auth шалгах — role === "TEACHER" эсэх
  const [isTeacher] = useState(true);
  const [isLoggedIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [studentSearch, setStudentSearch] = useState("");

  /* ── Нэвтрээгүй ── */
  if (!isLoggedIn) {
    return (
      <div data-testid="page-teacher-room">
        <div data-testid="state-login-required">
          <p>Нэвтэрнэ үү</p>
          <button onClick={() => navigate("/login")}>Нэвтрэх</button>
        </div>
      </div>
    );
  }

  /* ── Эрхгүй (Student) ── */
  if (!isTeacher) {
    return (
      <div data-testid="page-teacher-room">
        <div data-testid="state-forbidden">
          <p>Энэ хуудсыг үзэх эрхгүй</p>
          <button onClick={() => navigate("/dashboard")}>Өрөө рүү буцах</button>
        </div>
      </div>
    );
  }

  /* ── Ачаалж байна ── */
  if (loading) {
    return (
      <div data-testid="page-teacher-room">
        <div data-testid="state-loading">Ачаалж байна...</div>
      </div>
    );
  }

  /* ── Алдаа ── */
  if (error) {
    return (
      <div data-testid="page-teacher-room">
        <div data-testid="state-error">
          <p>Алдаа гарлаа</p>
          <button onClick={() => setError(false)}>Дахин оролдох</button>
        </div>
      </div>
    );
  }

  /* ── Үндсэн агуулга ── */
  return (
    <div data-testid="page-teacher-room">
      <h1>Багшийн өрөө</h1>

      {/* + Хичээл нэмэх товч */}
      <button
        data-testid="teacher-add-course"
        onClick={() => navigate("/teacher/courses/new")}
      >
        + Хичээл нэмэх
      </button>

      {/* ── Статистик ── */}
      <div>
        <span data-testid="stat-courses">Хичээл: {courses.length}</span>
        <span data-testid="stat-students">Суралцагч: {students.length}</span>
        <span data-testid="stat-avg-score">Дундаж оноо: —%</span>
        <span data-testid="stat-attempts">Оролдлого: 0</span>
      </div>

      {/* TODO: хичээл тус бүрийн XP bar chart */}

      {/* ── Хичээлийн хүснэгт ── */}
      {courses.length === 0 ? (
        <div data-testid="state-empty">
          <p>Хичээл алга. Эхний хичээлээ нэмнэ үү</p>
          <button onClick={() => navigate("/teacher/courses/new")}>+ Хичээл нэмэх</button>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Нэр</th>
              <th>Ангилал</th>
              <th>Нэгж</th>
              <th>Лекц</th>
              <th>Үйлдэл</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} data-testid="course-row" data-course-id={course.id}>
                <td>{course.name}</td>
                <td>{course.category}</td>
                <td>{/* TODO */}</td>
                <td>{/* TODO */}</td>
                <td>
                  <button data-testid="course-edit-btn">Засах</button>
                  <button data-testid="course-delete-btn">Устгах</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ── Суралцагчийн хүснэгт ── */}
      <div>
        <input
          data-testid="student-search"
          placeholder="Нэрээр хайх"
          value={studentSearch}
          onChange={(e) => setStudentSearch(e.target.value)}
        />
        {students.length === 0 ? (
          <p>Суралцагч бүртгэгдээгүй</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Нэр</th>
                <th>XP</th>
                <th>Streak</th>
                <th>Сүүлд идэвхтэй</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: students map */}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Устгах баталгаажуулах modal (TODO) ── */}
      {/* confirm-dialog, confirm-delete, confirm-cancel */}

      {/* ── Засах modal (TODO) ── */}
      {/* course-edit-form, course-save, course-cancel */}
    </div>
  );
}
