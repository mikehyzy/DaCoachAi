import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { DitkaLogoSmall } from './DitkaLogoSmall';
import { SkeletonLoader } from './SkeletonLoader';
import { ProgressBar } from './ProgressBar';

interface CoachingMomentProps {
  onBack: () => void;
  onNext: () => void;
}

export function CoachingMoment({ onBack, onNext }: CoachingMomentProps) {
  const { userDay, getSessionProgress, toggleFocusItemComplete } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const progress = getSessionProgress();

  useEffect(() => {
    // Simulate AI loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const coachingMessage = "Listen up. You've got the energy and the drive today. Don't waste it on distractions. Focus on mastering strategy first—that's your foundation. Build on that with AI skills, then lead with confidence. You're not here to play small. Execute with precision, stay accountable, and own your progress. Let's go.";

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
          
          <div style={{ transform: 'scale(0.75)' }}>
            <DitkaLogoSmall />
          </div>
          
          {/* Empty placeholder for symmetry */}
          <div style={{ width: '32px', height: '32px' }} />
        </div>

        {/* Section 1: Session Title */}
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <h1 
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '12px',
              lineHeight: '1.2',
            }}
          >
            Your Coaching Session
          </h1>
          <p 
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#0B162A',
              opacity: 0.7,
              lineHeight: '1.5',
            }}
          >
            Tailored guidance based on today's energy and focus.
          </p>
        </div>

        {/* Section 2: AI Coach Message Card */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
            marginBottom: '32px',
          }}
        >
          <div 
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#E67E22',
              marginBottom: '20px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            DA COACH AI
          </div>
          
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            <p 
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: '#0B162A',
                lineHeight: '1.6',
              }}
            >
              {coachingMessage}
            </p>
          )}
        </div>

        {/* Section 3: Focus for Today */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)',
            marginBottom: '32px',
          }}
        >
          <h2
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '16px',
            }}
          >
            Your Focus Today
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {userDay.focusItems.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleFocusItemComplete(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '12px',
                  backgroundColor: item.completed ? '#F0F9FF' : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!item.completed) {
                    e.currentTarget.style.backgroundColor = '#F6F7F9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.completed) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <CheckCircle
                  size={24}
                  style={{
                    color: item.completed ? '#10B981' : '#D1D5DB',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                  fill={item.completed ? '#10B981' : 'none'}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#0B162A',
                      marginBottom: '4px',
                      textDecoration: item.completed ? 'line-through' : 'none',
                      opacity: item.completed ? 0.6 : 1,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#0B162A',
                      opacity: item.completed ? 0.5 : 0.7,
                      lineHeight: '1.4',
                    }}
                  >
                    {item.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Section 4: Progress Bar */}
        <div style={{ marginBottom: '40px' }}>
          <ProgressBar percentage={progress} />
        </div>

        {/* Section 5: Actions */}
        <div className="flex flex-col items-center">
          <button
            className="w-full transition-all"
            style={{
              height: '56px',
              backgroundColor: '#E67E22',
              borderRadius: '14px',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: 700,
              marginBottom: '12px',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#CA6118';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E67E22';
            }}
            onClick={onNext}
          >
            Next
          </button>
          
          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: '14px',
              fontWeight: 500,
              color: '#0B162A',
              opacity: 0.7,
              cursor: 'pointer',
              padding: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none';
            }}
          >
            Save to Notebook
          </button>
        </div>
      </div>
    </div>
  );
}