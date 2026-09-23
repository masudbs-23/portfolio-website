'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Reveal from '../animations/Reveal'
import StaggerContainer from '../animations/StaggerContainer'
import StaggerItem from '../animations/StaggerItem'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of products and platforms I've worked on.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </div>
        </Reveal>

        <StaggerContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <StaggerItem key={project.id}>
                <Card className="h-full overflow-hidden group border-border/50 hover:border-accent/30 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-56 bg-gradient-to-br from-card to-muted overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <div className="text-center p-6">
                        <div className="text-4xl sm:text-5xl font-bold text-accent mb-3">
                          {project.name.split(' ')[0].charAt(0)}
                        </div>
                        <p className="text-sm text-muted-foreground">Project Preview</p>
                      </div>
                    </motion.div>
                    
                    {/* Overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-accent/5" 
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-5">
                    {/* Category */}
                    <Badge variant="accent" className="text-xs font-medium">
                      {project.category}
                    </Badge>

                    {/* Name */}
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Contribution */}
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      {project.contribution}
                    </p>

                    {/* Period */}
                    <div className="text-xs text-accent font-medium">
                      {project.period}
                    </div>

                    {/* CTA Button */}
                    <Button variant="outline" size="sm" className="w-full group-hover:border-accent/50 group-hover:text-accent transition-all duration-300">
                      Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
