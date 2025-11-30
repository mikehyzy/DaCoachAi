import { useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { DitkaLogoSmall } from './DitkaLogoSmall';

interface ScenarioResponse {
  title: string;
  setting: string;
  participants: string[];
  scenario_challenge: string;
  context_background: string;
  difficulty: string;
  goal_for_user: string;
  success_criteria: string[];
}

interface ScenarioCreatorProps {
  onBack: () => void;
}

export function ScenarioCreator({ onBack }: ScenarioCreatorProps) {
  const [userRequest, setUserRequest] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [scenario, setScenario] = useState<ScenarioResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateScenario = async () => {
    if (!userRequest.trim()) {
      setError('Please enter a scenario description');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setScenario(null);

      const response = await fetch('https://cardscoutai.app.n8n.cloud/webhook/scenario-creation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          request: userRequest,
        }),
      });

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const data = await response.json();

      if (data.output && data.output.length > 0 && data.output[0].content && data.output[0].content.length > 0) {
        const scenarioData = JSON.parse(data.output[0].content[0].text);
        setScenario(scenarioData);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (err) {
      console.error('Failed to generate scenario:', err);
      setError('Unable to generate scenario. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center px-6 py-6 sm:px-4 sm:py-8"
      style={{ backgroundColor: '#F6F7F9' }}
    >
      <div
        className="flex flex-col w-full"
        style={{ maxWidth: '800px' }}
      >
        <div
          className="flex items-center justify-between"
          style={{ marginBottom: '32px' }}
        >
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
            }}
            title="Go back"
          >
            <ArrowLeft size={32} style={{ color: '#0B162A' }} strokeWidth={2} />
          </button>

          <div style={{ transform: 'scale(0.75)' }}>
            <DitkaLogoSmall />
          </div>

          <div style={{ width: '32px', height: '32px' }} />
        </div>

        <div className="text-center" style={{ marginBottom: '32px' }}>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#0B162A',
              marginBottom: '16px',
              lineHeight: '1.2',
            }}
          >
            Create a Practice Scenario
          </h1>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 400,
              color: '#0B162A',
              opacity: 0.7,
              lineHeight: '1.5',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Describe the type of communication scenario you want to practice. DA COACH AI will generate a realistic scenario for you.
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 4px 12px rgba(11, 22, 42, 0.06), 0 2px 4px rgba(11, 22, 42, 0.04)',
            marginBottom: '32px',
          }}
        >
          <textarea
            value={userRequest}
            onChange={(e) => setUserRequest(e.target.value)}
            placeholder="Example: Give me a moderate difficulty workplace scenario about clarifying scope with a client."
            style={{
              width: '100%',
              minHeight: '120px',
              padding: '16px',
              fontSize: '16px',
              fontWeight: 400,
              color: '#0B162A',
              backgroundColor: '#F6F7F9',
              border: '2px solid transparent',
              borderRadius: '12px',
              resize: 'vertical',
              fontFamily: 'inherit',
              lineHeight: '1.5',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#E87722';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
            }}
          />

          {error && (
            <p
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#C83803',
                marginTop: '12px',
              }}
            >
              {error}
            </p>
          )}

          <button
            onClick={handleGenerateScenario}
            disabled={isLoading}
            style={{
              width: '100%',
              height: '56px',
              backgroundColor: isLoading ? '#D1D5DB' : '#E87722',
              borderRadius: '14px',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: 700,
              marginTop: '24px',
              border: 'none',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#C86518';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#E87722';
              }
            }}
          >
            {isLoading && <Loader2 size={20} className="animate-spin" />}
            {isLoading ? 'Generating...' : 'Generate Scenario'}
          </button>
        </div>

        {scenario && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(11, 22, 42, 0.05)',
              }}
            >
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#E87722',
                  marginBottom: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Title
              </h3>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#0B162A',
                  lineHeight: '1.4',
                }}
              >
                {scenario.title}
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(11, 22, 42, 0.05)',
              }}
            >
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#E87722',
                  marginBottom: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Setting
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#0B162A',
                  lineHeight: '1.6',
                }}
              >
                {scenario.setting}
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(11, 22, 42, 0.05)',
              }}
            >
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#E87722',
                  marginBottom: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Participants
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {scenario.participants.map((participant, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#0B162A',
                      paddingLeft: '20px',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#E87722',
                      }}
                    >
                      •
                    </span>
                    {participant}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(11, 22, 42, 0.05)',
              }}
            >
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#E87722',
                  marginBottom: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Challenge
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#0B162A',
                  lineHeight: '1.6',
                }}
              >
                {scenario.scenario_challenge}
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(11, 22, 42, 0.05)',
              }}
            >
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#E87722',
                  marginBottom: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Background
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#0B162A',
                  lineHeight: '1.6',
                }}
              >
                {scenario.context_background}
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(11, 22, 42, 0.05)',
              }}
            >
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#E87722',
                  marginBottom: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Difficulty
              </h3>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#E87722',
                  backgroundColor: '#FFF7ED',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                }}
              >
                {scenario.difficulty}
              </span>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(11, 22, 42, 0.05)',
              }}
            >
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#E87722',
                  marginBottom: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Goal
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#0B162A',
                  lineHeight: '1.6',
                }}
              >
                {scenario.goal_for_user}
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(11, 22, 42, 0.05)',
              }}
            >
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#E87722',
                  marginBottom: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Success Criteria
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {scenario.success_criteria.map((criteria, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#0B162A',
                      paddingLeft: '28px',
                      position: 'relative',
                      lineHeight: '1.6',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#E87722',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: 700,
                        top: '2px',
                      }}
                    >
                      {index + 1}
                    </span>
                    {criteria}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
