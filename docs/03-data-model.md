# 03. Өгөгдлийн загвар (Data Model)

## Entities & Attributes

### 1. User Entity [TASK-01, TASK-06]
- `id`: String (UUID, Required, Primary Key)
- `studentId`: String (Required, Unique, e.g., "B200900123")
- `password`: String (Required, Hashed, Min: 6 chars)
- `displayName`: String (Required, e.g., "Бат-Эрдэнэ")
- `totalXp`: Integer (Default: 0, Min: 0)
- `streakDays`: Integer (Default: 0)
- `avatarUrl`: String (Optional)

### 2. Course Entity [TASK-02, TASK-05]
- `id`: String (UUID, Required)
- `title`: String (Required, e.g., "Веб систем ба технологи")
- `icon`: String (Required)
- `description`: String (Required)

### 3. Unit / Section Entity [TASK-03]
- `id`: String (UUID)
- `courseId`: String (Foreign Key -> Course.id)
- `title`: String (Required, e.g., "Frontend технологи")
- `order`: Integer (Required)

### 4. QuizQuestion Entity [TASK-02, TASK-04]
- `id`: String (UUID)
- `unitId`: String (Foreign Key -> Unit.id)
- `questionText`: String (Required)
- `type`: Enum ['MULTIPLE_CHOICE', 'TRUE_FALSE', 'CODE_OUTPUT']
- `options`: Array of Strings
- `correctAnswer`: String (Required)
- `explanation`: String (Required)
- `xpReward`: Integer (Default: 10)

### 5. UserProgress Entity [TASK-03, TASK-04, TASK-06]
- `id`: String (UUID)
- `userId`: String (Foreign Key -> User.id)
- `unitId`: String (Foreign Key -> Unit.id)
- `status`: Enum ['LOCKED', 'AVAILABLE', 'COMPLETED']
- `score`: Integer (Default: 0)
- `updatedAt`: DateTime

## Entity Relationship (ER)