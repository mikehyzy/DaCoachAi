import { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { OnboardingScreen } from './components/OnboardingScreen';
import { DailyHuddle } from './components/DailyHuddle';
import { CoachingMoment } from './components/CoachingMoment';
import { TrackDetail } from './components/TrackDetail';
import { ProgressOverview } from './components/ProgressOverview';
import { CoachingSummary } from './components/CoachingSummary';
import { LessonPlayer } from './components/LessonPlayer';
import { ScenarioCreator } from './components/ScenarioCreator';
import { DailyReflection, DailyReflectionResults as DailyReflectionResultsType } from './components/DailyReflection';
import { DailyReflectionResults } from './components/DailyReflectionResults';

type Screen = 'onboarding' | 'dashboard' | 'dailyReflection' | 'dailyReflectionResults' | 'coaching' | 'track' | 'progress' | 'summary' | 'lesson' | 'scenario';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [reflectionResults, setReflectionResults] = useState<DailyReflectionResultsType | null>(null);

  return (
    <AppProvider>
      {currentScreen === 'onboarding' && (
        <OnboardingScreen onGetStarted={() => setCurrentScreen('dashboard')} />
      )}

      {currentScreen === 'dashboard' && (
        <DailyHuddle
          onLogoClick={() => setCurrentScreen('onboarding')}
          onStartCoaching={() => setCurrentScreen('coaching')}
          onViewTracks={() => setCurrentScreen('track')}
          onViewProgress={() => setCurrentScreen('progress')}
          onCreateScenario={() => setCurrentScreen('scenario')}
          onDailyReflection={() => setCurrentScreen('dailyReflection')}
        />
      )}

      {currentScreen === 'dailyReflection' && (
        <DailyReflection
          onBack={() => setCurrentScreen('dashboard')}
          onAnalyzeComplete={(results) => {
            setReflectionResults(results);
            setCurrentScreen('dailyReflectionResults');
          }}
        />
      )}

      {currentScreen === 'dailyReflectionResults' && reflectionResults && (
        <DailyReflectionResults
          onBack={() => setCurrentScreen('dashboard')}
          results={reflectionResults}
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

      {currentScreen === 'scenario' && (
        <ScenarioCreator
          onBack={() => setCurrentScreen('dashboard')}
        />
      )}
    </AppProvider>
  );
}