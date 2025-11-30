import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { DitkaLogoSmall } from './DitkaLogoSmall';
import { SkeletonLoader } from './SkeletonLoader';

interface DailyReflectionProps {
  onBack: () => void;
  onAnalyzeComplete: (results: DailyReflectionResults) => void;
}

export interface DailyReflectionResults {
  summary: string;
  emotional_pattern: string;
  communication_pattern: string;
  biggest_opportunity: string;
  micro_habit_for_tomorrow: string;
  score_today: string;
}

export function DailyReflection({ onBack, onAnalyzeComplete }: DailyReflectionProps) {
  const [reflection, setReflection] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!reflection || reflection.trim().length === 0) {
      setError('Please enter a reflection before analyzing.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://cardscoutai.app.n8n.cloud/webhook/daily-reflection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: { reflection } })
      });

      if (!response.ok) {
        throw new Error("Webhook failed");
      }

      const result: DailyReflectionResults = await response.json();
      setIsLoading(false);
      onAnalyzeComplete(result);
    } catch (err) {
      setIsLoading(false);
      setError('Unable to generate insights. Try again in a moment.');
    }
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
            Daily Reflection
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
            Capture your day and get precise insights from DA COACH AI.
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
            marginBottom: '24px',
          }}
        >
          <label
            htmlFor="reflectionInput"
            style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 600,
              color: '#0B162A',
              marginBottom: '12px',
            }}
          >
            Describe your day
          </label>
          <textarea
            id="reflectionInput"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Write a short reflection about how your day went."
            disabled={isLoading}
            style={{
              width: '100%',
              minHeight: '200px',
              padding: '16px',
              fontSize: '16px',
              fontWeight: 400,
              color: '#0B162A',
              backgroundColor: '#F6F7F9',
              border: '2px solid transparent',
              borderRadius: '12px',
              resize: 'vertical',
              fontFamily: 'inherit',
              lineHeight: '1.6',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#E67E22';
              e.currentTarget.style.outline = 'none';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
            }}
          />

          {error && (
            <p
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#EF4444',
                marginTop: '12px',
              }}
            >
              {error}
            </p>
          )}
        </div>

        {isLoading && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
              marginBottom: '24px',
            }}
          >
            <p
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#E67E22',
                marginBottom: '16px',
                textAlign: 'center',
              }}
            >
              Processing your reflection. DA COACH is reviewing your performance.
            </p>
            <SkeletonLoader />
          </div>
        )}

        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          style={{
            width: '100%',
            height: '56px',
            backgroundColor: isLoading ? '#D1D5DB' : '#E67E22',
            borderRadius: '14px',
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 700,
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = '#CA6118';
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = '#E67E22';
            }
          }}
        >
          {isLoading ? 'Analyzing...' : 'Analyze Reflection'}
        </button>
      </div>
    </div>
  );
}
