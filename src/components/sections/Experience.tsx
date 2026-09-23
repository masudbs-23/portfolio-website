'use client'

import { motion } from 'framer-motion'
import Reveal from '../animations/Reveal'
import StaggerContainer from '../animations/StaggerContainer'
import StaggerItem from '../animations/StaggerItem'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <StaggerContainer>
            <div className="relative">
              {/* Timeline line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-border/50 origin-top"
              />

              {/* Experience items */}
              <div className="space-y-10 lg:space-y-12 pl-8">
                {experience.map((exp, index) => (
                  <StaggerItem key={exp.id}>
                    <Reveal delay={index * 0.2}>
                      <div className="relative">
                        {/* Timeline dot */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true, margin: '-100px' }}
                          transition={{ delay: index * 0.2 + 0.3, duration: 0.4, ease: 'easeOut' }}
                          className="absolute -left-9 top-3 w-3 h-3 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/20"
                        />

                        {/* Experience card */}
                        <div className="bg-card border border-border rounded-xl p-6 lg:p-8 space-y-4 hover:border-accent/30 transition-colors duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-xl font-semibold text-foreground">
                              {exp.role}
                            </h3>
                            <span className="text-sm text-accent font-medium whitespace-nowrap">
                              {exp.period}
                            </span>
                          </div>
                          
                          <h4 className="text-lg text-muted-foreground font-medium">
                            {exp.company}
                          </h4>
                          
                          <ul className="text-muted-foreground leading-relaxed space-y-2">
                            {exp.description.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-accent mr-2 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Reveal>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
