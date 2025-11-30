interface MetricCardProps {
  label: string;
  value: string;
}

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div
      className="transition-all"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 22, 42, 0.08), 0 3px 6px rgba(11, 22, 42, 0.04)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(11, 22, 42, 0.05), 0 1px 2px rgba(11, 22, 42, 0.03)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div 
        style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#0B162A',
          opacity: 0.7,
          marginBottom: '8px',
        }}
      >
        {label}
      </div>
      <div 
        style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#0B162A',
        }}
      >
        {value}
      </div>
    </div>
  );
}
