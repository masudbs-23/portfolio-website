export interface SkillCategory {
  category: string
  skills: { name: string; experience: string }[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', experience: '3+ years for web applications' },
      { name: 'Next.js', experience: '1+ year in server-side rendering' },
      { name: 'React Native', experience: '1+ years for mobile applications' },
      { name: 'JavaScript', experience: '3+ years' },
      { name: 'Redux.js', experience: '3+ years' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', experience: '1+ years in backend development' },
      { name: 'Express.js', experience: '1+ years' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', experience: '1+ years in financial applications' },
      { name: 'MongoDB', experience: '1+ years in database management' },
    ],
  },
  {
    category: 'Tools & Services',
    skills: [
      { name: 'Git', experience: '3+ years' },
      { name: 'GitHub', experience: '3+ years' },
      { name: 'Chrome Extension API', experience: '1+ years' },
    ],
  },
]
