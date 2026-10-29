/**
 * Mock Service Layer — StudyQuest
 * ================================
 * Бүх mock өгөгдлийг нэг цэгээс экспортолно.
 * Жинхэнэ backend API холбогдоход энэ давхаргыг солиход хялбар.
 *
 * Хэрэглээ:  import { mockAuth, mockCourses, ... } from './mock';
 */

export { default as mockAuth } from './mockAuth';
export { default as mockCourses } from './mockCourses';
export { default as mockQuiz } from './mockQuiz';
export { default as mockLeaderboard } from './mockLeaderboard';
export { default as mockProgress } from './mockProgress';
export { default as mockLectures } from './mockLectures';
export { default as mockTopics } from './mockTopics';
