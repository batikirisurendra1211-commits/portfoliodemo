import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Sliders, Music, X, Layers, Code, Play, Globe } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Demo state for Project 2: AFFN Passenger Flow
  const [spatialWeight, setSpatialWeight] = useState(65);
  const [temporalWeight, setTemporalWeight] = useState(35);

  // Demo state for Project 3: Emotion Music
  const [selectedMood, setSelectedMood] = useState<'HAPPY' | 'CALM' | 'ENERGETIC' | 'SAD' | 'FOCUSED'>('HAPPY');
  const [customMoodInput, setCustomMoodInput] = useState('');

  const moodData = {
    HAPPY: { genres: ['Pop', 'Dance', 'Upbeat Telugu / Bollywood'], tempo: '128 BPM', valence: '92%', energy: '86%' },
    CALM: { genres: ['Ambient', 'Classical', 'Instrumental Guitar'], tempo: '72 BPM', valence: '55%', energy: '18%' },
    ENERGETIC: { genres: ['EDM', 'Hard Rock', 'Trap Beats'], tempo: '140 BPM', valence: '78%', energy: '96%' },
    SAD: { genres: ['Acoustic', 'Melancholic Ballads', 'Lo-Fi Rain'], tempo: '68 BPM', valence: '24%', energy: '22%' },
    FOCUSED: { genres: ['Minimal Techno', 'Binaural Beats', 'Coding Lo-Fi'], tempo: '90 BPM', valence: '50%', energy: '34%' },
  };

  const handleCustomMoodDetect = (e: React.FormEvent) => {
    e.preventDefault();
    const text = customMoodInput.toLowerCase();
    if (text.includes('code') || text.includes('study') || text.includes('work')) setSelectedMood('FOCUSED');
    else if (text.includes('gym') || text.includes('run') || text.includes('party')) setSelectedMood('ENERGETIC');
    else if (text.includes('down') || text.includes('tired') || text.includes('sad')) setSelectedMood('SAD');
    else if (text.includes('relax') || text.includes('peace') || text.includes('chill')) setSelectedMood('CALM');
    else setSelectedMood('HAPPY');
  };

  return (
    <section id="projects" className="py-16 sm:py-36 px-4 sm:px-14 max-w-7xl mx-auto border-t border-black/10">
      {/* Top Chrome */}
      <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.25em] text-[#666666] mb-6 sm:mb-12">
        <span className="font-bold text-[#222222] tracking-wider sm:tracking-widest">[ 03 ] SELECTED PRODUCTION &amp; RESEARCH</span>
        <span className="text-[#C87A3E] font-bold">HYDERABAD, INDIA</span>
      </div>

      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] tracking-[0.05em] leading-none uppercase text-[#111111]">
          SELECTED <span className="text-[#C87A3E]">PROJECTS</span>
        </h2>
        <p className="text-xs sm:text-base text-[#555555] font-light mt-3 sm:mt-4 max-w-2xl font-mono">
          Full-stack production builds, deep learning feature fusion networks, and NLP recommender engines.
        </p>
      </div>

      <div className="space-y-10 sm:space-y-16">
        {/* Project 1: Sri Someshwara Silk Sarees */}
        <div className="bg-white border border-black/10 rounded-3xl p-5 sm:p-10 md:p-12 relative overflow-hidden group shadow-sm hover:border-[#C87A3E] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#C87A3E] text-white font-mono text-xs font-bold shadow-sm">
                  PROJECT 01
                </span>
                <span className="px-3 py-1 rounded-full bg-[#ECEAE5] text-[#333333] border border-black/10 font-mono text-xs font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C87A3E] animate-ping" />
                  LIVE ON VERCEL
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-[0.04em] leading-[0.9]">
                Sri Someshwara Silk Sarees
              </h3>

              <p className="text-xs sm:text-base text-[#555555] font-normal leading-relaxed">
                An independently designed, built, and deployed full-stack e-commerce web application for a silk sarees retail business. From PostgreSQL database schema modeling through FastAPI REST backend development to live production deployment on Vercel.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {PROJECTS_DATA[0].tech.map((t) => (
                  <span key={t} className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono rounded-full bg-[#ECEAE5] border border-black/10 text-[#333333] font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                <a
                  href="https://sssilksarees.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#111111] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#C87A3E] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  Visit Live Store <ExternalLink size={14} />
                </a>
                <button
                  onClick={() => setSelectedProject(PROJECTS_DATA[0])}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-black/20 text-[#111111] font-mono font-bold text-xs uppercase tracking-widest hover:border-[#C87A3E] hover:text-[#C87A3E] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Case Study <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Project Image */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-sm group-hover:border-[#C87A3E] transition-colors duration-500">
                <img
                  src="/assets/project_saree.jpg"
                  alt="Sri Someshwara Silk Sarees Web Application"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-[10px] sm:text-xs font-mono shadow-sm">
                  <span className="text-[#C87A3E] font-bold truncate max-w-full">LIVE: sssilksarees.vercel.app</span>
                  <span className="text-[#666666] text-[9px] sm:text-[10px]">FASTAPI · POSTGRESQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Adaptive Feature Fusion Network (AFFN) */}
        <div className="bg-white border border-black/10 rounded-3xl p-5 sm:p-10 md:p-12 relative overflow-hidden group shadow-sm hover:border-[#C87A3E] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#C87A3E] text-white font-mono text-xs font-bold shadow-sm">
                  PROJECT 02
                </span>
                <span className="px-3 py-1 rounded-full bg-[#ECEAE5] text-[#333333] border border-black/10 font-mono text-xs font-semibold">
                  DEEP LEARNING RESEARCH
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-[0.04em] leading-[0.9]">
                Adaptive Feature Fusion Network
              </h3>

              <p className="text-xs sm:text-base text-[#555555] font-normal leading-relaxed">
                End-to-end deep learning pipeline to predict metro passenger flow using an Adaptive Feature Fusion Network. Fuses spatial transit network topology with temporal rush-hour sequences to achieve superior Origin-Destination (OD) forecasting.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {PROJECTS_DATA[1].tech.map((t) => (
                  <span key={t} className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono rounded-full bg-[#ECEAE5] border border-black/10 text-[#333333] font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setSelectedProject(PROJECTS_DATA[1])}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#111111] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#C87A3E] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer w-full sm:w-auto"
                >
                  Architecture &amp; Metrics <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Generated Image & Interactive Slider */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-sm group-hover:border-[#C87A3E] transition-colors duration-500">
                <img
                  src="/assets/project_affn.jpg"
                  alt="AFFN Deep Learning Metro Transit Flow Pipeline"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Interactive AFFN Slider */}
              <div className="bg-[#F5F3EF] p-4 sm:p-5 rounded-2xl border border-black/10 space-y-3 sm:space-y-4 font-mono text-xs shadow-sm">
                <div className="flex items-center justify-between text-[#111111] font-bold text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1.5 text-[#C87A3E]"><Sliders size={14} /> LIVE ATTENTION GATE</span>
                  <span>PREDICTION: {Math.round(4200 + spatialWeight * 34 + temporalWeight * 28)} pass/hr</span>
                </div>

                <div>
                  <div className="flex justify-between text-[#666666] mb-1.5 text-[10px] sm:text-[11px]">
                    <span>Spatial Topology: <strong className="text-[#111111]">{spatialWeight}%</strong></span>
                    <span>Temporal Sequence: <strong className="text-[#111111]">{temporalWeight}%</strong></span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={spatialWeight}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setSpatialWeight(val);
                      setTemporalWeight(100 - val);
                    }}
                    className="w-full accent-[#C87A3E] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Emotion-Based Music Recommendation System */}
        <div className="bg-white border border-black/10 rounded-3xl p-5 sm:p-10 md:p-12 relative overflow-hidden group shadow-sm hover:border-[#C87A3E] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#C87A3E] text-white font-mono text-xs font-bold shadow-sm">
                  PROJECT 03
                </span>
                <span className="px-3 py-1 rounded-full bg-[#ECEAE5] text-[#333333] border border-black/10 font-mono text-xs font-semibold">
                  AI &amp; NLP SYSTEM
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-[0.04em] leading-[0.9]">
                Emotion-Based Music Recommender
              </h3>

              <p className="text-xs sm:text-base text-[#555555] font-normal leading-relaxed">
                Intelligent music recommendation pipeline that detects human emotion from input text and audio signals using machine learning classification, then maps identified moods into tailored musical genres and dynamic real-time playlists.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {PROJECTS_DATA[2].tech.map((t) => (
                  <span key={t} className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono rounded-full bg-[#ECEAE5] border border-black/10 text-[#333333] font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setSelectedProject(PROJECTS_DATA[2])}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#111111] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#C87A3E] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer w-full sm:w-auto"
                >
                  View Case Study <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Generated Image & Interactive Mood Buttons */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-sm group-hover:border-[#C87A3E] transition-colors duration-500">
                <img
                  src="/assets/project_music.jpg"
                  alt="Aura Emotion Music AI System"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Interactive Mood Engine */}
              <div className="bg-[#F5F3EF] p-4 sm:p-5 rounded-2xl border border-black/10 space-y-3 font-mono text-xs shadow-sm">
                <div className="flex items-center justify-between text-[#111111] font-bold text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1.5 text-[#C87A3E]"><Music size={14} /> REAL-TIME MOOD RADAR</span>
                  <span className="text-[#666666] text-[10px]">STATE: {selectedMood}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {(['HAPPY', 'CALM', 'ENERGETIC', 'SAD', 'FOCUSED'] as const).map((mood) => (
                    <button
                      key={mood}
                      onClick={() => setSelectedMood(mood)}
                      className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono transition-all cursor-pointer ${
                        selectedMood === mood
                          ? 'bg-[#C87A3E] text-white font-bold shadow-sm'
                          : 'bg-white text-[#555555] border border-black/10 hover:border-[#C87A3E] hover:text-[#111111]'
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>

                <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-[10px] sm:text-[11px]">
                  <span className="text-[#555555]">GENRES: {moodData[selectedMood].genres.join(', ')}</span>
                  <span className="text-[#C87A3E] font-bold">{moodData[selectedMood].tempo}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4: Surendra Batikiri 3D Editorial Portfolio & Developer OS */}
        <div className="bg-white border border-black/10 rounded-3xl p-5 sm:p-10 md:p-12 relative overflow-hidden group shadow-sm hover:border-[#C87A3E] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#C87A3E] text-white font-mono text-xs font-bold shadow-sm">
                  PROJECT 04
                </span>
                <span className="px-3 py-1 rounded-full bg-[#ECEAE5] text-[#333333] border border-black/10 font-mono text-xs font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#57AB5A] animate-ping" />
                  LIVE ON VERCEL
                </span>
                <span className="px-3 py-1 rounded-full bg-[#ECEAE5] text-[#666666] border border-black/10 font-mono text-xs font-semibold">
                  3D &amp; FULL STACK
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-[0.04em] leading-[0.9]">
                3D Editorial Portfolio &amp; Developer OS
              </h3>

              <p className="text-xs sm:text-base text-[#555555] font-normal leading-relaxed">
                An immersive developer operating system and interactive portfolio built with React 18, TypeScript, TailwindCSS, 4 dynamic WebGL shader modes, in-browser CLI terminal emulator, and a Python FastAPI backend deployed globally on Vercel.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {PROJECTS_DATA[3].tech.map((t) => (
                  <span key={t} className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono rounded-full bg-[#ECEAE5] border border-black/10 text-[#333333] font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                <a
                  href="https://portfoliodemo-pied.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#111111] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#C87A3E] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer w-full sm:w-auto"
                >
                  Visit Live Production <ExternalLink size={14} />
                </a>
                <button
                  onClick={() => setSelectedProject(PROJECTS_DATA[3])}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-black/20 text-[#111111] font-mono font-bold text-xs uppercase tracking-widest hover:border-[#C87A3E] hover:text-[#C87A3E] transition-colors flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  Case Study <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Portfolio Preview Card & Live Telemetry */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-sm group-hover:border-[#C87A3E] transition-colors duration-500">
                <img
                  src="/assets/project_portfolio.jpg"
                  alt="Surendra Batikiri 3D Portfolio and Developer OS"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-[10px] sm:text-xs font-mono shadow-sm">
                  <span className="text-[#C87A3E] font-bold truncate max-w-full">LIVE: portfoliodemo-pied.vercel.app</span>
                  <span className="text-[#666666] text-[9px] sm:text-[10px]">REACT 18 · FASTAPI</span>
                </div>
              </div>

              {/* Interactive Telemetry Box */}
              <div className="bg-[#F5F3EF] p-4 sm:p-5 rounded-2xl border border-black/10 space-y-3 font-mono text-xs shadow-sm">
                <div className="flex items-center justify-between text-[#111111] font-bold text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1.5 text-[#C87A3E]"><Globe size={14} /> GLOBAL EDGE TELEMETRY</span>
                  <span className="text-[#57AB5A] flex items-center gap-1.5 text-[10px] sm:text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#57AB5A] inline-block" /> 200 OK · HEALTHY
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[10px] sm:text-[11px]">
                  <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-black/5 text-center">
                    <span className="block text-[#888888] text-[9px] uppercase">Lighthouse</span>
                    <span className="font-bold text-[#111111]">99 / 100</span>
                  </div>
                  <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-black/5 text-center">
                    <span className="block text-[#888888] text-[9px] uppercase">Edge CDN</span>
                    <span className="font-bold text-[#C87A3E]">Vercel</span>
                  </div>
                  <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-black/5 text-center">
                    <span className="block text-[#888888] text-[9px] uppercase">3D Shaders</span>
                    <span className="font-bold text-[#111111]">4 Modes</span>
                  </div>
                  <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-black/5 text-center">
                    <span className="block text-[#888888] text-[9px] uppercase">Backend</span>
                    <span className="font-bold text-[#C87A3E]">Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#ECEAE5] border border-black/20 rounded-2xl sm:rounded-3xl max-w-3xl w-full p-5 sm:p-8 md:p-10 shadow-2xl relative my-4 sm:my-8 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start pb-5 sm:pb-6 border-b border-black/10">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#C87A3E] text-white font-mono text-xs font-bold inline-block mb-2 shadow-sm">
                  {selectedProject.tag}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#111111]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 sm:p-2.5 bg-white text-[#111111] rounded-xl border border-black/15 hover:bg-[#C87A3E] hover:text-white transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X size={18} />
              </button>
            </div>

            <div className="py-5 sm:py-6 space-y-5 sm:space-y-6 text-xs sm:text-sm text-[#444444] font-normal leading-relaxed font-sans">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#C87A3E] font-bold mb-2">
                  // PROJECT OVERVIEW
                </h4>
                <p>{selectedProject.study.overview}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#C87A3E] font-bold mb-2">
                  // PROBLEM SOLVED
                </h4>
                <p>{selectedProject.study.problem}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#C87A3E] font-bold mb-2">
                  // SYSTEM ARCHITECTURE
                </h4>
                <p className="font-mono text-xs bg-white p-3.5 sm:p-4 rounded-xl border border-black/10 text-[#111111] shadow-sm">
                  {selectedProject.study.arch}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#C87A3E] font-bold mb-2">
                  // KEY CHALLENGES &amp; LEARNINGS
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-xs font-mono text-[#555555]">
                  {selectedProject.study.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-5 sm:pt-6 border-t border-black/10 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
              {selectedProject.live ? (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#111111] text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#C87A3E] transition-colors shadow-sm"
                >
                  Visit Live Production <ExternalLink size={14} />
                </a>
              ) : (
                <span className="text-xs font-mono text-[#888888] text-center sm:text-left">
                  Model Engineered in Python &amp; PyTorch
                </span>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 rounded-full border border-black/20 text-[#111111] font-mono text-xs uppercase font-bold hover:bg-[#111111] hover:text-white transition-colors cursor-pointer text-center"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
