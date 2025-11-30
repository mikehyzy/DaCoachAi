export interface FocusItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  extendedContent?: string;
  completed: boolean;
}

export interface Track {
  id: string;
  name: string;
  description: string;
  progress: number;
  lessons: Lesson[];
}

export interface UserDay {
  availableMinutes: number;
  focusItems: FocusItem[];
  energyLevel: 'Low' | 'Medium' | 'High';
  energyPercentage: number;
}
