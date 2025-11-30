import { DitkaLogo } from './DitkaLogo';
import { FeatureCard } from './FeatureCard';
import { Target, TrendingUp, CheckCircle } from 'lucide-react';

interface OnboardingScreenProps {
  onGetStarted: () => void;
}

export function OnboardingScreen({ onGetStarted }: OnboardingScreenProps) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6 py-8 sm:px-4 sm:py-12"
      style={{ backgroundColor: '#F6F7F9' }}
    >
      <div 
        className="flex flex-col items-center w-full"
        style={{ maxWidth: '560px' }}
      >
        {/* Header - Logo */}
        <div className="flex justify-center" style={{ marginBottom: '24px' }}>
          <DitkaLogo />
        </div>

        {/* Title Block */}
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <h1 
            className="px-4"
            style={{
              fontSize: 'clamp(24px, 5vw, 32px)',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '12px',
              lineHeight: '1.2',
            }}
          >
            Welcome to DA COACH AI
          </h1>
          <p 
            className="px-4"
            style={{
              fontSize: 'clamp(16px, 3.5vw, 18px)',
              fontWeight: 500,
              color: '#0B162A',
              opacity: 0.7,
              lineHeight: '1.5',
            }}
          >
            Your daily strategy, coaching, and accountability partner.
          </p>
        </div>

        {/* Feature Cards Row */}
        <div 
          className="flex flex-col sm:flex-row justify-between w-full"
          style={{ 
            marginBottom: '40px',
            gap: '20px',
          }}
        >
          <FeatureCard
            icon={Target}
            title="Master Strategy"
            description="Personalized game plans to hit your biggest goals."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Level Up Skills"
            description="Build winning habits with expert coaching."
          />
          <FeatureCard
            icon={CheckCircle}
            title="Stay Accountable"
            description="Track progress and stay committed to success."
          />
        </div>

        {/* CTA Section */}
        <div className="w-full flex flex-col items-center">
          <button
            onClick={onGetStarted}
            className="w-full transition-all"
            style={{
              height: '56px',
              backgroundColor: '#E67E22',
              borderRadius: '14px',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: 700,
              marginBottom: '12px',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#CF6E1E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E67E22';
            }}
          >
            Get Started
          </button>
          
          <a
            href="#"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#0B162A',
              opacity: 0.7,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none';
            }}
          >
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
}