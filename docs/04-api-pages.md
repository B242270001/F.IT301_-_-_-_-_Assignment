# 🌐 SPA Хуудас (Routes) болон REST API Endpoints Жагсаалт

Энэхүү баримт бичиг нь **StudyQuest** платформын Frontend Route болон Backend REST API Endpoint-уудыг багийн гишүүдийн Task ID, хариуцах модуль, болон хэрэглэгчийн эрхтэй (Role: `STUDENT`, `TEACHER`) холбон тодорхойлсон гэрээ (Contract) юм.

---

## 📱 1. Frontend SPA Routes Жагсаалт (Нийт 13 Route)

| № | Route / Path | Хуудасны нэр (Component) | Role | Task ID | Хариуцагч | Тайлбар / Үйлдэл |
|---|---|---|---|---|---|---|
| 1 | `/login` | `LoginScreen` | Public | `TASK-01` | **А. Төгөлдөр** | Системд нэвтрэх, унтаж буй оюутныг сэрээх дэлгэц |
| 2 | `/dashboard` | `VirtualRoomDashboard` | Student/Teacher | `TASK-01` | **А. Төгөлдөр** | Виртуаль өрөөний хянах самбар, навигацийн биетүүд |
| 3 | `/practice` | `PracticeCourses` | Student | `TASK-02` | **Мөнхбаяр** | Дадлага хичээлүүдийн хавтас сонгох |
| 4 | `/quiz/:unitId` | `QuizQuestion` | Student | `TASK-02` | **Мөнхбаяр** | Асуулт хариулт, кодын гаралт таах дэлгэц |
| 5 | `/admin/questions` | `AdminQuestions` | **Teacher** | `TASK-02` | **Мөнхбаяр** | **[CRUD 1]** Асуултын банк үүсгэх, засах, устгах |
| 6 | `/practice/:courseId` | `HorizontalLearningPath` | Student | `TASK-03` | **Тэмүүлэн (Temka)** | Хэвтээ чиглэлтэй Duolingo стилийн сургалтын зам |
| 7 | `/topics` | `UnitTopics` | Student | `TASK-03` | **Тэмүүлэн (Temka)** | Нэгж доторх судлах сэдвүүдийн жагсаалт |
| 8 | `/quiz/result` | `QuizResult` | Student | `TASK-04` | **Д. Баттөмөр** | Тестийн үр дүн, цуглуулсан XP болон статистик |
| 9 | `/admin/courses` | `AdminCourses` | **Teacher** | `TASK-04` | **Д. Баттөмөр** | **[CRUD 2]** Дадлага хичээл шинээр үүсгэх, засах, устгах |
| 10 | `/explore` | `ExploreCourses` | Student | `TASK-05` | **Хүслэн О.** | Лекцийн сан (Хайлт & Шүүлтүүртэй) |
| 11 | `/explore/lecture/:id` | `ExploreLectureDetail` | Student | `TASK-05` | **Хүслэн О.** | Интерактив лекц, Демо (Render хийх) & Knowledge Check |
| 12 | `/leaderboard` | `Leaderboard` | Student/Teacher | `TASK-06` | **Цогжавхлан Б.** | Долоо хоногийн болон нийт XP-ийн чансаа (Podium) |
| 13 | `/ui-states` | `GlobalUIStates` | Internal/QA | `TASK-06` | **Цогжавхлан Б.** | Сүлжээний алдаа, Хоосон төлөв, Глобал Модалууд |

---

## 🛠️ 2. Backend REST API Endpoints Жагсаалт (Нийт 13 Endpoints)

### 🔐 Auth & Profile (TASK-01)
* **`POST /api/auth/login`**
  * **Role:** Public
  * **Description:** Оюутны код болон нууц үгээр нэвтэрч JWT Token авах.
  * **Request:** `{ "studentId": "B200900123", "password": "password123" }`
  * **Response (200 OK):** `{ "token": "jwt_token...", "user": { "id": "1", "displayName": "Бат-Эрдэнэ", "role": "STUDENT" } }`

* **`GET /api/user/profile`**
  * **Role:** Student / Teacher
  * **Description:** Нэвтэрсэн хэрэглэгчийн профиль, нийт XP, Streak хоногийн мэдээлэл авах.
  * **Response (200 OK):** `{ "id": "1", "displayName": "Бат-Эрдэнэ", "totalXp": 350, "streakDays": 5 }`

---

### 📝 Practice & Quiz Management (TASK-02 & TASK-04)
* **`GET /api/courses/practice`**
  * **Role:** Student
  * **Description:** Оюутны дадлага хийж болох хичээлүүдийн жагсаалт ба прогресс авах.
  * **Response (200 OK):** `[ { "id": "c1", "title": "Веб систем ба технологи", "progress": 45 } ]`

* **`GET /api/quiz/:unitId`**
  * **Role:** Student
  * **Description:** Тухайн нэгжийн (Unit) асуултуудыг татаж авах.
  * **Response (200 OK):** `[ { "id": "q1", "questionText": "React-д state хэрхэн зарлах вэ?", "options": [...] } ]`

* **`POST /api/quiz/submit`**
  * **Role:** Student
  * **Description:** Асуултын хариултуудыг шалгуулан, авсан XP-ийг бодож хэрэглэгчийн оноонд нэмэх.
  * **Request:** `{ "unitId": "u1", "answers": [ { "questionId": "q1", "answer": "useState" } ] }`
  * **Response (200 OK):** `{ "scorePercent": 100, "xpEarned": 40, "totalXp": 390 }`

---

### ✏️ Teacher Admin CRUD 1: Questions (TASK-02)
* **`POST /api/admin/questions`**
  * **Role:** **Teacher**
  * **Description:** **[CRUD 1 - Create]** Шинэ дадлага асуулт банк руу нэмэх.
  * **Request:** `{ "unitId": "u1", "questionText": "...", "correctAnswer": "...", "options": [...] }`
  * **Response (201 Created):** `{ "id": "q99", "message": "Асуулт амжилттай үүслээ" }`

* **`PUT /api/admin/questions/:id`**
  * **Role:** **Teacher**
  * **Description:** **[CRUD 1 - Update]** Одоо байгаа асуултын агуулгыг засаж шинэчлэх.
  * **Request:** `{ "questionText": "Шинэчлэгдсэн асуулт", "correctAnswer": "..." }`
  * **Response (200 OK):** `{ "id": "q99", "message": "Асуулт шинэчлэгдлээ" }`

---

### ✏️ Teacher Admin CRUD 2: Courses (TASK-04)
* **`POST /api/admin/courses`**
  * **Role:** **Teacher**
  * **Description:** **[CRUD 2 - Create]** Шинэ хичээл үүсгэн системд нэмэх.
  * **Request:** `{ "title": "Мобайл хөгжүүлэлт", "description": "React Native үндэс", "icon": "mobile" }`
  * **Response (201 Created):** `{ "id": "c99", "title": "Мобайл хөгжүүлэлт" }`

* **`DELETE /api/admin/courses/:id`**
  * **Role:** **Teacher**
  * **Description:** **[CRUD 2 - Delete]** Шаардлагагүй хичээлийг системээс устгах.
  * **Response (200 OK):** `{ "message": "Хичээл амжилттай устгагдлаа" }`

---

### 🗺️ Learning Path & Topics (TASK-03)
* **`GET /api/units/path/:courseId`**
  * **Role:** Student
  * **Description:** Тухайн хичээлийн хэвтээ замд харагдах Нэгжүүд (Completed, Current, Locked) авах.
  * **Response (200 OK):** `{ "courseTitle": "Веб систем", "units": [ { "id": "u1", "status": "COMPLETED" }, { "id": "u2", "status": "CURRENT" } ] }`

* **`GET /api/topics/:unitId`**
  * **Role:** Student
  * **Description:** Нэгжийн доторх сэдвүүдийг жагсаалтаар авах.

---

### 📖 Explore & Library (TASK-05)
* **`GET /api/courses/explore?search={query}&category={cat}`**
  * **Role:** Student
  * **Description:** Мэдлэгийн сангаас лекцийн хичээлүүдийг хайх (Search) болон шүүж (Filter) авах.
  * **Response (200 OK):** `[ { "id": "e1", "title": "React Components", "category": "Frontend" } ]`

* **`GET /api/lectures/:id`**
  * **Role:** Student
  * **Description:** Интерактив лекцийн агуулга, кодын дээж болон Демо мэдээллийг татах.

---

### 🏆 Leaderboard (TASK-06)
* **`GET /api/leaderboard?period={weekly|allTime}`**
  * **Role:** Student / Teacher
  * **Description:** Нийт цуглуулсан XP дээр суурилсан чансааны жагсаалтыг татах.
  * **Response (200 OK):** `[ { "rank": 1, "name": "Бат-Эрдэнэ", "xp": 1240 }, { "rank": 2, "name": "Номин", "xp": 1120 } ]`

---

## 🔄 3. SPA Page болон API-ын Холбоосын Тараагч Схем

```text
[ /login ]                   ---> POST /api/auth/login
[ /dashboard ]               ---> GET  /api/user/profile
[ /practice ]                ---> GET  /api/courses/practice
[ /practice/:courseId ]      ---> GET  /api/units/path/:courseId
[ /quiz/:unitId ]            ---> GET  /api/quiz/:unitId
[ /quiz/result ]             ---> POST /api/quiz/submit
[ /explore ]                 ---> GET  /api/courses/explore?search=...
[ /explore/lecture/:id ]     ---> GET  /api/lectures/:id
[ /leaderboard ]             ---> GET  /api/leaderboard
[ /admin/questions ]         ---> POST & PUT /api/admin/questions (CRUD 1)
[ /admin/courses ]           ---> POST & DELETE /api/admin/courses (CRUD 2)