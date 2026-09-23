'use client'

import { motion } from 'framer-motion'
import { PhoneCall, ArrowRight, ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat"
      aria-label="Hero Section"
    >
      {/* Light glass ambient overlay to enhance text readability over image */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/40 backdrop-brightness-95 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">

        {/* Top Live Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="self-start"
        >
          {/* <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/45 backdrop-blur-md border border-white/60 shadow-sm text-slate-900 font-extrabold text-[11px] sm:text-xs tracking-widest uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D1C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF4D1C]"></span>
            </span>
            <span>LIVE FROM DHAKA</span>
            <span className="opacity-40">——</span>
            <span className="text-slate-700">SOFTWARE ENGINEER #634512</span>
          </div> */}
        </motion.div>

        {/* Big Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="my-auto py-8 sm:py-12"
        >
          <h1 className="font-serif text-[4rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[9.5rem] xl:text-[11rem] font-black tracking-tight leading-[0.85] text-slate-950 select-none drop-shadow-sm">
            {/* Warm <br /> */}
            MD <span className="font-serif italic font-normal text-[#FF4D1C] tracking-normal">MASUD</span> <br />
            RANA<span className="text-[#FF4D1C] inline-block font-sans font-bold ml-0.5 sm:ml-1"></span>
            <br />

          </h1>
          <h2 className='mt-12 text-4xl font-medium text-slate-950'> Software Engineer</h2>
        </motion.div>

        {/* Bottom Bar Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pt-6 border-t border-slate-950/10"
        >
          {/* Bottom Left Bio Paragraph */}
          <div className="max-w-md sm:max-w-lg">
            <p className="text-slate-900 text-sm sm:text-base lg:text-lg font-semibold leading-relaxed drop-shadow-sm">
              I'm Masud — born in Bangladesh, software engineer building high-performance web applications, Fintech platforms, and digital products. Clean code delivered, boilers repaired... cookers fitted, CP12s issued the same day.
            </p>
          </div>

          {/* Bottom Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 self-start md:self-auto">
            {/* Primary Call Button */}
            <a
              href="tel:+8801757922258"
              className="inline-flex items-center gap-2.5 bg-slate-950 text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3.5 sm:py-4 rounded-full shadow-xl hover:bg-slate-800 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] group"
            >
              <PhoneCall className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Call +880 1757 922258</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Secondary Message Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md text-slate-950 font-bold text-xs sm:text-sm px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/70 shadow-md hover:bg-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] group"
            >
              <span>Message me</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
