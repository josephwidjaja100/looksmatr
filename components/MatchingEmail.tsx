import {
  Html,
  Container,
  Heading,
  Section,
  Text,
} from '@react-email/components';

type MatchingEmailProps = {
  name?: string;
  matchName?: string;
  matchYear?: string;
  matchMajor?: string;
  matchEthnicity?: string[];
  matchGender?: string;
  matchInstagram?: string;
  matchPhoto?: string;
  attractivenessDiff?: number;
};

export default function MatchingEmail({
  name = 'there',
  matchName = 'Alex',
  matchYear = 'Junior',
  matchMajor = 'Computer Science',
  matchEthnicity = ['Asian'],
  matchGender = 'Male',
  matchInstagram = 'alex_instagram',
  matchPhoto = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
  attractivenessDiff = 5,
}: MatchingEmailProps) {
  const diffOn10Scale = (attractivenessDiff / 10).toFixed(1);
  
  return (
    <Html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Merriweather, Georgia, "Times New Roman", serif' }}>
        
        {/* Header */}
        <Section style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Heading style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            color: '#1f2937',
            margin: '0 0 8px 0',
            fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
          }}>
            likely yours
          </Heading>
          <Text style={{
            fontSize: '16px',
            color: '#6b7280',
            margin: '0',
            fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
          }}>
            hey {name}, here's your match ♥︎
          </Text>
        </Section>

        {/* Main content card with photo and overlay */}
        <Section style={{
          backgroundColor: '#ffffff',
          border: '2px solid #e5e7eb',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '32px'
        }}>
          {/* Photo container with overlay */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '500px',
            backgroundImage: `url(${matchPhoto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            {/* Gradient fade overlay - Layer 1 (vertical fade) */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '100%',
              background: 'linear-gradient(to top, rgba(219, 234, 254, 0.95) 0%, rgba(219, 234, 254, 0.7) 20%, rgba(219, 234, 254, 0.3) 40%, transparent 60%)',
            }} />
            {/* Gradient fade overlay - Layer 2 (diagonal color transition) */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(219, 234, 254, 0.3) 0%, rgba(233, 213, 255, 0.3) 100%)',
            }} />
            
            {/* Content overlay at bottom */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              padding: '40px 32px 32px',
            }}>
              
              {/* Container for info and attractiveness box */}
              <div style={{
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}>
                {/* Left side: Match info */}
                <div style={{
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  {/* Match name */}
                  <Text style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: '0 0 12px 0',
                    fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
                  }}>
                    {matchName}
                  </Text>

                  {/* Match details */}
                  <Text style={{
                    fontSize: '16px',
                    color: '#374151',
                    margin: '0 0 8px 0',
                    fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
                  }}>
                    {matchEthnicity.join(', ')} • {matchGender}
                  </Text>

                  <Text style={{
                    fontSize: '16px',
                    color: '#374151',
                    margin: '0',
                    fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
                  }}>
                    {matchYear} • {matchMajor}
                  </Text>
                </div>

                {/* Right side: Attractiveness difference */}
                <div style={{
                  border: '2px solid #1f2937',
                  borderRadius: '12px',
                  padding: '16px',
                  marginLeft: '16px',
                  flexShrink: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{
                    fontSize: '11px',
                    color: '#1f2937',
                    margin: '0 0 8px 0',
                    fontFamily: 'Merriweather, Georgia, "Times New Roman", serif',
                    textAlign: 'center',
                    lineHeight: '1.3',
                  }}>
                    your attractiveness<br/>levels differ by
                  </Text>
                  <Text style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: '0',
                    fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
                  }}>
                    {diffOn10Scale}/10
                  </Text>
                </div>
              </div>

              {/* Instagram CTA */}
              <div style={{ textAlign: 'center' }}>
                <a
                  href={`https://instagram.com/${matchInstagram}`}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#1f2937',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    padding: '14px 32px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
                  }}
                >
                  say hi on instagram →
                </a>
                <Text style={{
                  fontSize: '13px',
                  color: '#374151',
                  margin: '12px 0 0 0',
                  fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
                }}>
                  @{matchInstagram}
                </Text>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <Section style={{ textAlign: 'center', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
          <Text style={{
            fontSize: '12px',
            color: '#9ca3af',
            margin: '0 0 8px 0',
            fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
          }}>
            good luck! 💫
          </Text>
          <Text style={{
            fontSize: '12px',
            color: '#9ca3af',
            margin: '0',
            fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
          }}>
            <a href="https://likely.one" style={{ color: '#9ca3af', textDecoration: 'none' }}>
              visit likely.one
            </a>
          </Text>
        </Section>
      </Container>
    </Html>
  );
}