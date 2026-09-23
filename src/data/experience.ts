export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string[]
}

export const experience: Experience[] = [
  {
    id: 'brain-station-23',
    company: 'Brain Station 23',
    role: 'Software Engineer',
    period: '12/2023 – Present',
    description: [
      'Led the FinTech team in delivering remittance and digital financial solutions.',
      'Developed web and mobile application features using React.js, Next.js, React Native, and Node.js.',
      'Collaborated with cross-functional teams to enhance the scalability and security of financial services.',
    ],
  },
  {
    id: 'innovatica',
    company: 'Innovatica Software Lab Ltd',
    role: 'Full Stack Developer',
    period: '04/2023 – 11/2023',
    description: [
      'Developed web and mobile applications for online doctor consultation services, enhancing user engagement.',
      'Optimised POS solutions for retail and super-shop businesses, improving transaction efficiency.',
      'Built and maintained cohesive frontend and backend features to support business requirements.',
    ],
  },
  {
    id: 'spring-rain',
    company: 'Spring Rain Private Ltd',
    role: 'Software Engineer Intern',
    period: '01/2023 – 04/2023',
    description: [
      'Developed robust applications with JavaScript, Node.js, React.js, and Redux.js during internship.',
      'Applied extensive training for practical outcomes in real-world development scenarios.',
    ],
  },
]

export interface Activity {
  id: string
  title: string
  description: string
}

export const activities: Activity[] = [
  {
    id: 'programming-club',
    title: 'Computer Programming Club',
    description: 'Active member of the university programming club.',
  },
  {
    id: 'cricket-team',
    title: 'University Cricket Team',
    description: 'Member of the university cricket team.',
  },
  {
    id: 'beecrowd',
    title: 'Beecrowd',
    description: 'Solved 105+ competitive programming problems.',
  },
  {
    id: 'hackerrank',
    title: 'HackerRank',
    description: 'Solved 70+ competitive programming problems.',
  },
  {
    id: 'uva',
    title: 'UVa Online Judge',
    description: 'Solved 50+ competitive programming problems.',
  },
]

export interface Language {
  name: string
  proficiency: string
}

export const languages: Language[] = [
  {
    name: 'Bangla',
    proficiency: 'Native',
  },
  {
    name: 'English',
    proficiency: 'Fluent',
  },
]
