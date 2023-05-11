import { computer } from "../../public/assets";

export interface programs {
  img: string | undefined;
  university: string;
  course: string;
  isCompleted: boolean;
}

export interface courses {
  img: string | undefined;
  courseProvider: string;
  courseName: string;
  progressPercentage: number;
}

export interface nav {
  img: string;
  title: string;
  label: string;
}

export const programsArr: programs[] = [
  {
    img: computer,
    university: "University of Lagos",
    course: "Bachelor of Science (BSc) in Computer Science",
    isCompleted: false,
  },
  {
    img: computer,
    university: "University of Abuja",
    course: "Bachelor of Science (BSc) in Computer Science",
    isCompleted: true,
  },
  {
    img: computer,
    university: "University of Lagos",
    course: "Bachelor of Science (BSc) in Computer Science",
    isCompleted: true,
  },
];

export const coursesArr: courses[] = [
  {
    img: computer,
    courseProvider: "CIPD",
    courseName: "C++ For Dummies",
    progressPercentage: 80,
  },
  {
    img: computer,
    courseProvider: "Yorkshire",
    courseName: "Python for Data Analysis",
    progressPercentage: 92,
  },
  {
    img: computer,
    courseProvider: "Google",
    courseName: "UX Fundamentals",
    progressPercentage: 100,
  },
];
