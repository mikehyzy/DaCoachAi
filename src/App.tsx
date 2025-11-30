import { useState } from 'react';
import { OnboardingScreen } from './components/OnboardingScreen';
import { DailyHuddle } from './components/DailyHuddle';
import { CoachingMoment } from './components/CoachingMoment';
import { TrackDetail } from './components/TrackDetail';
import { ProgressOverview } from './components/ProgressOverview';
import { CoachingSummary } from './components/CoachingSummary';
import { LessonPlayer } from './components/LessonPlayer';

type Screen = 'onboarding' | 'dashboard' | 'coaching' | 'track' | 'progress' | 'summary' | 'lesson';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');

  return (
    <>
      {currentScreen === 'onboarding' && (
        <OnboardingScreen onGetStarted={() => setCurrentScreen('dashboard')} />
      )}
      
      {currentScreen === 'dashboard' && (
        <DailyHuddle 
          onLogoClick={() => setCurrentScreen('onboarding')}
          onStartCoaching={() => setCurrentScreen('coaching')}
          onViewTracks={() => setCurrentScreen('track')}
          onViewProgress={() => setCurrentScreen('progress')}
        />
      )}
      
      {currentScreen === 'coaching' && (
        <CoachingMoment 
          onBack={() => setCurrentScreen('dashboard')}
          onNext={() => setCurrentScreen('summary')}
        />
      )}
      
      {currentScreen === 'track' && (
        <TrackDetail 
          onBack={() => setCurrentScreen('dashboard')}
          onStartLesson={() => setCurrentScreen('lesson')}
        />
      )}
      
      {currentScreen === 'progress' && (
        <ProgressOverview onBack={() => setCurrentScreen('dashboard')} />
      )}
      
      {currentScreen === 'summary' && (
        <CoachingSummary 
          onReturnToDashboard={() => setCurrentScreen('dashboard')}
          onViewTracks={() => setCurrentScreen('track')}
        />
      )}
      
      {currentScreen === 'lesson' && (
        <LessonPlayer 
          onBack={() => setCurrentScreen('track')}
          onComplete={() => setCurrentScreen('track')}
        />
      )}
    </>
  );
}