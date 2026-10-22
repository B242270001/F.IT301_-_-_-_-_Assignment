# 03. Өгөгдлийн загвар

## Entity-ийн ерөнхий зураглал

```
User 1──N Course (teacher үүсгэнэ)          Course 1──N Unit 1──N QuizQuestion
User 1──N QuizAttempt                        Course 1──N Topic 1──N Lecture
User M──N Unit  (UserProgress-аар)           User M──N Topic (TopicProgress-аар)
QuizAttempt N──1 Unit
```

## 1. User
| Талбар | Төрөл | Дүрэм |
|---|---|---|
| `_id` | ObjectId | PK |
| `username` | String | required, **unique**, 3–30 тэмдэгт; нэвтрэх "Нэр" |
| `displayName` | String | required, 2–50 тэмдэгт |
| `passwordHash` | String | required; API response-д **буцаахгүй**. Mock-д зөвхөн demo нууц үг |
| `role` | String | enum `STUDENT` \| `TEACHER`, default `STUDENT` |
| `totalXp` | Number | integer ≥ 0, default 0 |
| `weeklyXp` | Number | integer ≥ 0, default 0 |
| `todayXp` | Number | integer ≥ 0, default 0 |
| `dailyGoalXp` | Number | integer 10–500, default 60 |
| `streakDays` | Number | integer ≥ 0, default 0 |
| `lastActiveAt` | Date | |

## 2. Course — **CRUD 1**
| Талбар | Төрөл | Дүрэм |
|---|---|---|
| `_id` | ObjectId | PK |
| `title` | String | required, 3–80 тэмдэгт, **unique** (том жижгийг ялгахгүй) |
| `description` | String | required, 10–500 тэмдэгт |
| `category` | String | required, enum `WEB` \| `OS` \| `DATABASE` \| `PROGRAMMING` |
| `icon` | String | enum `web` \| `os` \| `db` \| `code` \| `mobile`, default `code` |
| `isFeatured` | Boolean | default false |
| `createdBy` | ObjectId | ref User (role `TEACHER`), required |
| `createdAt` | Date | |

## 3. Unit
| Талбар | Төрөл | Дүрэм |
|---|---|---|
| `_id` | ObjectId | PK |
| `courseId` | ObjectId | ref Course, required |
| `section` | String | required (жишээ: "Вебийн үндэс") |
| `title` | String | required, 2–80 |
| `order` | Number | integer ≥ 1; `(courseId, order)` unique |

## 4. Topic
| Талбар | Төрөл | Дүрэм |
|---|---|---|
| `_id` | ObjectId | PK |
| `courseId` | ObjectId | ref Course, required |
| `title` | String | required, 2–80 |
| `order` | Number | integer ≥ 1 |

## 5. Lecture — **CRUD 2**
| Талбар | Төрөл | Дүрэм |
|---|---|---|
| `_id` | ObjectId | PK |
| `topicId` | ObjectId | ref Topic, required |
| `courseId` | ObjectId | ref Course, required |
| `title` | String | required, 3–100 |
| `summary` | String | max 300 |
| `content` | String | required |
| `codeSample` | String | |
| `demoType` | String | enum `NONE` \| `REACT_RENDER` \| `CLIENT_SERVER` \| `HTTP` \| `STATE`, default `NONE` |
| `materials` | Array | `{ name: String, url: String, type: enum pdf/pptx/docx/png/jpg, sizeBytes: Number ≤ 10 485 760 }` |
| `knowledgeCheck` | Array | 0–3 ширхэг: `{ question: String (required), options: [String] (≥ 2), correctAnswer: String (required) }` |
| `createdBy` | ObjectId | ref User, required |
| `createdAt` | Date | |

## 6. QuizQuestion
| Талбар | Төрөл | Дүрэм |
|---|---|---|
| `_id` | ObjectId | PK |
| `unitId` | ObjectId | ref Unit, required |
| `type` | String | required, enum `MULTIPLE_CHOICE` \| `TRUE_FALSE` \| `CODE_OUTPUT` |
| `questionText` | String | required |
| `codeSnippet` | String | `CODE_OUTPUT` үед required |
| `options` | [String] | `MULTIPLE_CHOICE`, `CODE_OUTPUT` үед ≥ 2; `TRUE_FALSE`-д `["Үнэн","Худал"]` |
| `correctAnswer` | String | required, `options`-ийн нэг байна. API-д асуулт татахад буцаахгүй |
| `explanation` | String | |
| `xpReward` | Number | integer 1–100, default 10 |

## 7. QuizAttempt
| Талбар | Төрөл | Дүрэм |
|---|---|---|
| `_id` | ObjectId | PK |
| `userId` | ObjectId | ref User, required |
| `unitId` | ObjectId | ref Unit, required |
| `answers` | Array | `{ questionId, answer: String, isCorrect: Boolean }` |
| `correctCount`, `totalCount` | Number | integer ≥ 0 |
| `scorePercent` | Number | 0–100 |
| `xpEarned` | Number | integer ≥ 0 |
| `weakTopics` | [String] | дахин давах сэдвийн нэр |
| `createdAt` | Date | |

## 8. UserProgress
| Талбар | Төрөл | Дүрэм |
|---|---|---|
| `_id` | ObjectId | PK |
| `userId` | ObjectId | ref User, required |
| `unitId` | ObjectId | ref Unit, required |
| `status` | String | enum `LOCKED` \| `AVAILABLE` \| `CURRENT` \| `COMPLETED`, default `LOCKED` |
| `score` | Number | 0–100 |
| Index | | `(userId, unitId)` нийлмэл **unique** |

## 9. TopicProgress
| Талбар | Төрөл | Дүрэм |
|---|---|---|
| `_id` | ObjectId | PK |
| `userId` | ObjectId | ref User, required |
| `topicId` | ObjectId | ref Topic, required |
| `status` | String | enum `NOT_STARTED` \| `DONE`, default `NOT_STARTED` |
| `knowledgeScore` | Number | 0–100 |
| Index | | `(userId, topicId)` нийлмэл **unique** |

## Хамаарал

- Course 1:N Unit, Course 1:N Topic, Topic 1:N Lecture, Unit 1:N QuizQuestion.
- User(TEACHER) 1:N Course, User(TEACHER) 1:N Lecture.
- User 1:N QuizAttempt, QuizAttempt N:1 Unit.
- User M:N Unit — UserProgress-аар. User M:N Topic — TopicProgress-аар.
- **Cascade:** Course устгахад түүний Unit, Topic, Lecture, QuizQuestion, холбогдох progress мөн устна. Lecture устгахад зөвхөн тэр лекц устна.

## Role ба өгөгдлийн эрх

| Үйлдэл | STUDENT | TEACHER |
|---|---|---|
| Course/Topic/Lecture унших | ✓ | ✓ |
| Course create/update/delete | ✗ | ✓ |
| Lecture create/update/delete | ✗ | ✓ |
| QuizAttempt үүсгэх, өөрийнхөө progress унших | ✓ | ✗ |
| Бүх суралцагчийн жагсаалт, статистик | ✗ | ✓ |

## Mock seed data (Lab 3)

```json
{
  "users": [
    {"id":"U01","username":"saruul","displayName":"Саруул","role":"STUDENT","totalXp":890,"weeklyXp":190,"todayXp":40,"dailyGoalXp":60,"streakDays":5},
    {"id":"U02","username":"bat-erdene","displayName":"Бат-Эрдэнэ","role":"STUDENT","totalXp":1240,"weeklyXp":260,"streakDays":12},
    {"id":"U03","username":"nomin","displayName":"Номин","role":"STUDENT","totalXp":1120,"weeklyXp":230,"streakDays":9},
    {"id":"U04","username":"temuulen","displayName":"Тэмүүлэн","role":"STUDENT","totalXp":980,"weeklyXp":210,"streakDays":7},
    {"id":"U05","username":"bold","displayName":"Болд","role":"STUDENT","totalXp":820,"weeklyXp":150,"streakDays":3},
    {"id":"U06","username":"bagsh","displayName":"Багш Дорж","role":"TEACHER"}
  ],
  "demoPasswords": {"students":"student123","teacher":"teacher123"},
  "courses": [
    {"id":"C01","title":"Веб систем ба технологи","category":"WEB","icon":"web","isFeatured":true,"createdBy":"U06"},
    {"id":"C02","title":"Үйлдлийн систем","category":"OS","icon":"os","createdBy":"U06"},
    {"id":"C03","title":"Өгөгдлийн сан","category":"DATABASE","icon":"db","createdBy":"U06"}
  ],
  "units(C01)": ["UN01 Вебийн архитектур","UN02 HTTP ба HTTPS","UN03 Client ба Server","UN04 HTML ба CSS","UN05 JavaScript","UN06 React үндэс"],
  "topics(C01)": ["TP01 Client-Server","TP02 HTTP Request","TP03 HTML Structure","TP04 JS Events","TP05 React Components","TP06 Props & State"],
  "lectures": [{"id":"L05","topicId":"TP05","courseId":"C01","title":"React Components","demoType":"REACT_RENDER"}],
  "quizQuestions(UN04)": "Q01 MULTIPLE_CHOICE, Q02 TRUE_FALSE, Q03 CODE_OUTPUT, Q04 MULTIPLE_CHOICE (тус бүр 10 XP, нийт 40 XP)"
}
```

- UN01–UN03 `COMPLETED`, UN04 `CURRENT`, UN05–UN06 `LOCKED`. C02, C03 тус бүр 2 нэгжтэй.
- Бүх demo бүртгэл болон нууц үг нь **зөвхөн mock**. Backend дээр нууц үгийг bcrypt-ээр hash хийж хадгална.
- Mock store: `localStorage` түлхүүр `studyquest.mock.v1`; түлхүүрийг устгахад seed-ээр сэргэнэ.

## Хариуцлага

| Entity | Эзэн |
|---|---|
| User, session | TASK-01 |
| QuizQuestion, QuizAttempt | TASK-02 |
| Unit, UserProgress, mock store | TASK-03 |
| Course (create/update/delete), Lecture create, uploads | TASK-04 |
| Topic, TopicProgress, Lecture унших/засах/устгах | TASK-05 |
| Leaderboard (User-ийн XP-ээс гаргасан view) | TASK-06 |