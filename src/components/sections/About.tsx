'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Reveal from '../animations/Reveal'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [years, setYears] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setYears(Math.floor(progress * 3))

        if (currentStep >= steps) {
          clearInterval(timer)
          setYears(3)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <Reveal delay={0.2}>
            <div className="space-y-8">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Software Developer with over 3 years of hands-on experience in developing end-to-end web and mobile applications using React.js, Next.js, React Native, Node.js, Express.js, and MongoDB.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Passionate about building scalable, responsive, and high-performing products that solve real-world problems. Adept at collaborating with cross-functional teams and delivering clean, maintainable code.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Currently working at Brain Station 23 as a Software Engineer, I lead the FinTech team in delivering remittance and digital financial solutions, focusing on React.js, Next.js, React Native, and Node.js development.
              </p>
            </div>
          </Reveal>

          {/* Stats */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Reveal delay={0.3}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-xl p-8 sm:p-10 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl sm:text-6xl font-bold text-accent mb-3">
                  {years}+
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base">
                  Years Experience
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.4}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-xl p-8 sm:p-10 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl sm:text-6xl font-bold text-accent mb-3">
                  3+
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base">
                  Major Projects
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.5}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-xl p-8 sm:p-10 text-center sm:col-span-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-3">
                  FinTech
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base">
                  Domain Experience
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
