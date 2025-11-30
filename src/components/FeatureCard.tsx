import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div 
      className="flex flex-col items-center text-center"
      style={{
        width: '168px',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(11, 22, 42, 0.06), 0 1px 2px rgba(11, 22, 42, 0.04)',
      }}
    >
      <div 
        className="flex items-center justify-center"
        style={{
          width: '48px',
          height: '48px',
          marginBottom: '12px',
        }}
      >
        <Icon size={32} style={{ color: '#E67E22' }} strokeWidth={2.5} />
      </div>
      
      <h3 
        style={{
          fontSize: '18px',
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
          lineHeight: '1.5',
        }}
      >
        {description}
      </p>
    </div>
  );
}
