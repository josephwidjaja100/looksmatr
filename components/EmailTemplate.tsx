import {
  Html,
  Container,
  Heading,
  Section,
  Text,
} from '@react-email/components';

type OtpEmailProps = {
  email?: string;
  otpCode?: string;
};

export default function OtpEmail({ email = 'user@stanford.edu', otpCode = '652854' }: OtpEmailProps) {
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
            likely your code
          </Heading>
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
          <Text style={{
            fontSize: '16px',
            color: '#4b5563',
            margin: '0 0 24px 0',
            lineHeight: '1.5',
            fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
          }}>
            we received a request to verify your email address. enter this code to continue:
          </Text>

          {/* OTP Code */}
          <div style={{
            backgroundColor: '#f9fafb',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '24px',
            margin: '0 0 24px 0'
          }}>
            <Text style={{
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: '0',
              letterSpacing: '8px',
              fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
            }}>
              {otpCode}
            </Text>
          </div>

          <Text style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: '0',
            lineHeight: '1.5',
            fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
          }}>
            this code will expire in 10 minutes
          </Text>
        </Section>

        {/* Footer */}
        <Section style={{ textAlign: 'center', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
          <Text style={{
            fontSize: '12px',
            color: '#9ca3af',
            margin: '0 0 8px 0',
            fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
          }}>
            if you didn't request this code, you can safely ignore this email.
          </Text>
          <Text style={{
            fontSize: '12px',
            color: '#9ca3af',
            margin: '0',
            fontFamily: 'Merriweather, Georgia, "Times New Roman", serif'
          }}>
            sent to {email}
          </Text>
        </Section>
      </Container>
    </Html>
  );
}