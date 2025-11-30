import { ArrowLeft } from 'lucide-react';
import { DitkaLogoSmall } from './DitkaLogoSmall';
import { DailyReflectionResults as ResultsType } from './DailyReflection';

interface DailyReflectionResultsProps {
  onBack: () => void;
  results: ResultsType;
}

function cleanOpenAIOutput(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^\s+|\s+$/g, '')
    .trim();
}

export function DailyReflectionResults({ onBack, results }: DailyReflectionResultsProps) {
  const cards = [
    { title: 'Summary', content: results.summary },
    { title: 'Emotional Pattern', content: results.emotional_pattern },
    { title: 'Communication Pattern', content: results.communication_pattern },
    { title: 'Biggest Opportunity', content: results.biggest_opportunity },
    { title: 'Micro Habit For Tomorrow', content: results.micro_habit_for_tomorrow },
    { title: 'Score Today', content: results.score_today },
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
            Your Daily Insights
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
            DA COACH AI has analyzed your day
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
              }}
            >
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#0B162A',
                  marginBottom: '12px',
                }}
              >
                {card.title}
              </h2>
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#0B162A',
                  opacity: 0.8,
                  lineHeight: '1.6',
                  whiteSpace: 'pre-line',
                }}
                dangerouslySetInnerHTML={{ __html: cleanOpenAIOutput(card.content) }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={onBack}
          style={{
            width: '100%',
            height: '56px',
            backgroundColor: '#E67E22',
            borderRadius: '14px',
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#CA6118';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#E67E22';
          }}
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}
