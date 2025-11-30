import { ChevronRight } from 'lucide-react';

interface LessonCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export function LessonCard({ title, description, onClick }: LessonCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full transition-all"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
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
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(11, 22, 42, 0.08), 0 2px 4px rgba(11, 22, 42, 0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)';
      }}
    >
      <div style={{ flex: 1 }}>
        <div 
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#0B162A',
            marginBottom: '8px',
          }}
        >
          {title}
        </div>
        <div 
          style={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#0B162A',
            opacity: 0.7,
            lineHeight: '1.5',
          }}
        >
          {description}
        </div>
      </div>
      
      <ChevronRight 
        size={24} 
        style={{ 
          color: '#0B162A',
          opacity: 0.5,
          flexShrink: 0,
          marginLeft: '16px',
        }} 
      />
    </button>
  );
}