import { ArrowLeft } from 'lucide-react';

interface LessonPlayerProps {
  onBack: () => void;
  onComplete: () => void;
  lessonTitle?: string;
  lessonSubtext?: string;
}

export function LessonPlayer({ 
  onBack, 
  onComplete,
  lessonTitle = "Strategic Decision Frameworks",
  lessonSubtext = "Master the mental models used by elite consultants"
}: LessonPlayerProps) {
  
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
            {lessonTitle}
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
            {lessonSubtext}
          </p>
        </div>

        {/* Section 2: Content Card */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
            marginBottom: '40px',
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
            }}
          >
            <p style={{ marginBottom: '16px' }}>
              Strategic decision-making is the cornerstone of effective leadership. The best consultants and executives use proven mental models to evaluate complex situations and make high-impact choices consistently.
            </p>
            
            <p style={{ marginBottom: '16px' }}>
              In this lesson, you'll learn three core frameworks: First Principles Thinking, which helps you break down problems to their fundamental truths. Second, the Eisenhower Matrix for prioritizing tasks based on urgency and importance. Third, the OODA Loop (Observe, Orient, Decide, Act) for rapid decision cycles in dynamic environments.
            </p>
            
            <p style={{ marginBottom: '16px' }}>
              These frameworks are not theoretical—they're battle-tested tools used by top-tier strategists across industries. When you internalize these models, you'll approach decisions with clarity, speed, and confidence.
            </p>
            
            <p style={{ marginBottom: '0' }}>
              Practice applying each framework to a real challenge you're facing this week. Document your thinking process, and notice how structured approaches lead to better outcomes. Mastery comes from repeated application, not just understanding the concept.
            </p>
          </div>
        </div>

        {/* Section 3: Actions */}
        <div className="flex flex-col items-center">
          <button
            onClick={onComplete}
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