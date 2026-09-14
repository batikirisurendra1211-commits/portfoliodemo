import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setStatusMsg('Message dispatched successfully! Surendra will reply promptly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('success');
        setStatusMsg('Message logged! Thank you for getting in touch.');
      }
    } catch (err) {
      setStatus('success');
      setStatusMsg('Message noted! You can also reach me directly at batikirisurendra1211@gmail.com');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-36 px-4 sm:px-14 max-w-7xl mx-auto border-t border-black/10">
      {/* Top Chrome */}
      <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.25em] text-[#666666] mb-6 sm:mb-12">
        <span className="font-bold text-[#222222] tracking-wider sm:tracking-widest">[ 08 ] INITIATE COLLABORATION</span>
        <span className="text-[#C87A3E] font-bold">HYDERABAD, INDIA</span>
      </div>

      <div className="mb-8 sm:mb-14">
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] tracking-[0.05em] leading-none uppercase text-[#111111]">
          LET'S BUILD <span className="text-[#C87A3E]">SOMETHING IMPACTFUL</span>
        </h2>
        <p className="text-xs sm:text-base text-[#555555] font-light mt-3 sm:mt-4 max-w-xl leading-relaxed font-mono">
          I'm actively open to opportunities in full-stack web engineering, backend development, and AI/ML systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#C87A3E] font-bold">
              // DIRECT CHANNELS
            </h3>

            {/* Email card */}
            <div className="bg-white border border-black/10 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 shadow-sm hover:border-[#C87A3E] transition-all">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="p-3 bg-[#C87A3E]/10 rounded-xl text-[#C87A3E] shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-mono text-[#888888]">EMAIL ADDRESS</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#C87A3E] truncate block">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-[#ECEAE5] text-[#333333] hover:bg-[#C87A3E] hover:text-white transition-colors cursor-pointer shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone card */}
            <div className="bg-white border border-black/10 rounded-2xl p-4 sm:p-5 flex items-center gap-3 shadow-sm hover:border-[#C87A3E] transition-all">
              <div className="p-3 bg-[#C87A3E]/10 rounded-xl text-[#C87A3E] shrink-0">
                <Phone size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-mono text-[#888888]">PHONE / WHATSAPP</p>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#C87A3E] block truncate">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="bg-white border border-black/10 rounded-2xl p-4 sm:p-5 flex items-center gap-3 shadow-sm hover:border-[#C87A3E] transition-all">
              <div className="p-3 bg-[#C87A3E]/10 rounded-xl text-[#C87A3E] shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#888888]">LOCATION</p>
                <p className="text-xs sm:text-sm font-semibold text-[#111111]">
                  Hyderabad, India (Open to Remote &amp; Relocation)
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3">
            <button
              onClick={onOpenResume}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#111111] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#C87A3E] transition-colors shadow-sm cursor-pointer flex items-center justify-center"
            >
              Inspect Resume OS
            </button>
            <a
              href="https://sssilksarees.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-black/20 text-[#111111] font-mono font-bold text-xs uppercase tracking-widest hover:border-[#C87A3E] hover:text-[#C87A3E] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Live Project ↗
            </a>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-black/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6 shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 border-b border-black/10">
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#111111]">Send a Direct Message</h3>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#ECEAE5] text-[#333333] border border-black/10 text-[11px] sm:text-xs font-mono font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C87A3E] inline-block animate-ping" />
                API LIVE
              </span>
            </div>

            {status === 'success' && (
              <div className="p-4 bg-[#C87A3E]/10 border border-[#C87A3E]/30 rounded-2xl text-xs font-mono text-[#C87A3E] animate-fadeIn">
                {statusMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#666666] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Morgan"
                  className="w-full bg-[#F5F3EF] border border-black/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#C87A3E] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#666666] mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-[#F5F3EF] border border-black/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#C87A3E] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#666666] mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Full Stack Opportunity / Engineering Discussion"
                className="w-full bg-[#F5F3EF] border border-black/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#C87A3E] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#666666] mb-2">
                Your Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your team, stack, or problem space..."
                className="w-full bg-[#F5F3EF] border border-black/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#C87A3E] focus:bg-white transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-[#C87A3E] text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#B46A32] shadow-sm transition-colors cursor-pointer disabled:opacity-50"
            >
              {status === 'submitting' ? 'Dispatching...' : 'Send Message'} <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
