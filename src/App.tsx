import { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { OnboardingScreen } from './components/OnboardingScreen';
import { DailyHuddle } from './components/DailyHuddle';
import { TracksHub } from './components/TracksHub';
import { CoachingMoment } from './components/CoachingMoment';
import { TrackDetail } from './components/TrackDetail';
import { ProgressOverview } from './components/ProgressOverview';
import { CoachingSummary } from './components/CoachingSummary';
import { LessonPlayer } from './components/LessonPlayer';
import { ScenarioCreator } from './components/ScenarioCreator';
import { DailyReflection, DailyReflectionResults as DailyReflectionResultsType } from './components/DailyReflection';
import { DailyReflectionResults } from './components/DailyReflectionResults';

type Screen = 'onboarding' | 'dashboard' | 'tracksHub' | 'dailyReflection' | 'dailyReflectionResults' | 'coaching' | 'track' | 'progress' | 'summary' | 'lesson' | 'scenario';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [reflectionResults, setReflectionResults] = useState<DailyReflectionResultsType | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string>('');
  const [selectedLesson, setSelectedLesson] = useState<string>('');

  return (
    <AppProvider>
      {currentScreen === 'onboarding' && (
        <OnboardingScreen onGetStarted={() => setCurrentScreen('dashboard')} />
      )}

      {currentScreen === 'dashboard' && (
        <DailyHuddle
          onLogoClick={() => setCurrentScreen('onboarding')}
          onViewTracks={() => setCurrentScreen('tracksHub')}
          onDrillSelect={(track, lesson) => {
            setSelectedTrack(track);
            setSelectedLesson(lesson);
            setCurrentScreen('lesson');
          }}
        />
      )}

      {currentScreen === 'tracksHub' && (
        <TracksHub
          onBack={() => setCurrentScreen('dashboard')}
          onLessonSelect={(track, lesson) => {
            setSelectedTrack(track);
            setSelectedLesson(lesson);
            setCurrentScreen('lesson');
          }}
          onTrackSelect={(track) => {
            setSelectedTrack(track);
            setCurrentScreen('track');
          }}
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
          onBack={() => setCurrentScreen('tracksHub')}
          onStartLesson={() => setCurrentScreen('lesson')}
        />
      )}

      {currentScreen === 'progress' && (
        <ProgressOverview onBack={() => setCurrentScreen('dashboard')} />
      )}

      {currentScreen === 'summary' && (
        <CoachingSummary
          onReturnToDashboard={() => setCurrentScreen('dashboard')}
          onViewTracks={() => setCurrentScreen('tracksHub')}
        />
      )}

      {currentScreen === 'lesson' && (
        <LessonPlayer
          onBack={() => setCurrentScreen('tracksHub')}
          onComplete={() => setCurrentScreen('tracksHub')}
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