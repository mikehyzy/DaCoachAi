import { ArrowLeft } from 'lucide-react';
import { DitkaLogoSmall } from './DitkaLogoSmall';

interface DashboardProps {
  onBack: () => void;
  onDailyReflection: () => void;
  onScenarioCreation: () => void;
}

export function Dashboard({ onBack, onDailyReflection, onScenarioCreation }: DashboardProps) {
  return (
    <div
      className="min-h-screen flex justify-center px-6 py-6 sm:px-4 sm:py-8"
      style={{ backgroundColor: '#F6F7F9' }}
    >
      <div
        className="flex flex-col w-full"
        style={{ maxWidth: '600px' }}
      >
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

          <div style={{ width: '32px', height: '32px' }} />
        </div>

        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h1
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '12px',
              lineHeight: '1.2',
            }}
          >
            DA COACH AI
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
            Choose your path to growth
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button
            onClick={onDailyReflection}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 22, 42, 0.08), 0 3px 6px rgba(11, 22, 42, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)';
            }}
          >
            <h2
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#0B162A',
                marginBottom: '8px',
              }}
            >
              Daily Reflection
            </h2>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: '#0B162A',
                opacity: 0.7,
                lineHeight: '1.5',
              }}
            >
              Capture your day and get tailored insights from DA COACH AI.
            </p>
          </button>

          <button
            onClick={onScenarioCreation}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 22, 42, 0.08), 0 3px 6px rgba(11, 22, 42, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)';
            }}
          >
            <h2
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#0B162A',
                marginBottom: '8px',
              }}
            >
              Scenario Creation
            </h2>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: '#0B162A',
                opacity: 0.7,
                lineHeight: '1.5',
              }}
            >
              Practice leadership, product, and communication scenarios.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
