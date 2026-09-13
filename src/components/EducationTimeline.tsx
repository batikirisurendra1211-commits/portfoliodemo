import React, { useState } from 'react';
import { Award, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  const [showCertDetails, setShowCertDetails] = useState(false);

  return (
    <section id="education" className="relative min-h-[100dvh] w-full bg-[#ECEAE5] text-[#222222] py-16 sm:py-24 px-6 sm:px-14 flex flex-col justify-between border-b border-black/10 select-none">
      {/* 1. Top Section Chrome */}
      <div className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#666666] mb-8 sm:mb-12">
        <span className="font-bold text-[#222222] tracking-widest">[ 02 ] ACADEMIC JOURNEY &amp; CREDENTIALS</span>
        <span className="text-[#C87A3E] font-bold">HYDERABAD, INDIA</span>
      </div>

      {/* 2. Main Two-Column Editorial Layout (Image 3 Reference Style, Tightly Grouped) */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto py-4 sm:py-6">
        {/* Left Column: Solid Circular Graphic with Cutout Layered (Full Intact Shoulders) */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-start order-2 lg:order-1 relative">
          <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] flex items-end justify-center transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/assets/surendra_education_circle.png?v=3"
              alt="Surendra Education"
              className="relative z-10 w-full h-auto object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.12)] filter contrast-[1.04]"
            />
          </div>
        </div>

        {/* Right Column: Single Line MY EDUCATION Typography + Structured Timeline */}
        <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] tracking-tight leading-none uppercase text-[#111111]">
              MY <span className="text-[#C87A3E]">EDUCATION</span>
            </h2>
          </div>

          {/* Clean Editorial Education Entries */}
          <div className="space-y-5 max-w-xl">
            {/* Entry 1: Pentagon Coaching Center (Oct 2025 - July 2026) */}
            <div className="space-y-1.5 border-b border-black/10 pb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold text-base sm:text-lg text-[#111111] font-sans flex items-center gap-2">
                  <span>Pentagon Coaching Center, Bangalore</span>
                  <Award size={15} className="text-[#C87A3E]" />
                </h3>
                <span className="font-mono text-xs sm:text-sm text-[#C87A3E] font-bold">
                  (Oct 2025 – July 2026)
                </span>
              </div>
              <p className="text-[#444444] font-normal text-xs sm:text-sm leading-relaxed">
                Certified Java Full Stack Development. Intensive classroom bootcamp covering enterprise Java, OOP principles, RESTful microservice architectures, and relational SQL database modeling.
              </p>

              {/* Optional syllabus toggle */}
              <div className="pt-1">
                <button
                  onClick={() => setShowCertDetails(!showCertDetails)}
                  className="text-[11px] font-mono uppercase tracking-wider text-[#666666] hover:text-[#C87A3E] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {showCertDetails ? '− Hide Syllabus Details' : '+ View Syllabus Breakdown'}
                </button>

                {showCertDetails && (
                  <div className="mt-3 p-4 rounded-xl bg-white border border-black/10 shadow-sm space-y-1.5 text-xs font-mono text-[#444444]">
                    <p className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-[#C87A3E]" /> Core Java &amp; Object-Oriented System Architecture
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-[#C87A3E]" /> Relational Database Modeling (SQL, Joins, Triggers)
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-[#C87A3E]" /> REST API Architecture &amp; Client-Server Protocols
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Entry 2: B.Tech */}
            <div className="space-y-1.5 border-b border-black/10 pb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold text-base sm:text-lg text-[#111111] font-sans">
                  Siddhartha Institute of Engineering &amp; Technology
                </h3>
                <span className="font-mono text-xs sm:text-sm text-[#C87A3E] font-bold">
                  (2022 – 2025)
                </span>
              </div>
              <p className="text-[#444444] font-normal text-xs sm:text-sm leading-relaxed">
                B.Tech in Computer Science and Engineering · <strong className="text-[#111111] font-bold">65.45%</strong>. Hands-on specialization in Python backend engineering, SQL databases, and machine learning pipelines.
              </p>
            </div>

            {/* Entry 3: Diploma */}
            <div className="space-y-1.5 border-b border-black/10 pb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold text-base sm:text-lg text-[#111111] font-sans">
                  Government Polytechnic College, Vaddepally
                </h3>
                <span className="font-mono text-xs sm:text-sm text-[#C87A3E] font-bold">
                  (2019 – 2022)
                </span>
              </div>
              <p className="text-[#444444] font-normal text-xs sm:text-sm leading-relaxed">
                Diploma in Mechanical Engineering · <strong className="text-[#111111] font-bold">60.00%</strong>. Rigorous analytical mechanics, applied mathematics, and systematic engineering problem-solving.
              </p>
            </div>

            {/* Entry 4: Schooling (SSC) */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold text-base sm:text-lg text-[#111111] font-sans">
                  Zilla Parishad High School, Rajoli
                </h3>
                <span className="font-mono text-xs sm:text-sm text-[#C87A3E] font-bold">
                  (2018 – 2019)
                </span>
              </div>
              <p className="text-[#444444] font-normal text-xs sm:text-sm leading-relaxed">
                Secondary School Certificate (SSC) · <strong className="text-[#111111] font-bold">73.00%</strong>. Foundational high school education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Meta Row */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6 border-t border-black/10 text-[#666666] text-xs font-mono mt-8">
        <div className="flex flex-wrap items-center gap-6 sm:gap-10">
          <a href="https://sssilksarees.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#111111] font-bold hover:text-[#C87A3E] hover:underline">
            sssilksarees.vercel.app
          </a>
          <span>@batikirisurendra</span>
          <span className="hidden md:inline">Hyderabad, Telangana, India</span>
        </div>
        <div className="text-[#888888] text-[11px]">
          <span>Academic Milestones &amp; Credentials</span>
        </div>
      </div>
    </section>
  );
};
