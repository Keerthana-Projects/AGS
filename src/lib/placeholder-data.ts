import type { StudentResponse, Test, User } from '@/lib/types';

export const mockUsers: Record<string, User> = {
  student: {
    id: 'user-student-01',
    name: 'Alex Doe',
    email: 'alex.doe@school.edu',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?u=alexdoe'
  },
  faculty: {
    id: 'user-faculty-01',
    name: 'Dr. Evelyn Reed',
    email: 'e.reed@school.edu',
    role: 'faculty',
    avatar: 'https://i.pravatar.cc/150?u=evelynreed'
  },
  admin: {
    id: 'user-admin-01',
    name: 'Sam Wallace',
    email: 's.wallace@school.edu',
    role: 'admin',
    avatar: 'https://i.pravatar.cc/150?u=samwallace'
  }
};

export const mockTests: Test[] = [
  {
    id: 'test-001',
    title: 'Introduction to Python - Midterm',
    course: 'CS101',
    duration: 60,
    totalPoints: 100,
    questions: [
      { id: 'q1', type: 'multiple-choice', text: 'What is the output of `print(2 ** 3)`?', options: ['6', '8', '9', '12'], points: 10 },
      { id: 'q2', type: 'essay', text: 'Explain the difference between a list and a tuple in Python.', points: 30 },
      { id: 'q3', type: 'coding', text: 'Write a function to calculate the factorial of a number.', points: 60 },
    ],
  },
  {
    id: 'test-002',
    title: 'Data Structures Final Exam',
    course: 'CS201',
    duration: 120,
    totalPoints: 150,
    questions: [],
  },
  {
    id: 'test-003',
    title: 'Literary Analysis Fundamentals',
    course: 'ENG101',
    duration: 90,
    totalPoints: 100,
    questions: [],
  },
];

export const mockStudentResponses: StudentResponse[] = [
  {
    id: 'resp-001',
    testId: 'test-001',
    studentId: 'stud-101',
    studentName: 'Charlie Brown',
    submittedAt: new Date('2024-07-28T10:30:00Z'),
    score: 85,
    totalPoints: 100,
    overallFeedback: 'Good effort. Your understanding of basic concepts is solid, but the essay portion could be more detailed. The coding solution was efficient but missed an edge case for n=0.'
  },
  {
    id: 'resp-002',
    testId: 'test-001',
    studentId: 'stud-102',
    studentName: 'Lucy van Pelt',
    submittedAt: new Date('2024-07-28T10:32:00Z'),
    score: 95,
    totalPoints: 100,
    overallFeedback: 'Excellent work! Your explanations are clear and your code is very well-structured. Keep up the great work.'
  },
  {
    id: 'resp-003',
    testId: 'test-001',
    studentId: 'stud-103',
    studentName: 'Linus van Pelt',
    submittedAt: new Date('2024-07-28T10:25:00Z'),
    score: 72,
    totalPoints: 100,
    overallFeedback: 'A decent attempt. You seem to grasp the coding concepts but struggled with the theoretical questions. Review the lecture notes on Python data types.'
  },
  {
    id: 'resp-004',
    testId: 'test-002',
    studentId: 'stud-101',
    studentName: 'Charlie Brown',
    submittedAt: new Date('2024-05-15T14:00:00Z'),
    score: 120,
    totalPoints: 150,
    overallFeedback: 'Solid performance on a challenging exam. Your understanding of complex data structures is impressive.'
  },
];

export const mockStudentOwnResponses: StudentResponse[] = [
    {
        id: 'resp-001-own',
        testId: 'test-001',
        studentId: mockUsers.student.id,
        studentName: mockUsers.student.name,
        submittedAt: new Date('2024-07-29T11:00:00Z'),
        score: 88,
        totalPoints: 100,
        overallFeedback: 'Great job on the coding question! Your logic was sound. For the essay, try to provide more specific examples to support your points. The multiple-choice section was flawless.'
    },
    {
        id: 'resp-002-own',
        testId: 'test-003',
        studentId: mockUsers.student.id,
        studentName: mockUsers.student.name,
        submittedAt: new Date('2024-07-22T15:00:00Z'),
        score: 78,
        totalPoints: 100,
        overallFeedback: 'Your analysis shows a good grasp of the main themes. To improve, focus on structuring your arguments more clearly and check for minor grammatical errors.'
    }
]
