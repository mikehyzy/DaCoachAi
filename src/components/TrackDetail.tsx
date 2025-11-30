import { ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { ProgressBar } from './ProgressBar';
import { LessonCard } from './LessonCard';
import { LockedLessonCard } from './LockedLessonCard';

interface TrackDetailProps {
  onBack: () => void;
  onStartLesson: () => void;
}

export function TrackDetail({ onBack, onStartLesson }: TrackDetailProps) {
  const { currentTrack, setCurrentLesson } = useAppContext();

  if (!currentTrack) return null;

  const availableLessons = currentTrack.lessons.slice(0, 3);
  const lockedLessons = ['Long-term Vision Setting', 'Strategic Communication Skills'];

  return (
    <div 
      className="min-h-screen flex justify-center px-6 py-6 sm:px-4 sm:py-8"
      style={{ backgroundColor: '#F6F7F9' }}
    >
      <div 
        className="flex flex-col w-full"
        style={{ maxWidth: '600px' }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between"
          style={{ marginBottom: '32px' }}
        >
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
            }}
            title="Go back"
          >
            <ArrowLeft size={32} style={{ color: '#0B162A' }} strokeWidth={2} />
          </button>
          
          <h1 
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#0B162A',
            }}
          >
            Track Overview
          </h1>
          
          {/* Profile Avatar */}
          <div 
            className="flex items-center justify-center"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#E67E22',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            JD
          </div>
        </div>

        {/* Section 1: Track Title Block */}
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '12px',
              lineHeight: '1.2',
            }}
          >
            {currentTrack.name}
          </h2>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#0B162A',
              opacity: 0.7,
              lineHeight: '1.5',
            }}
          >
            {currentTrack.description}
          </p>
        </div>

        {/* Section 2: Progress Card */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
            marginBottom: '40px',
          }}
        >
          <div 
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#0B162A',
              opacity: 0.7,
              marginBottom: '12px',
            }}
          >
            Progress
          </div>
          
          <div
            style={{
              width: '100%',
              height: '10px',
              backgroundColor: '#D9D9D9',
              borderRadius: '5px',
              overflow: 'hidden',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: `${currentTrack.progress}%`,
                height: '100%',
                backgroundColor: '#E67E22',
                borderRadius: '5px',
                transition: 'width 0.5s ease',
              }}
            />
          </div>

          <div
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#0B162A',
              opacity: 0.7,
            }}
          >
            {currentTrack.progress}% complete
          </div>
        </div>

        {/* Section 3: Current Lessons */}
        <div style={{ marginBottom: '40px' }}>
          <h3 
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '16px',
            }}
          >
            Your Lessons
          </h3>
          
          <div
            className="flex flex-col"
            style={{ gap: '20px' }}
          >
            {availableLessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                onClick={() => {
                  setCurrentLesson(lesson);
                  onStartLesson();
                }}
              />
            ))}
          </div>
        </div>

        {/* Section 4: Upcoming Lessons */}
        <div style={{ marginBottom: '40px' }}>
          <h3 
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '16px',
            }}
          >
            Upcoming Lessons
          </h3>
          
          <div
            className="flex flex-col"
            style={{ gap: '16px' }}
          >
            {lockedLessons.map((lesson, index) => (
              <LockedLessonCard
                key={index}
                title={lesson}
              />
            ))}
          </div>
        </div>

        {/* Section 5: Action Button */}
        <button
          className="w-full transition-all"
          style={{
            height: '56px',
            backgroundColor: '#E67E22',
            borderRadius: '14px',
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#CA6118';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#E67E22';
          }}
          onClick={() => {
            const nextLesson = availableLessons.find(l => !l.completed) || availableLessons[0];
            setCurrentLesson(nextLesson);
            onStartLesson();
          }}
        >
          Start Next Lesson
        </button>
      </div>
    </div>
  );
}