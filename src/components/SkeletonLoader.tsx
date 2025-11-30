export function SkeletonLoader() {
  return (
    <div className="flex flex-col gap-3">
      <div 
        className="shimmer"
        style={{
          width: '100%',
          height: '20px',
          backgroundColor: '#E0E0E0',
          opacity: 0.4,
          borderRadius: '4px',
        }}
      />
      <div 
        className="shimmer"
        style={{
          width: '80%',
          height: '20px',
          backgroundColor: '#E0E0E0',
          opacity: 0.4,
          borderRadius: '4px',
        }}
      />
      <div 
        className="shimmer"
        style={{
          width: '60%',
          height: '20px',
          backgroundColor: '#E0E0E0',
          opacity: 0.4,
          borderRadius: '4px',
        }}
      />
      
      <style>{`
        @keyframes shimmer {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.4;
          }
        }
        
        .shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
