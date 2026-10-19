# 03. Өгөгдлийн загвар (Data Model & Entities)

## Entities & Attributes

### 1. User Entity (1:N with Progress)
- `id`: String (UUID, PK)
- `studentId`: String (Unique, Required)
- `password`: String (Hashed)
- `displayName`: String (Required)
- `role`: Enum ['STUDENT', 'TEACHER'] (Required)
- `totalXp`: Integer (Default: 0)
- `streakDays`: Integer (Default: 0)

### 2. Course Entity (CRUD 2)
- `id`: String (UUID, PK)
- `title`: String (Required)
- `icon`: String
- `description`: String

### 3. Unit Entity
- `id`: String (UUID, PK)
- `courseId`: String (FK -> Course.id)
- `title`: String (Required)
- `order`: Integer

### 4. QuizQuestion Entity (CRUD 1)
- `id`: String (UUID, PK)
- `unitId`: String (FK -> Unit.id)
- `questionText`: String (Required)
- `type`: Enum ['MULTIPLE_CHOICE', 'TRUE_FALSE', 'CODE_OUTPUT']
- `options`: Array of Strings
- `correctAnswer`: String (Required)
- `explanation`: String
- `xpReward`: Integer (Default: 10)

### 5. UserProgress Entity
- `id`: String (UUID, PK)
- `userId`: String (FK -> User.id)
- `unitId`: String (FK -> Unit.id)
- `status`: Enum ['LOCKED', 'AVAILABLE', 'COMPLETED']
- `score`: Integer