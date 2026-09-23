export interface Project {
  id: string
  name: string
  category: string
  description: string
  technologies: string[]
  contribution: string
  period: string
  image: string
}

export const projects: Project[] = [
  {
    id: 'zoober-pay',
    name: 'ZooberPay - Remittance Platform',
    category: 'FinTech / Remittance',
    description: 'A remittance platform facilitating money transfers between Canada, Bangladesh, Nepal, and Pakistan. Features include Add Money, Send Money, and Beneficiary Management.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Zendesk API'],
    contribution: 'Sole Frontend Developer responsible for developing key features including Add Money, Send Money, and Beneficiary Management. Enhanced user experience and integrated Zendesk support ticketing for seamless customer service operations.',
    period: '02/2026 – 06/2026',
    image: '/images/zoober.png',
  },
  {
    id: 'bkash-barta',
    name: 'bKash Barta - Chrome Extension',
    category: 'Chrome Extension / FinTech',
    description: 'A Chrome Extension providing real-time bKash Merchant payment notifications with automatic payment monitoring and instant alerts.',
    technologies: ['JavaScript', 'Chrome Extension API', 'bKash API'],
    contribution: 'Designed, developed, and published the Chrome Extension. Managed the entire development lifecycle from UI design to successful Chrome Web Store deployment.',
    period: '05/2025 – 12/2025',
    image: '/images/bkash-barta.png',
  },
  {
    id: 'health-bridge',
    name: 'Health Bridge - Healthcare Solution',
    category: 'Healthcare / Full Stack',
    description: 'A full-stack healthcare solution featuring doctor appointments, nurse hiring, medicine ordering, blood donor search, and ambulance booking.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    contribution: 'Engineered the full-stack solution implementing secure authentication, cart and checkout capabilities, and healthcare service history management. Built scalable applications ensuring smooth user experience.',
    period: '01/2024 – 07/2024',
    image: '/images/health-bridge.png',
  },
]
