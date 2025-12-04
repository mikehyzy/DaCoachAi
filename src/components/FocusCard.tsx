import { LucideIcon } from 'lucide-react';

interface FocusCardProps {
  icon?: LucideIcon;
  title: string;
  focusAreas: string[];
  onClick?: () => void;
}

export function FocusCard({ icon: Icon, title, focusAreas, onClick }: FocusCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col transition-all"
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        padding: '20px',
        boxShadow: '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)',
        border: 'none',
        cursor: onClick ? 'pointer' : 'default',
        textAlign: 'left',
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(11, 22, 42, 0.08), 0 2px 4px rgba(11, 22, 42, 0.04)';
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)';
        }
      }}
    >
      {Icon && (
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
      )}

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

      <div
        style={{
          fontSize: '14px',
          fontWeight: 400,
          color: '#0B162A',
          opacity: 0.7,
          lineHeight: '1.6',
        }}
      >
        {focusAreas.map((area, index) => (
          <div key={index} style={{ marginBottom: '4px' }}>
            • {area}
          </div>
        ))}
      </div>
    </button>
  );
}
