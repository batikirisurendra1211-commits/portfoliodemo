import React from 'react';
import { Sparkles, Terminal, Compass, Eye, Grid } from 'lucide-react';

export type SceneMode = 'editorial' | 'constellation' | 'terminal' | 'aurora' | 'grid';

interface SceneSwitcherProps {
  currentScene: SceneMode;
  onSelectScene: (scene: SceneMode) => void;
}

export const SceneSwitcher: React.FC<SceneSwitcherProps> = ({ currentScene, onSelectScene }) => {
  // Never render fixed overlapping bottom bars that collide with hero typography
  return null;
};
