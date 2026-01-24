import {
  Html,
  Container,
  Heading,
  Section,
  Text,
} from '@react-email/components';

type NoMatchEmailProps = {
  name?: string;
};

export default function NoMatchEmail({ 
  name = 'there' 
}: NoMatchEmailProps) {
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
            not this time
          </Heading>
          <Text style={{
            fontSize: '16px',
            color: '#6b7280',
            margin: '0',
            fontFamily: 'Georgia, "Times New Roman", serif'
          }}>
            hey {name}, about your match...
          </Text>
        </Section>

        {/* Main content card */}
        <Section style={{
          backgroundColor: '#ffffff',
          border: '2px solid #e5e7eb',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          {/* Main message */}
          <Text style={{
            fontSize: '18px',
            color: '#1f2937',
            margin: '0 0 16px 0',
            lineHeight: '1.6',
            fontFamily: 'Merriweather, Georgia, "Times New Roman", serif',
            fontWeight: 'bold'
          }}>
            unfortunately, we couldn't find a match this round
          </Text>

          {/* Explanation */}
          <Text style={{
            fontSize: '16px',
            color: '#4b5563',
            margin: '0 0 24px 0',
            lineHeight: '1.6',
            fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
          }}>
            we couldn't find anyone that fits your preferences <em>and</em> is within your attractiveness range.
          </Text>

          {/* Encouragement box */}
          <div style={{
            backgroundColor: '#f9fafb',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '24px',
            margin: '0 0 24px 0'
          }}>
            <Text style={{
              fontSize: '15px',
              color: '#374151',
              margin: '0',
              lineHeight: '1.6',
              fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
            }}>
              don't worry! we've practically guaranteed you a match in the next round.
            </Text>
          </div>

          {/* CTA Button */}
          <a
            href="https://likely.one"
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
            update preferences →
          </a>
        </Section>

        {/* Footer */}
        <Section style={{ textAlign: 'center', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
          <Text style={{
            fontSize: '12px',
            color: '#9ca3af',
            margin: '0 0 8px 0',
            fontFamily: 'Georgia, "Times New Roman", serif'
          }}>
            better luck next time! 💫
          </Text>
          <Text style={{
            fontSize: '12px',
            color: '#9ca3af',
            margin: '0',
            fontFamily: 'Georgia, "Times New Roman", serif'
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