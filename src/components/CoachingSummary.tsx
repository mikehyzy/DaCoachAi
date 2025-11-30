interface CoachingSummaryProps {
  onReturnToDashboard: () => void;
  onViewTracks: () => void;
}

export function CoachingSummary({ onReturnToDashboard, onViewTracks }: CoachingSummaryProps) {
  const highlights = [
    'Your strategic focus is aligned with your core strengths in analytical thinking',
    'Energy levels show consistent improvement over the past 3 days',
    'You\'re building momentum on decision-making frameworks'
  ];

  const nextSteps = [
    'Complete the "Strategic Decision Frameworks" lesson in your Strategy Track',
    'Review your progress dashboard to track weekly improvements',
    'Schedule 15 minutes tomorrow for your next coaching session'
  ];

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
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <h1 
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#0B162A',
            }}
          >
            Coaching Summary
          </h1>
        </div>

        {/* Section 1: Highlights Card */}
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
              fontSize: '14px',
              fontWeight: 500,
              color: '#E67E22',
              marginBottom: '16px',
            }}
          >
            Today's Highlights
          </div>
          
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            {highlights.map((highlight, index) => (
              <li 
                key={index}
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#0B162A',
                  lineHeight: '1.6',
                  marginBottom: index < highlights.length - 1 ? '12px' : '0',
                }}
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2: Next Steps */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
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
            Next Steps
          </h2>
          
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            {nextSteps.map((step, index) => (
              <li 
                key={index}
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#0B162A',
                  lineHeight: '1.6',
                  marginBottom: index < nextSteps.length - 1 ? '12px' : '0',
                }}
              >
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Actions */}
        <div className="flex flex-col items-center">
          <button
            onClick={onReturnToDashboard}
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
            Return to Daily Huddle
          </button>
          
          <button
            onClick={onViewTracks}
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
            View My Tracks
          </button>
        </div>
      </div>
    </div>
  );
}