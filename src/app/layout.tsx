import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import '@/app/globals.css'


const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Md. Masud Rana | Software Engineer & Frontend Developer',
  description: 'Software Engineer and Frontend Developer specializing in React, Next.js, TypeScript and FinTech applications.',
  openGraph: {
    title: 'Md. Masud Rana | Software Engineer & Frontend Developer',
    description: 'Software Engineer and Frontend Developer specializing in React, Next.js, TypeScript and FinTech applications.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className={jakarta.className}>{children}</body>
    </html>
  )
}

