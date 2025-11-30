import { Settings } from 'lucide-react';
import { DitkaLogoSmall } from './DitkaLogoSmall';
import { DonutChart } from './DonutChart';
import { MetricCard } from './MetricCard';

interface ProgressOverviewProps {
  onBack: () => void;
}

export function ProgressOverview({ onBack }: ProgressOverviewProps) {
  const metrics = [
    { label: 'Streak Days', value: '12' },
    { label: 'Tracks in Progress', value: '4' },
    { label: 'Weekly Sessions', value: '7' },
    { label: 'Skill Growth', value: '+18%' },
  ];

  const recentWins = [
    'Completed Strategic Decision Frameworks lesson',
    '3-day coaching streak achieved',
    'Energy score improved to 82%',
    'Unlocked next lesson in AI Mastery track',
    'Finished all focus tasks this week',
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
            }}
            title="Back to dashboard"
          >
            <DitkaLogoSmall />
          </button>
          
          <button
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title="Settings"
          >
            <Settings size={32} style={{ color: '#0B162A' }} strokeWidth={2} />
          </button>
        </div>

        {/* Section 1: Hero Progress Card */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
            marginBottom: '40px',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <h1 
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#0B162A',
                marginBottom: '12px',
              }}
            >
              My Progress
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
              A snapshot of your mastery journey.
            </p>
          </div>
          
          <div className="flex justify-center">
            <DonutChart percentage={67} />
          </div>
        </div>

        {/* Section 2: Metric Grid */}
        <div style={{ marginBottom: '40px' }}>
          <h2 
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '20px',
            }}
          >
            Key Metrics
          </h2>
          
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}
          >
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                label={metric.label}
                value={metric.value}
              />
            ))}
          </div>
        </div>

        {/* Section 3: Recent Wins */}
        <div style={{ marginBottom: '40px' }}>
          <h2 
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '16px',
            }}
          >
            Recent Wins
          </h2>
          
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)',
            }}
          >
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {recentWins.map((win, index) => (
                <li 
                  key={index}
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#0B162A',
                    lineHeight: '1.6',
                    marginBottom: index < recentWins.length - 1 ? '16px' : '0',
                  }}
                >
                  {win}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 4: Analytics CTA */}
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
        >
          View Detailed Analytics
        </button>
      </div>
    </div>
  );
}