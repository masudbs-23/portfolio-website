'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/masud-rana', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/masudrana924/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:masud.cse.dev@gmail.com', label: 'Email' },
  ]

  const contactInfo = {
    email: 'masud.cse.dev@gmail.com',
    phone: '+8801757922258',
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 lg:py-16 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Name and Role */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Md. Masud Rana
            </h3>
            <p className="text-muted-foreground text-sm">
              Software Engineer | Frontend Developer
            </p>
            <div className="mt-2 space-y-1">
              <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm">
                {contactInfo.email}
              </a>
              <p className="text-muted-foreground text-sm">
                {contactInfo.phone}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-xl"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            © {currentYear} Md. Masud Rana. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

