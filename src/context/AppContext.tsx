import { createContext, useContext, useState, ReactNode } from 'react';
import { FocusItem, Lesson, Track, UserDay } from '../types/types';

interface AppContextType {
  userDay: UserDay;
  currentTrack: Track | null;
  currentLesson: Lesson | null;
  toggleFocusItemComplete: (id: string) => void;
  markLessonComplete: (lessonId: string) => void;
  setCurrentLesson: (lesson: Lesson | null) => void;
  getSessionProgress: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialFocusItems: FocusItem[] = [
  {
    id: '1',
    title: 'Master Strategy',
    description: 'Complete strategic planning framework',
    completed: false,
  },
  {
    id: '2',
    title: 'AI Mastery',
    description: 'Study machine learning fundamentals',
    completed: false,
  },
  {
    id: '3',
    title: 'Product Leadership',
    description: 'Review team alignment session',
    completed: false,
  },
];

const initialLessons: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Strategic Decision Frameworks',
    description: 'Learn the mental models used by elite consultants.',
    content: `Strategic decision-making is the cornerstone of effective leadership. The best consultants and executives use proven mental models to evaluate complex situations and make high-impact choices consistently.

In this lesson, you'll learn three core frameworks: First Principles Thinking, which helps you break down problems to their fundamental truths. Second, the Eisenhower Matrix for prioritizing tasks based on urgency and importance. Third, the OODA Loop (Observe, Orient, Decide, Act) for rapid decision cycles in dynamic environments.

These frameworks are not theoretical—they're battle-tested tools used by top-tier strategists across industries. When you internalize these models, you'll approach decisions with clarity, speed, and confidence.

Practice applying each framework to a real challenge you're facing this week. Document your thinking process, and notice how structured approaches lead to better outcomes. Mastery comes from repeated application, not just understanding the concept.`,
    extendedContent: `Advanced Applications:

First Principles Thinking was famously used by Elon Musk to revolutionize the space industry. Instead of accepting the high cost of rockets as a given, he broke down the problem to its fundamentals: what are rockets made of, and what do those materials actually cost? This led to SpaceX's reusable rocket technology.

The Eisenhower Matrix helps you distinguish between urgent and important tasks. Many leaders fall into the trap of spending all their time on urgent but unimportant tasks. The key is to proactively invest time in important but not urgent activities—this is where strategic advantage is built.

The OODA Loop, developed by military strategist John Boyd, emphasizes speed of decision-making. In competitive environments, the person or organization that can complete their OODA cycle faster than their opponent gains a decisive advantage. This applies to business strategy, product development, and personal productivity.

Key Practice: This week, take one major decision you're facing and explicitly apply all three frameworks. Write down your analysis for each framework. You'll be surprised how much clarity emerges when you use structured thinking tools.`,
    completed: false,
  },
  {
    id: 'lesson-2',
    title: 'Competitive Analysis Methods',
    description: 'Master techniques for evaluating market landscapes.',
    content: `Understanding your competitive landscape is critical for strategic success. This lesson covers proven methodologies for analyzing competitors and identifying opportunities.`,
    extendedContent: `Deep dive into Porter's Five Forces, SWOT analysis, and competitive positioning maps. Learn how to identify market gaps and develop differentiation strategies that create sustainable competitive advantage.`,
    completed: false,
  },
  {
    id: 'lesson-3',
    title: 'Scenario Planning & Risk',
    description: 'Build strategies that anticipate future challenges.',
    content: `The future is uncertain, but scenario planning helps you prepare for multiple possible outcomes. Learn how to build robust strategies that perform well across different scenarios.`,
    extendedContent: `Master the art of identifying key uncertainties, building scenario matrices, and stress-testing strategies. Discover how leading organizations use scenario planning to navigate disruption and maintain strategic flexibility.`,
    completed: false,
  },
];

const initialTrack: Track = {
  id: 'track-1',
  name: 'Strategy Track',
  description: 'Develop elite strategic thinking through guided lessons.',
  progress: 0,
  lessons: initialLessons,
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [focusItems, setFocusItems] = useState<FocusItem[]>(initialFocusItems);
  const [track, setTrack] = useState<Track>(initialTrack);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  const userDay: UserDay = {
    availableMinutes: 120,
    focusItems,
    energyLevel: 'High',
    energyPercentage: 85,
  };

  const toggleFocusItemComplete = (id: string) => {
    setFocusItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const markLessonComplete = (lessonId: string) => {
    setTrack(prev => {
      const updatedLessons = prev.lessons.map(lesson =>
        lesson.id === lessonId ? { ...lesson, completed: true } : lesson
      );

      const completedCount = updatedLessons.filter(l => l.completed).length;
      const progress = Math.round((completedCount / updatedLessons.length) * 100);

      return {
        ...prev,
        lessons: updatedLessons,
        progress,
      };
    });
  };

  const getSessionProgress = () => {
    const completedCount = focusItems.filter(item => item.completed).length;
    const total = focusItems.length;
    if (total === 0) return 0;
    return Math.round((completedCount / total) * 100);
  };

  return (
    <AppContext.Provider
      value={{
        userDay,
        currentTrack: track,
        currentLesson,
        toggleFocusItemComplete,
        markLessonComplete,
        setCurrentLesson,
        getSessionProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
