import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface LessonPlayerProps {
  onBack: () => void;
  onComplete: () => void;
}

export function LessonPlayer({ onBack, onComplete }: LessonPlayerProps) {
  const { currentLesson, markLessonComplete } = useAppContext();
  const [showExtendedContent, setShowExtendedContent] = useState(false);

  if (!currentLesson) {
    return null;
  }

  const handleComplete = () => {
    markLessonComplete(currentLesson.id);
    onComplete();
  };

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
          className="flex items-center justify-center"
          style={{ 
            marginBottom: '32px',
            position: 'relative',
          }}
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
              position: 'absolute',
              left: 0,
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
            Lesson Player
          </h1>
        </div>

        {/* Section 1: Lesson Title Block */}
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '12px',
              lineHeight: '1.2',
            }}
          >
            {currentLesson.title}
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
            {currentLesson.description}
          </p>
        </div>

        {/* Section 2: Content Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
            marginBottom: '20px',
          }}
        >
          <h3
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '20px',
            }}
          >
            Lesson Content
          </h3>

          <div
            style={{
              fontSize: '16px',
              fontWeight: 400,
              color: '#0B162A',
              lineHeight: '1.7',
              whiteSpace: 'pre-line',
            }}
          >
            {currentLesson.content}
          </div>

          {currentLesson.extendedContent && (
            <>
              {showExtendedContent && (
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#0B162A',
                    lineHeight: '1.7',
                    whiteSpace: 'pre-line',
                    marginTop: '20px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(11, 22, 42, 0.1)',
                  }}
                >
                  {currentLesson.extendedContent}
                </div>
              )}

              <button
                onClick={() => setShowExtendedContent(!showExtendedContent)}
                className="w-full transition-all"
                style={{
                  marginTop: '20px',
                  padding: '12px 20px',
                  backgroundColor: '#F6F7F9',
                  border: '1px solid rgba(11, 22, 42, 0.1)',
                  borderRadius: '12px',
                  color: '#E67E22',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EDEEF0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F6F7F9';
                }}
              >
                {showExtendedContent ? (
                  <>
                    Show Less
                    <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    Learn More
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </>
          )}
        </div>

        {/* Section 3: Actions */}
        <div className="flex flex-col items-center">
          <button
            onClick={handleComplete}
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
              marginBottom: '20px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#CA6118';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E67E22';
            }}
          >
            Mark as Complete
          </button>
          
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 500,
              color: '#0B162A',
              opacity: 0.7,
              textDecoration: 'none',
              padding: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
          >
            Back to Track Overview
          </button>
        </div>
      </div>
    </div>
  );
}