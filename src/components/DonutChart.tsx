import { useEffect, useState } from 'react';

interface DonutChartProps {
  percentage: number;
}

export function DonutChart({ percentage }: DonutChartProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [percentage]);

  const size = 160;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div 
      className="flex items-center justify-center"
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        position: 'relative',
      }}
    >
      <svg 
        width={size} 
        height={size}
        style={{ 
          transform: 'rotate(-90deg)',
          position: 'absolute',
        }}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#D9D9D9"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E67E22"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 1s ease-in-out',
          }}
        />
      </svg>
      
      {/* Center text */}
      <div 
        className="flex flex-col items-center justify-center"
        style={{
          position: 'absolute',
          textAlign: 'center',
          maxWidth: '100px',
        }}
      >
        <div 
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#0B162A',
            opacity: 0.7,
            lineHeight: '1.4',
          }}
        >
          Overall Completion
        </div>
        <div 
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#0B162A',
            marginTop: '4px',
          }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
}
