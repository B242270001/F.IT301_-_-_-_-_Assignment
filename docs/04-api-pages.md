# 04. API ба SPA Хуудасны тодорхойлолт

| Route / Path | API Endpoint | Method | Task ID | Хариуцагч | Тайлбар |
|---|---|---|---|---|---|
| `/login` | `/api/auth/login` | POST | `TASK-01` | А. Төгөлдөр | Нэвтрэх үйлдэл |
| `/dashboard` | `/api/user/profile` | GET | `TASK-01` | А. Төгөлдөр | Виртуаль өрөөний мэдээлэл |
| `/practice` | `/api/courses/practice` | GET | `TASK-02` | Мөнхбаяр | Дадлага хичээлүүд авах |
| `/practice/:courseId/path` | `/api/units/path/:courseId` | GET | `TASK-03` | Тэмүүлэн | Хэвтээ сургалтын зам |
| `/quiz/:unitId` | `/api/quiz/:unitId` | GET | `TASK-02` | Мөнхбаяр | Асуултууд татах |
| `/quiz/submit` | `/api/quiz/submit` | POST | `TASK-04` | Д. Баттөмөр | Хариулт шалгах, XP олгох |
| `/explore` | `/api/courses/explore` | GET | `TASK-05` | Хүслэн О. | Лекцийн сан |
| `/explore/lecture/:id` | `/api/lectures/:id` | GET | `TASK-05` | Хүслэн О. | Интерактив лекцийн агуулга |
| `/leaderboard` | `/api/leaderboard` | GET | `TASK-06` | Цогжавхлан Б. | Чансааны жагсаалт татах |