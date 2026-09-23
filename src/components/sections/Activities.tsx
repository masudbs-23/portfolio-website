'use client'

import Reveal from '../animations/Reveal'
import StaggerContainer from '../animations/StaggerContainer'
import StaggerItem from '../animations/StaggerItem'
import Card from '../ui/Card'
import { activities, languages } from '../../data/experience'

export default function Activities() {
  return (
    <section id="activities" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Activities & Languages
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Extra-Curricular Activities */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Extra-Curricular Activities
              </h3>
            </Reveal>
            <StaggerContainer>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <StaggerItem key={activity.id}>
                    <Reveal delay={index * 0.1}>
                      <Card className="p-6 hover:border-accent/30 transition-colors duration-300">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {activity.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {activity.description}
                        </p>
                      </Card>
                    </Reveal>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

          {/* Languages */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Languages
              </h3>
            </Reveal>
            <StaggerContainer>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <StaggerItem key={language.name}>
                    <Reveal delay={index * 0.1}>
                      <Card className="p-6 hover:border-accent/30 transition-colors duration-300">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-foreground">
                            {language.name}
                          </h4>
                          <span className="text-accent font-medium">
                            {language.proficiency}
                          </span>
                        </div>
                      </Card>
                    </Reveal>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
