'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import Reveal from '../animations/Reveal'
import Button from '../ui/Button'

export default function Contact() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/masud-rana', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/masudrana924/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:masud.cse.dev@gmail.com', label: 'Email' },
  ]


  const contactInfo = {
    email: 'masud.cse.dev@gmail.com',
    phone: '+8801757922258',
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,91,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,91,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Let's Build Something Together
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Have a project, product idea, or opportunity? Let's talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="primary" size="lg" href={`mailto:${contactInfo.email}`}>
                Contact Me
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="secondary" size="lg">
                Download CV
              </Button>
            </div>

            <div className="flex flex-col items-center space-y-4 pt-8">
              <div className="flex items-center justify-center space-x-8">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors duration-300 p-2 text-2xl"
                      aria-label={social.label}
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>
              <div className="text-center space-y-2 pt-4">
                <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  {contactInfo.email}
                </a>
                <p className="text-muted-foreground">
                  {contactInfo.phone}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
