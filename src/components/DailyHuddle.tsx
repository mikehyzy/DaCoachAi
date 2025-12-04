import { DitkaLogoSmall } from './DitkaLogoSmall';
import { FocusCard } from './FocusCard';

interface SuggestedFocus {
  skill: string;
  focus1: string;
  focus2: string;
  focus3: string;
  lesson: string;
}

interface DailyHuddleProps {
  onLogoClick: () => void;
  onViewTracks: () => void;
  onDrillSelect: (track: string, lesson: string) => void;
}

const suggestedFocusData: SuggestedFocus[] = [
  {
    skill: 'Communication',
    focus1: 'Active Listening',
    focus2: 'Clarifying Questions',
    focus3: 'Emotional Labeling',
    lesson: 'Active Listening',
  },
  {
    skill: 'Strategy',
    focus1: 'Competitive Analysis',
    focus2: 'Positioning',
    focus3: 'Tradeoff Discipline',
    lesson: 'Competitive Analysis',
  },
  {
    skill: 'AI',
    focus1: 'Prompt Structures',
    focus2: 'Model Choice',
    focus3: 'Evaluation Methods',
    lesson: 'Prompt Engineering',
  },
];

export function DailyHuddle({ onLogoClick, onViewTracks, onDrillSelect }: DailyHuddleProps) {
  return (
    <div
      className="min-h-screen flex justify-center px-6 py-6 sm:px-4 sm:py-8"
      style={{ backgroundColor: '#F6F7F9' }}
    >
      <div
        className="flex flex-col w-full"
        style={{ maxWidth: '800px' }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between"
          style={{ marginBottom: '40px' }}
        >
          <button
            onClick={onLogoClick}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
            title="Back to onboarding"
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

        {/* Title */}
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#0B162A',
            marginBottom: '12px',
            textAlign: 'center',
          }}
        >
          DA COACH AI
        </h1>

        {/* Subtitle */}
        <h2
          style={{
            fontSize: '18px',
            fontWeight: 500,
            color: '#0B162A',
            opacity: 0.7,
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          Your focus for today
        </h2>

        {/* Suggested Focus Cards */}
        <div
          className="flex flex-col sm:flex-row justify-between"
          style={{ gap: '20px', marginBottom: '40px' }}
        >
          {suggestedFocusData.map((item, index) => (
            <FocusCard
              key={index}
              title={item.skill}
              focusAreas={[item.focus1, item.focus2, item.focus3]}
              onClick={() => onDrillSelect(item.skill, item.lesson)}
            />
          ))}
        </div>

        {/* View My Tracks Button */}
        <button
          onClick={onViewTracks}
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
          View My Tracks
        </button>
      </div>
    </div>
  );
}
