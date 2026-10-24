# StudyQuest — UI/UX дизайн систем (v3.0)

Энэ баримт [02-wireframes.md](02-wireframes.md)-ийн 12 хуудасны визуал болон харилцан үйлчлэлийн стандарт юм. `design.txt`-ийг орлоно.

## 1. Ерөнхий санаа

Duolingo-ийн тоглоомжуулсан механик (XP, Streak, Leaderboard) болон оюутны тохилог виртуаль өрөөг хослуулна. Оюутан өрөөн дэх объект дээр дарж навигаци хийнэ; багш ижил өрөөнд удирдах самбараар орно.

```
/login ──(Сэрэх)──> /dashboard ─┬─ 💻 /practice → /practice/:courseId → /quiz/:unitId → /quiz/result
                                ├─ 📚 /explore → /topics/:courseId → /explore/lecture/:id
                                ├─ 🏆 /leaderboard
                                ├─ 📋 (Teacher) /teacher → /teacher/courses/new
                                └─ 🛏️ Гарах modal → /login
```

## 2. Өнгөний палитр

| Нэр | Код | Хэрэглээ |
|---|---|---|
| Primary | `#7C5CFC` | Үндсэн товч, Current зангилаа |
| Primary hover | `#6845E8` | Hover/active |
| Light purple | `#F3F0FF` | "Чи" мөр, сонгогдсон chip |
| Background | `#F7F8FC` | Хуудасны дэвсгэр |
| Card | `#FFFFFF` | Card, modal |
| Text | `#252538` | Үндсэн бичвэр |
| Text secondary | `#77778C` | Туслах бичвэр |
| Success | `#58CC02` | Зөв хариулт, Completed |
| Reward | `#FFC857` | XP, Streak |
| Error | `#FF5B6E` | Буруу хариулт, validation алдаа |

**Хандалтын шаардлага:** текст ба дэвсгэрийн contrast ≥ 4.5:1 (`#77778C`-ийг зөвхөн том/туслах текстэд, цагаан дэвсгэр дээр ашиглана). Өнгөөр дангаар утга илэрхийлэхгүй: зөв/буруу нь ✓/✗ икон, төлөв нь текст/икон дагалдана.

## 3. Typography ба хэмжээс

- Фонт: **Inter**, fallback `system-ui, sans-serif`. Гарчиг 600–700, текст 400–500.
- Хэмжээ: H1 28/32px, H2 22px, текст 16px, жижиг 14px.
- Border radius: card/modal `16–20px`, товч/badge `10–14px`.
- Spacing: 4px-ийн сүлжээ (8, 12, 16, 24, 32).
- Дэлгэцийн суурь: Desktop-first 1440×900; **Breakpoint:** ≥1024 desktop, 600–1023 tablet, <600 mobile (шалгах өргөн 375px).

## 4. Нийтлэг компонент

| Компонент | Тайлбар | Эзэн |
|---|---|---|
| `TopHUD` | Лого, нэр, XP, Streak, Rank | TASK-01 |
| `StateView` | `state-loading/empty/error/login-required/forbidden/not-found` | TASK-06 |
| `Toast` | `toast-success`; 4 сек, `aria-live="polite"` | TASK-06 |
| `ConfirmDialog` | `confirm-dialog`, `confirm-delete`, `confirm-cancel`; focus trap, Esc-ээр хаагдана | TASK-06 |
| `ProgressBar` | `role="progressbar"`, `aria-valuenow` | TASK-06 |
| `CourseForm` | Хичээл нэмэх/засах маягт | TASK-04 |

## 5. Хуудас тус бүрийн визуал товч

1. **Login (шөнийн өрөө):** унтаж буй оюутан, одтой цонх, унтарсан компьютер; баруун талд тунгалаг цагаан card (Нэр, Нууц үг, `Сэрэх`). Бүртгүүлэх холбоос байхгүй. Сэрэх анимейшн: наран мандах → сэрүүлэг → босох (≤ 2 сек).
2. **Dashboard (өглөөний өрөө):** HUD + объектууд. Hover/focus дээр ягаан гэрэлтэлт ба tooltip: Компьютер "Practice — Шалгалтад бэлдэх", Номын тавиур "Explore — Мэдлэгийн сан", Цом "Чансаа", Ор "Амрах / Гарах". Багшид Компьютерийн оронд "Удирдах самбар". Баруун доод "Өнөөдрийн зорилго 40/60 XP".
3. **Practice:** хичээлийн card (дүрс, нэр, нэгж, %, progress, `Үргэлжлүүлэх`).
4. **Суралцах зам:** хэвтээ зам. Төлөв: Completed ногоон ✓, Current ягаан гэрэлтэлт, Available энгийн, Locked саарал 🔒.
5. **Quiz:** дээр асуултын дугаар, progress, XP шагнал; баруун талд оюутны дүр (mobile-д нуугдана). 3 төрөл: сонгох, үнэн/худал, кодын гаралт. Inline feedback: ногоон/улаан хүрээ + ✓/✗ + тайлбар.
6. **Үр дүн:** том %, зөв/нийт, +XP, ахицын bar, дахин давах сэдвүүд, 3 товч.
7. **Хичээлийн сан:** хайлт, ангиллын chip, хичээлийн card.
8. **Сэдвийн жагсаалт:** сэдвийн мөр, ахиц %, `DONE` ✓.
9. **Лекц:** зүүн цэс, интерактив диаграм (`Render хийх`), код (syntax highlight), Knowledge Check; багшид `Засах`/`Устгах`.
10. **Чансаа:** podium (🥇🥈🥉), жагсаалт, ▲/▼, "Чи" мөр ягаан дэвсгэртэй.
11. **Багшийн өрөө:** статистик карт, bar chart, хичээл ба суралцагчийн хүснэгт.
12. **Хичээл нэмэх:** 3 хэсэгт (мэдээлэл, материал, лекц) маягт.

## 6. Харилцан үйлчлэл ба хөдөлгөөн

- Товчны hover/focus transition 150ms. Анимейшн бүр `prefers-reduced-motion: reduce` үед идэвхгүй болж, төгсгөлийн төлөвийг шууд харуулна.
- Зөв хариулт: зөөлөн pulse; буруу: богино shake (reduced-motion үед байхгүй).
- Анимейшн тест (Playwright)-ийг удаашруулахгүй: шилжилтийн дараа зорилтот `page-*` testId-г хүлээнэ.

## 7. Хандалт (a11y) ба responsive

- Бүх товч, объект keyboard-оор фокус авч, `Enter/Space`-ээр ажиллана; фокусын хүрээ харагдана.
- Виртуаль өрөөний объект бүр `aria-label` (жишээ: "Дадлага руу очих") бүхий `<button>`.
- Маягтын талбар бүр `<label>`-тэй; алдаа `aria-describedby`-аар холбогдоно.
- Хамгийн бага товчны хэмжээ mobile-д 44×44px.
- Mobile-д body-д хэвтээ scroll үүсэхгүй; зам, хүснэгт, chip өөрийн `overflow-x: auto` хайрцагт.
- Dashboard mobile: 2×2 card grid. Лекцийн цэс drawer. Багшийн хүснэгт card жагсаалт.

## 8. `data-testid` дүрэм

- Хуудас: `page-<нэр>` (12 хуудас, [04-api-pages.md](04-api-pages.md)).
- Төлөв: `state-*`. Талбар: `<хуудас/модуль>-<талбар>-input|select`, алдаа `<талбар>-error`.
- Давтагдах элемент: ижил testId + `data-*` (жишээ: `course-row` + `data-course-id`).
- Нэгэнт нэрлэсэн testId-г өөрчлөхөөс өмнө [team-spec.json](../team-spec.json) ба Playwright scenario-г хамт шинэчилнэ.