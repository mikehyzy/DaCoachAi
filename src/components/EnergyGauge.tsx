interface EnergyGaugeProps {
  level: 'High' | 'Medium' | 'Low';
  percentage: number;
  isLoading?: boolean;
}

export function EnergyGauge({ level, percentage, isLoading = false }: EnergyGaugeProps) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  if (isLoading) {
    return (
      <div 
        className="flex items-center justify-center"
        style={{ width: '140px', height: '140px' }}
      >
        <div
          className="animate-spin"
          style={{
            width: '48px',
            height: '48px',
            border: '4px solid #F6F7F9',
            borderTopColor: '#E67E22',
            borderRadius: '50%',
          }}
        />
      </div>
    );
  }

  return (
    <div 
      className="flex items-center justify-center relative"
      style={{ width: '140px', height: '140px' }}
    >
      {/* Background circle */}
      <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#F6F7F9"
          strokeWidth="12"
        />
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#E67E22"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      
      {/* Center text */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <div 
          style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#0B162A',
            lineHeight: '1',
            marginBottom: '4px',
          }}
        >
          {percentage}%
        </div>
        <div 
          style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#0B162A',
            opacity: 0.7,
          }}
        >
          {level}
        </div>
      </div>
    </div>
  );
}
