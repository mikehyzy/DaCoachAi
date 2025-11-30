import { Lock } from 'lucide-react';

interface LockedLessonCardProps {
  title: string;
}

export function LockedLessonCard({ title }: LockedLessonCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#F6F7F9',
        borderRadius: '16px',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div 
        style={{
          fontSize: '16px',
          fontWeight: 500,
          color: '#0B162A',
          opacity: 0.6,
        }}
      >
        {title}
      </div>
      
      <Lock 
        size={20} 
        style={{ 
          color: '#0B162A',
          opacity: 0.4,
          flexShrink: 0,
        }} 
      />
    </div>
  );
}
