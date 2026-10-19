# 📋 WORK_ALLOCATION.md — Багийн гишүүдийн ажил хуваарилалт

Нийт гишүүд: 6  
Төслийн нэр: StudyQuest (Gamified University Learning Platform)

| Task ID | Хариуцагч | Үндсэн хариуцах дэлгэц & Модуль | Хариуцах Route & API / Тэст |
|---|---|---|---|
| **TASK-01** | **А. Төгөлдөр** | • Нэвтрэх хуудас (`Login`)<br>• Виртуаль өрөө Dashboard (`Dashboard`) | • `/login`, `/dashboard`<br>• `POST /api/auth/login`<br>• `GET /api/user/profile`<br>• Frontend Auth/Login Unit Test |
| **TASK-02** | **Мөнхбаяр** | • Дадлага хичээл сонгох (`PracticeCourses`)<br>• Дадлага сонгох асуулт (`QuizQuestion`)<br>• Багшийн асуулт засах (`AdminQuestions`) | • `/practice`, `/quiz/:unitId`, `/admin/questions`<br>• `GET /api/courses/practice`<br>• `GET /api/quiz/:unitId`<br>• `POST /api/admin/questions` (CRUD 1)<br>• `PUT /api/admin/questions/:id` (CRUD 1) |
| **TASK-03** | **Тэмүүлэн (Temka)** | • Дадлага суралцах хэвтээ зам (`HorizontalPath`)<br>• Судлах сэдвийн жагсаалт (`UnitTopics`) | • `/practice/:courseId`, `/topics`<br>• `GET /api/units/path/:courseId`<br>• `GET /api/topics/:unitId`<br>• Frontend Component Test (Path Render) |
| **TASK-04** | **Д. Баттөмөр** | • Дадлага хичээлийн үр дүн (`QuizResult`)<br>• Дадлага кодын үр дүн (`CodeOutputResult`)<br>• Багшийн хичээл засах (`AdminCourses`) | • `/quiz/result`, `/admin/courses`<br>• `POST /api/quiz/submit`<br>• `POST /api/admin/courses` (CRUD 2)<br>• `DELETE /api/admin/courses/:id` (CRUD 2)<br>• Backend API integration test |
| **TASK-05** | **Хүслэн О.** | • Судлах хичээлийн сан (`ExploreCourses`) - Хайлттай<br>• React лекцийн дэлгэрэнгүй (`ExploreLectureDetail`) | • `/explore`, `/explore/lecture/:id`<br>• `GET /api/courses/explore` (Search/Filter)<br>• `GET /api/lectures/:id`<br>• Interactive Component Test |
| **TASK-06** | **Цогжавхлан Б.** | • Долоо хоногийн чансаа (`Leaderboard`)<br>• StudyQuest харагдах төлөвийн хуудас (`GlobalUIStates`) | • `/leaderboard`, `/ui-states`<br>• `GET /api/leaderboard`<br>• Automated End-to-End & Responsiveness Test |