import { useAppContext } from '../context/AppContext';
import { DitkaLogoSmall } from './DitkaLogoSmall';
import { EnergyGauge } from './EnergyGauge';
import { FocusCard } from './FocusCard';
import { Target, Cpu, TrendingUp, Clock } from 'lucide-react';

interface DailyHuddleProps {
  onLogoClick: () => void;
  onStartCoaching: () => void;
  onViewTracks: () => void;
  onViewProgress: () => void;
  onCreateScenario: () => void;
}

export function DailyHuddle({ onLogoClick, onStartCoaching, onViewTracks, onViewProgress, onCreateScenario }: DailyHuddleProps) {
  const { userDay } = useAppContext();
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
            onClick={onLogoClick}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
            title="Back to home"
          >
            <DitkaLogoSmall />
          </button>
          
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

        {/* Section 1: Today's Game Plan (Hero Card) */}
        <div 
          className="flex flex-col items-center"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
            marginBottom: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '20px',
            }}
          >
            Today's Game Plan
          </h1>

          <div style={{ marginBottom: '20px' }}>
            <EnergyGauge level={userDay.energyLevel} percentage={userDay.energyPercentage} isLoading={false} />
          </div>

          <div
            className="flex items-center justify-center"
            style={{
              marginBottom: '12px',
              gap: '8px',
            }}
          >
            <Clock size={18} style={{ color: '#E67E22' }} />
            <span
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#E67E22',
              }}
            >
              {userDay.availableMinutes} minutes available
            </span>
          </div>

          <p
            style={{
              fontSize: '16px',
              fontWeight: 400,
              color: '#0B162A',
              opacity: 0.7,
              textAlign: 'center',
              lineHeight: '1.5',
            }}
          >
            Your focus is tuned for peak performance today.
          </p>
        </div>

        {/* Section 2: Suggested Focus */}
        <div style={{ marginBottom: '40px' }}>
          <h2 
            style={{
              fontSize: '18px',
              fontWeight: 500,
              color: '#0B162A',
              opacity: 0.8,
              marginBottom: '16px',
            }}
          >
            Suggested Focus for Today
          </h2>
          
          <div 
            className="flex flex-col sm:flex-row justify-between"
            style={{ gap: '24px' }}
          >
            <FocusCard
              icon={Target}
              title="Strategy Training"
              description="Sharpen decision-making skills"
            />
            <FocusCard
              icon={Cpu}
              title="AI Mastery"
              description="Learn cutting-edge AI techniques"
            />
            <FocusCard
              icon={TrendingUp}
              title="Product Leadership"
              description="Lead teams with confidence"
            />
          </div>
        </div>

        {/* Section 3: Quick Actions */}
        <div>
          <h2 
            style={{
              fontSize: '18px',
              fontWeight: 500,
              color: '#0B162A',
              opacity: 0.8,
              marginBottom: '16px',
            }}
          >
            Quick Actions
          </h2>
          
          <div 
            className="flex flex-col"
            style={{ gap: '16px' }}
          >
            <button
              onClick={onStartCoaching}
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
              Start Coaching
            </button>

            <button
              onClick={onCreateScenario}
              className="w-full transition-all"
              style={{
                height: '56px',
                backgroundColor: '#C83803',
                borderRadius: '14px',
                color: '#FFFFFF',
                fontSize: '18px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A02F02';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C83803';
              }}
            >
              Create Practice Scenario
            </button>
            
            <div 
              className="flex items-center"
              style={{ gap: '16px' }}
            >
              <button
                onClick={onViewTracks}
                className="transition-all"
                style={{
                  flex: 1,
                  height: '56px',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #0B162A',
                  borderRadius: '14px',
                  color: '#0B162A',
                  fontSize: '16px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1A2A4A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#0B162A';
                }}
              >
                View My Tracks
              </button>
              
              <button
                onClick={onViewProgress}
                className="transition-all"
                style={{
                  flex: 1,
                  height: '56px',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #0B162A',
                  borderRadius: '14px',
                  color: '#0B162A',
                  fontSize: '16px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1A2A4A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#0B162A';
                }}
              >
                View Progress
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}