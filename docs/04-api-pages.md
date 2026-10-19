# 04. API ба SPA Хуудасны холбоос (10+ REST APIs)

| Method | API Path | Authorization | Task ID | Хариуцагч | Тайлбар |
|---|---|---|---|---|---|
| `POST` | `/api/auth/login` | Public | `TASK-01` | А. Төгөлдөр | Нэвтрэх & JWT Токен авах |
| `GET` | `/api/user/profile` | Student/Teacher | `TASK-01` | А. Төгөлдөр | Оюутны профиль, XP татах |
| `GET` | `/api/courses/practice` | Student | `TASK-02` | Мөнхбаяр | Дадлага хичээлүүдийн жагсаалт |
| `GET` | `/api/quiz/:unitId` | Student | `TASK-02` | Мөнхбаяр | Асуултуудыг татах |
| `POST` | `/api/admin/questions` | **Teacher** | `TASK-02` | Мөнхбаяр | **[CRUD 1 - Create]** Асуулт нэмэх |
| `PUT` | `/api/admin/questions/:id` | **Teacher** | `TASK-02` | Мөнхбаяр | **[CRUD 1 - Update]** Асуулт засах |
| `GET` | `/api/units/path/:courseId` | Student | `TASK-03` | Тэмүүлэн | Хэвтээ сургалтын зам татах |
| `POST` | `/api/quiz/submit` | Student | `TASK-04` | Д. Баттөмөр | Хариулт шалгаж, XP олгох |
| `POST` | `/api/admin/courses` | **Teacher** | `TASK-04` | Д. Баттөмөр | **[CRUD 2 - Create]** Шинэ хичээл |
| `DELETE` | `/api/admin/courses/:id` | **Teacher** | `TASK-04` | Д. Баттөмөр | **[CRUD 2 - Delete]** Хичээл устгах |
| `GET` | `/api/courses/explore` | Student | `TASK-05` | Хүслэн О. | Лекцийн сан (Хайлттай) |
| `GET` | `/api/lectures/:id` | Student | `TASK-05` | Хүслэн О. | Лекцийн агуулга авах |
| `GET` | `/api/leaderboard` | Student/Teacher | `TASK-06` | Цогжавхлан Б. | Чансаа татах |