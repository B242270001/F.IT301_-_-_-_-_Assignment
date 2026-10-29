# StudyQuest — цэвэр HTML/CSS/JS (Node, npm, build шаардахгүй)

## Ажиллуулах
`index.html` файлыг browser-ээр (давхар click) нээнэ. Тэгэхэд л болно.
(Inter фонт интернэтээс ачаалагдана; интернэтгүй бол системийн фонтоор харагдана.)

## Хуудас ба API
| Хуудас | Хаяг (URL) | API |
|---|---|---|
| PracticeCourses | `index.html#/practice` | `GET /api/courses/practice` |
| QuizQuestion | `index.html#/quiz/u-react-component` | `GET /api/quiz/:unitId` |
| AdminQuestions | `index.html#/admin/questions` | `POST /api/admin/questions`, `PUT /api/admin/questions/:id` (CRUD 1) |
| (AdminQuestions-д нэмэлт) | | `GET /api/admin/questions`, `GET /api/admin/units`, `DELETE /api/admin/questions/:id` |

Жишээ unitId: `u-react-component`, `u-arrays`, `u-limits`

> `file://`-ээр нээхэд `/practice` шиг жинхэнэ path ажиллахгүй тул `#/practice` (hash) route ашигласан.

## Файлууд
- `index.html` — бүрхүүл
- `styles.css` — Figma-ийн өнгө, радиус, фонтын токенууд
- `api.js` — API давхарга. Хүсэлтүүдийг browser дотор дууриаж, өгөгдлийг localStorage-д хадгална.
  Жинхэнэ backend холбохдоо `USE_REAL_BACKEND = true` болгоно.
- `app.js` — router + 3 хуудас
