import { DitkaLogoSmall } from './DitkaLogoSmall';
import { ChevronRight } from 'lucide-react';

interface RecommendedLesson {
  track: string;
  lesson: string;
}

interface TracksHubProps {
  onBack: () => void;
  onLessonSelect: (track: string, lesson: string) => void;
  onTrackSelect: (track: string) => void;
}

const recommendedLessonsData: RecommendedLesson[] = [
  {
    track: 'Communication',
    lesson: 'Difficult Conversations',
  },
  {
    track: 'Leadership',
    lesson: 'Team Alignment',
  },
  {
    track: 'Design',
    lesson: 'Prototyping',
  },
];

const allTracks = [
  'Strategy',
  'Consulting',
  'AI',
  'Design',
  'Behavioral Science',
  'Communication',
  'Leadership',
];

export function TracksHub({ onBack, onLessonSelect, onTrackSelect }: TracksHubProps) {
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
            onClick={onBack}
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

        {/* Title */}
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#0B162A',
            marginBottom: '40px',
          }}
        >
          Your Tracks
        </h1>

        {/* Recommended Lessons Section */}
        <div style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#0B162A',
              marginBottom: '20px',
            }}
          >
            Recommended Lessons
          </h2>

          <div
            className="flex flex-col"
            style={{ gap: '12px' }}
          >
            {recommendedLessonsData.map((item, index) => (
              <button
                key={index}
                onClick={() => onLessonSelect(item.track, item.lesson)}
                className="transition-all"
                style={{
                  width: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '20px',
                  boxShadow: '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(11, 22, 42, 0.08), 0 2px 4px rgba(11, 22, 42, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)';
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#0B162A',
                      marginBottom: '4px',
                    }}
                  >
                    {item.track}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#0B162A',
                      opacity: 0.7,
                    }}
                  >
                    {item.lesson}
                  </div>
                </div>
                <ChevronRight size={20} style={{ color: '#E67E22' }} />
              </button>
            ))}
          </div>
        </div>

        {/* All Skill Tracks Section */}
        <div>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#0B162A',
              marginBottom: '20px',
            }}
          >
            All Skill Tracks
          </h2>

          <div
            className="flex flex-col"
            style={{ gap: '12px' }}
          >
            {allTracks.map((track, index) => (
              <button
                key={index}
                onClick={() => onTrackSelect(track)}
                className="transition-all"
                style={{
                  width: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '20px',
                  boxShadow: '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(11, 22, 42, 0.08), 0 2px 4px rgba(11, 22, 42, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)';
                }}
              >
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#0B162A',
                  }}
                >
                  {track}
                </div>
                <ChevronRight size={20} style={{ color: '#E67E22' }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
