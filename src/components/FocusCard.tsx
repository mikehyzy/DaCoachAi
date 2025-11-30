import { LucideIcon } from 'lucide-react';

interface FocusCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FocusCard({ icon: Icon, title, description }: FocusCardProps) {
  return (
    <div 
      className="flex flex-col"
      style={{
        width: '180px',
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        padding: '20px',
        boxShadow: '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)',
      }}
    >
      <div 
        className="flex items-center justify-center"
        style={{
          width: '44px',
          height: '44px',
          marginBottom: '12px',
        }}
      >
        <Icon size={28} style={{ color: '#E67E22' }} strokeWidth={2.5} />
      </div>
      
      <h3 
        style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#0B162A',
          marginBottom: '12px',
          lineHeight: '1.3',
        }}
      >
        {title}
      </h3>
      
      <p 
        style={{
          fontSize: '14px',
          fontWeight: 400,
          color: '#0B162A',
          opacity: 0.7,
          lineHeight: '1.4',
        }}
      >
        {description}
      </p>
    </div>
  );
}
