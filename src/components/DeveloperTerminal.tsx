import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TermIcon, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface DeveloperTerminalProps {
  onOpenResume: () => void;
  onOpenAdmin: () => void;
}

interface LogEntry {
  command?: string;
  output: string | React.ReactNode;
  isError?: boolean;
}

export const DeveloperTerminal: React.FC<DeveloperTerminalProps> = ({
  onOpenResume,
  onOpenAdmin,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<LogEntry[]>([
    {
      output: (
        <div className="space-y-1 text-[#A0A0A0]">
          <p className="text-[#C87A3E] font-bold">Surendra Batikiri CLI [Version 3.0.0-stone]</p>
          <p>Type <span className="text-[#FFFFFF] font-bold underline">help</span> to view available system commands or click the hints below.</p>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response: React.ReactNode;
    let isError = false;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs text-[#A0A0A0]">
            <p className="text-[#C87A3E] font-bold">// COMMAND LIST:</p>
            <p><span className="text-[#C87A3E] font-bold w-24 inline-block">whoami</span> — Summary &amp; background of Surendra</p>
            <p><span className="text-[#C87A3E] font-bold w-24 inline-block">skills</span> — Technical proficiencies and frameworks</p>
            <p><span className="text-[#C87A3E] font-bold w-24 inline-block">projects</span> — Key production &amp; research systems</p>
            <p><span className="text-[#C87A3E] font-bold w-24 inline-block">education</span> — Degrees and full-stack bootcamps</p>
            <p><span className="text-[#C87A3E] font-bold w-24 inline-block">contact</span> — Reach out via email or phone</p>
            <p><span className="text-[#C87A3E] font-bold w-24 inline-block">stats</span> — Engineering telemetry &amp; deployments</p>
            <p><span className="text-[#C87A3E] font-bold w-24 inline-block">resume</span> — Open formatted interactive Resume OS</p>
            <p><span className="text-[#C87A3E] font-bold w-24 inline-block">admin</span> — Launch secure Admin portal</p>
            <p><span className="text-[#C87A3E] font-bold w-24 inline-block">curl health</span> — Query Python FastAPI live endpoint</p>
            <p><span className="text-[#C87A3E] font-bold w-24 inline-block">clear</span> — Reset terminal window</p>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="space-y-1 text-xs">
            <p className="text-[#FFFFFF] font-bold">{PERSONAL_INFO.name} — Hyderabad, India</p>
            <p className="text-[#A0A0A0]">Full Stack Developer &amp; Backend Engineer specializing in Python, FastAPI, and PostgreSQL.</p>
            <p className="text-[#C87A3E]">Status: Open to high-impact software and AI engineering roles.</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-1 text-xs text-[#A0A0A0]">
            <p><span className="text-[#C87A3E]">Languages:</span> Python, Core Java, C, SQL</p>
            <p><span className="text-[#C87A3E]">Backend:</span> FastAPI, REST APIs, Spring Boot Fundamentals</p>
            <p><span className="text-[#C87A3E]">Databases:</span> PostgreSQL (Live Production), MySQL, Oracle</p>
            <p><span className="text-[#C87A3E]">AI / ML:</span> Machine Learning, Deep Learning (AFFN), NLP, Feature Fusion</p>
            <p><span className="text-[#C87A3E]">DevOps:</span> Vercel (Live Deployment), Linux, Docker, Git / GitHub</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-xs text-[#A0A0A0]">
            <div>
              <p className="font-bold text-[#FFFFFF]">1. Sri Someshwara Silk Sarees (E-Commerce)</p>
              <p className="text-[#C87A3E]">Python · FastAPI · PostgreSQL · Vercel (Live at: sssilksarees.vercel.app)</p>
            </div>
            <div>
              <p className="font-bold text-[#FFFFFF]">2. Adaptive Feature Fusion Network (AFFN)</p>
              <p className="text-[#C87A3E]">Deep learning metro passenger flow prediction with spatial-temporal fusion.</p>
            </div>
            <div>
              <p className="font-bold text-[#FFFFFF]">3. Emotion-Based Music Recommendation</p>
              <p className="text-[#C87A3E]">Real-time NLP sentiment extraction to mood-driven playlists.</p>
            </div>
          </div>
        );
        break;

      case 'education':
        response = (
          <div className="space-y-1 text-xs text-[#A0A0A0]">
            <p>• <span className="text-[#FFFFFF] font-bold">B.Tech in CSE (2022–2025)</span> — Siddhartha Institute of Engineering &amp; Technology (65.45%)</p>
            <p>• <span className="text-[#FFFFFF] font-bold">Diploma in Mechanical (2022)</span> — Govt Polytechnic College, Vaddepally (60%)</p>
            <p>• <span className="text-[#FFFFFF] font-bold">Java Full Stack (6-Month Cert)</span> — Pentagon Coaching Center, Bangalore</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs text-[#A0A0A0]">
            <p>Email: <a href="mailto:batikirisurendra1211@gmail.com" className="text-[#C87A3E] underline">batikirisurendra1211@gmail.com</a></p>
            <p>Phone: <a href="tel:+918074053175" className="text-[#C87A3E] underline">+91 80740 53175</a></p>
            <p>Location: Hyderabad, India</p>
          </div>
        );
        break;

      case 'stats':
        response = (
          <div className="space-y-1 text-xs text-[#A0A0A0]">
            <p>Projects Built: <span className="text-[#C87A3E] font-bold">3+</span></p>
            <p>Technologies Mastered: <span className="text-[#C87A3E] font-bold">20+</span></p>
            <p>Production Deployments: <span className="text-[#C87A3E] font-bold">1 (Live on Vercel)</span></p>
            <p>Backend Engine: <span className="text-[#C87A3E] font-bold">FastAPI (Python 3.14)</span></p>
          </div>
        );
        break;

      case 'curl health':
      case 'curl':
      case 'api':
        response = (
          <div className="p-3 bg-[#111111] rounded-xl border border-white/10 text-xs font-mono text-[#C87A3E]">
            {`HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "healthy",
  "service": "Surendra Batikiri Enterprise API",
  "version": "1.0.0",
  "theme": "Warm Stone & Terracotta Editorial",
  "database": "Connected (SQLite/PostgreSQL Ready)",
  "cors": "Enabled (*)"
}`}
          </div>
        );
        break;

      case 'resume':
        response = <p className="text-[#C87A3E]">Opening interactive Resume OS modal...</p>;
        onOpenResume();
        break;

      case 'admin':
        response = <p className="text-[#C87A3E]">Opening secure Admin Dashboard...</p>;
        onOpenAdmin();
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        isError = true;
        response = (
          <p className="text-red-400 text-xs">
            Command not recognized: <span className="text-[#FFFFFF] font-bold">{cmd}</span>. Type <span className="underline text-[#C87A3E]">help</span> for assistance.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: response, isError }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <section id="terminal" className="py-24 sm:py-36 px-6 sm:px-14 max-w-7xl mx-auto border-t border-black/10">
      {/* Top Chrome */}
      <div className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#666666] mb-8 sm:mb-12">
        <span className="font-bold text-[#222222] tracking-widest">[ 06 ] DEVELOPER TERMINAL INTERFACE</span>
        <span className="text-[#C87A3E] font-bold">HYDERABAD, INDIA</span>
      </div>

      <div className="mb-14">
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] tracking-tight leading-none uppercase text-[#111111]">
          TALK TO MY <span className="text-[#C87A3E]">STACK</span>
        </h2>
        <p className="text-base text-[#555555] font-light mt-4 max-w-xl font-mono">
          An interactive shell grounded in real data. Run commands to query architectures, credentials, and API health.
        </p>
      </div>

      {/* Terminal Window Box */}
      <div className="rounded-3xl overflow-hidden font-mono border border-black/15 shadow-xl bg-[#181818]">
        {/* Terminal Header */}
        <div className="bg-[#111111] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E5534B] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#E5B54B] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#57AB5A] inline-block" />
            <span className="ml-3 text-xs text-[#A0A0A0] flex items-center gap-1.5">
              <TermIcon size={13} className="text-[#C87A3E]" /> surendra@portfolio: ~
            </span>
          </div>
          <span className="text-[10px] text-white/40 uppercase tracking-widest hidden sm:inline-block">
            zsh / bash interactive session
          </span>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-6 sm:p-8 min-h-[280px] max-h-[460px] overflow-y-auto space-y-4 text-xs sm:text-sm bg-[#181818] text-[#D0D0D0]">
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1.5">
              {entry.command && (
                <div className="flex items-center gap-2 text-[#A0A0A0]">
                  <span className="text-[#C87A3E] font-bold">$</span>
                  <span className="text-[#FFFFFF] font-semibold">{entry.command}</span>
                </div>
              )}
              <div className="pl-4">{entry.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="bg-[#111111] px-6 py-4 border-t border-white/10 flex items-center gap-3">
          <span className="text-[#C87A3E] font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'whoami', 'skills', 'projects', 'resume'..."
            className="flex-1 bg-transparent text-[#FFFFFF] placeholder:text-white/30 text-xs sm:text-sm font-mono focus:outline-none"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="p-2 rounded-xl bg-[#C87A3E] text-white hover:bg-[#A8602E] transition-colors cursor-pointer"
            aria-label="Submit command"
          >
            <CornerDownLeft size={14} />
          </button>
        </div>
      </div>

      {/* Quick Command Pills */}
      <div className="flex flex-wrap items-center gap-2 mt-5 text-xs font-mono">
        <span className="text-[#666666] font-bold">QUICK HINTS:</span>
        {['help', 'whoami', 'skills', 'projects', 'curl health', 'resume', 'admin', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-[#333333] hover:border-[#C87A3E] hover:text-[#C87A3E] shadow-sm transition-all cursor-pointer font-bold"
          >
            {cmd}
          </button>
        ))}
      </div>
    </section>
  );
};
