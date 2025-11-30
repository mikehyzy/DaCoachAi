interface ProgressBarProps {
  percentage: number;
  label?: string;
}

export function ProgressBar({ percentage, label = 'Session Progress' }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div 
        style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#0B162A',
          opacity: 0.6,
          marginBottom: '8px',
        }}
      >
        {label}
      </div>
      
      <div 
        style={{
          width: '100%',
          height: '8px',
          backgroundColor: '#D9D9D9',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <div 
          style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: '#E67E22',
            borderRadius: '4px',
            transition: 'width 0.5s ease',
          }}
        />
      </div>
    </div>
  );
}
