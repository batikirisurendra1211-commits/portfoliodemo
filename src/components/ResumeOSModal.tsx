import React, { useState } from 'react';
import { X, Printer, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, EDUCATION_DATA, SKILLS_DATA } from '../data/portfolioData';

interface ResumeOSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeOSModal: React.FC<ResumeOSModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'skills' | 'education'>('profile');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#ECEAE5] border border-black/20 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[94vh] sm:max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-2 sm:my-4 text-[#222222]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* OS Window Header */}
        <div className="bg-[#DFDCD5] px-3.5 sm:px-6 py-2.5 sm:py-4 border-b border-black/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#E5534B] inline-block shrink-0" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#E5B54B] inline-block shrink-0" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#57AB5A] inline-block shrink-0" />
            <span className="ml-1.5 sm:ml-3 text-[11px] sm:text-xs font-mono text-[#444444] flex items-center gap-1.5 font-bold truncate">
              <FileText size={13} className="text-[#C87A3E] shrink-0" /> resume_os<span className="hidden sm:inline"> — surendra.batikiri</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="/assets/resume.pdf"
              download="Surendra_Batikiri_Resume.pdf"
              className="p-1.5 rounded-lg bg-white hover:bg-[#C87A3E] hover:text-white text-[#111111] transition-colors text-[11px] sm:text-xs font-mono flex items-center gap-1 px-2.5 sm:px-3 border border-black/10 shadow-sm"
              title="Download Original PDF"
            >
              <Download size={13} /> PDF
            </a>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-white hover:bg-[#C87A3E] hover:text-white text-[#111111] transition-colors border border-black/10 shadow-sm cursor-pointer hidden sm:inline-flex"
              title="Print Document"
            >
              <Printer size={15} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white hover:bg-[#C87A3E] hover:text-white text-[#111111] transition-colors border border-black/10 shadow-sm cursor-pointer"
              title="Close window"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#DFDCD5] px-3 sm:px-6 py-2 sm:py-2.5 border-b border-black/10 flex gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono overflow-x-auto">
          {[
            { id: 'profile', label: '01. SUMMARY & PROFILE' },
            { id: 'projects', label: '02. PROJECTS & REPOS' },
            { id: 'skills', label: '03. TECHNICAL SKILLS' },
            { id: 'education', label: '04. EDUCATION & CERTS' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#C87A3E] text-white font-bold shadow-sm'
                  : 'text-[#555555] hover:text-[#111111] hover:bg-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* OS Body Content */}
        <div className="p-4 sm:p-8 md:p-10 overflow-y-auto flex-1 text-[#333333] font-normal text-xs sm:text-sm space-y-5 sm:space-y-6 bg-[#ECEAE5]">
          {activeTab === 'profile' && (
            <div className="space-y-5 sm:space-y-6">
              <div className="border-b border-black/10 pb-5 sm:pb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-4">
                <div>
                  <h2 className="font-display font-black text-2xl sm:text-5xl uppercase tracking-[0.05em] text-[#111111]">{PERSONAL_INFO.name}</h2>
                  <p className="text-[11px] sm:text-xs font-mono text-[#666666] mt-1">
                    {PERSONAL_INFO.location} · {PERSONAL_INFO.phone} · {PERSONAL_INFO.email}
                  </p>
                </div>
                <a
                  href="https://sssilksarees.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#C87A3E] text-white font-mono text-xs font-bold shadow-sm flex items-center gap-1.5 w-fit"
                >
                  Live Store: sssilksarees.vercel.app ↗
                </a>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#C87A3E] font-bold mb-2">
                  // PROFESSIONAL SUMMARY
                </h3>
                <p className="leading-relaxed text-[#444444]">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#C87A3E] font-bold mb-2">
                  // CORE COMPETENCIES
                </h3>
                <p className="leading-relaxed text-xs font-mono text-[#333333] bg-white p-4 rounded-xl border border-black/10 shadow-sm">
                  Python Development | FastAPI | REST API Development | Backend Engineering | SQL &amp; Database Design | PostgreSQL / MySQL / Oracle | Machine Learning | AI Integration | Data Analysis | Problem Solving | Git &amp; GitHub | Agile Collaboration
                </p>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="font-sans font-bold text-lg text-[#111111]">{proj.title}</h4>
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#C87A3E] underline flex items-center gap-1 font-bold"
                      >
                        {proj.live} <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs font-mono text-[#C87A3E] font-bold">{proj.tech.join(' · ')}</p>
                  <p className="text-sm text-[#555555] leading-relaxed">{proj.short}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#C87A3E] font-bold mb-2">
                // TECHNICAL SKILLS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILLS_DATA.map((skill) => (
                  <div key={skill.name} className="p-4 bg-white rounded-xl border border-black/10 shadow-sm flex justify-between items-center">
                    <div>
                      <p className="font-bold font-sans text-[#111111] text-sm">{skill.name}</p>
                      <p className="text-[11px] text-[#666666] font-mono mt-0.5">{skill.desc}</p>
                    </div>
                    <span className="text-xs font-mono text-[#C87A3E] font-bold">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#C87A3E] font-bold mb-4">
                  // ACADEMIC MILESTONES
                </h3>
                <div className="space-y-4">
                  {EDUCATION_DATA.map((edu, i) => (
                    <div key={i} className="p-4 bg-white rounded-xl border border-black/10 shadow-sm flex justify-between items-start">
                      <div>
                        <h4 className="font-sans font-bold text-[#111111] text-base">{edu.title}</h4>
                        <p className="text-xs text-[#666666] mt-1">{edu.institution}</p>
                        <p className="text-xs font-mono text-[#C87A3E] mt-1 font-bold">Score: {edu.score}</p>
                      </div>
                      <span className="text-xs font-mono text-[#888888]">{edu.year}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#C87A3E] font-bold mb-4">
                  // PROFESSIONAL CERTIFICATION
                </h3>
                <div className="p-5 bg-white rounded-xl border border-black/10 shadow-sm space-y-2">
                  <h4 className="font-sans font-bold text-[#111111] text-lg">Java Full Stack Development</h4>
                  <p className="text-xs font-mono text-[#C87A3E] font-bold">Pentagon Coaching Center, Bangalore · 6-Month Bootcamp</p>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Core Java, SQL, HTML5, CSS3, REST API Fundamentals, OOP Architecture.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* OS Window Footer */}
        <div className="bg-[#DFDCD5] px-4 sm:px-6 py-2.5 sm:py-3 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs font-mono text-[#666666] text-center sm:text-left">
          <span>Surendra Batikiri &copy; 2026</span>
          <span className="text-[#C87A3E] font-bold">STATUS: OPEN FOR RECRUITMENT</span>
        </div>
      </div>
    </div>
  );
};
