export interface Project {
  id: string;
  idx: string;
  tag: string;
  title: string;
  short: string;
  tech: string[];
  live?: string;
  viz: 'browser' | 'pipeline' | 'emotion' | 'portfolio';
  metrics?: Record<string, string>;
  study: {
    overview: string;
    problem: string;
    arch: string;
    challenges: string[];
    learnings: string[];
  };
}

export interface Skill {
  name: string;
  category: 'all' | 'lang' | 'be' | 'fe' | 'db' | 'ai' | 'tools' | 'cloud';
  icon: string;
  desc: string;
  level?: number;
}

export interface MindStage {
  w: string;
  icon: string;
  sub: string;
  code: string;
  details: string;
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
  score: string;
}

export interface AchievementItem {
  title: string;
  icon: string;
  desc: string;
}

export interface AnalyticsSummary {
  total_views: number;
  unique_sessions: number;
  total_messages: number;
  unread_messages: number;
  connected_live: number;
  event_distribution: Array<{ event_type: string; count: number }>;
  recent_events: Array<{ id: number; event_type: string; path: string; meta: string; created_at: string }>;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  created_at: string;
  is_read: number;
}
