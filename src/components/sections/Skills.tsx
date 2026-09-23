'use client'

import Reveal from '../animations/Reveal'
import StaggerContainer from '../animations/StaggerContainer'
import StaggerItem from '../animations/StaggerItem'
import Badge from '../ui/Badge'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Tech Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </div>
        </Reveal>

        <StaggerContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((category, categoryIndex) => (
              <StaggerItem key={category.category}>
                <Reveal delay={categoryIndex * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 lg:p-8 space-y-6 hover:border-accent/30 transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.category}
                    </h3>
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="group">
                          <Badge variant="default" className="hover:bg-accent/20 transition-colors duration-300 cursor-default mb-1">
                            {skill.name}
                          </Badge>
                          <p className="text-xs text-muted-foreground pl-1">
                            {skill.experience}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
