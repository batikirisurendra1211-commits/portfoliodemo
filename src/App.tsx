import React, { useState, useEffect } from 'react';
import { EditorialHero } from './components/EditorialHero';
import { SceneConstellation } from './components/SceneConstellation';
import { SceneTerminalRain } from './components/SceneTerminalRain';
import { SceneAurora } from './components/SceneAurora';
import { SceneGrid } from './components/SceneGrid';
import { SceneSwitcher, SceneMode } from './components/SceneSwitcher';
import { IntroPreloader } from './components/IntroPreloader';
import { AboutSection } from './components/AboutSection';
import { EngineeringMind } from './components/EngineeringMind';
import { TechUniverse } from './components/TechUniverse';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { DeveloperTerminal } from './components/DeveloperTerminal';
import { EducationTimeline } from './components/EducationTimeline';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeOSModal } from './components/ResumeOSModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { PortfolioAssistant } from './components/PortfolioAssistant';

export const App: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [scene, setScene] = useState<SceneMode>('editorial');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Track initial page view via API
  useEffect(() => {
    try {
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'page_view',
          path: window.location.pathname,
          meta: 'Visitor initial landing'
        })
      }).catch(() => { });
    } catch (e) { }
  }, []);

  const handleSelectScene = (newScene: SceneMode) => {
    setScene(newScene);
    try {
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'hero_scene_switch',
          path: '/#hero',
          meta: `Switched scene to ${newScene}`
        })
      }).catch(() => { });
    } catch (e) { }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#ECEAE5] text-[#222222] font-hn selection:bg-[#C87A3E] selection:text-white relative">
      {/* Cinematic Boot Preloader */}
      {showPreloader && (
        <IntroPreloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Main Full-Viewport Hero Composition */}
      <div className="relative">
        {/* Dynamic Visual Scene Overlay if user chooses alternate hero scene */}
        {scene === 'constellation' && <SceneConstellation />}
        {scene === 'terminal' && <SceneTerminalRain />}
        {scene === 'aurora' && <SceneAurora />}
        {scene === 'grid' && <SceneGrid />}

        {/* The Exact Pixel-Faithful Editorial Hero */}
        <EditorialHero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAdmin={() => setIsAdminOpen(true)}
          onSelectSection={scrollToSection}
        />
      </div>

      {/* Hero Scene Switcher Controls */}
      <SceneSwitcher
        currentScene={scene}
        onSelectScene={handleSelectScene}
      />

      {/* Main Enterprise Sections */}
      <main>
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />
        <EducationTimeline />
        <ProjectsShowcase />
        <EngineeringMind />
        <TechUniverse />
        <DeveloperTerminal
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />
        <AchievementsSection />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Floating Resume OS Modal */}
      <ResumeOSModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Admin & Analytics Portal */}
      <AdminPortalModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* AI Assistant Chatbot */}
      <PortfolioAssistant />
    </div>
  );
};
