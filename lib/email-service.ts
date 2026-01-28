import { Resend } from 'resend';
import { sanitizeEmail } from '@/lib/auth-utils';

const resend = new Resend(process.env.RESEND_API_KEY);

const getOtpEmailHtml = (email: string, otpCode: string): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
</head>
<body>
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
    <div style="text-align: center; margin-bottom: 20px;">
      <h1 style="font-size: 32px; font-weight: bold; color: #1f2937; margin: 0 0 8px 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        likely your code
      </h1>
    </div>
    <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 40px; text-align: center; margin-bottom: 32px;">
      <p style="font-size: 16px; color: #4b5563; margin: 0 0 24px 0; line-height: 1.5; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        we received a request to verify your email address. enter this code to continue:
      </p>
      <div style="background-color: #f9fafb; border: 2px solid #e5e7eb; border-radius: 12px; padding: 24px; margin: 0 0 24px 0;">
        <p style="font-size: 40px; font-weight: bold; color: #1f2937; margin: 0; letter-spacing: 8px; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
          ${otpCode}
        </p>
      </div>
      <p style="font-size: 14px; color: #6b7280; margin: 0; line-height: 1.5; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        this code will expire in 10 minutes
      </p>
    </div>
    <div style="text-align: center; padding-top: 24px; border-top: 1px solid #e5e7eb;">
      <p style="font-size: 12px; color: #9ca3af; margin: 0 0 8px 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        if you didn't request this code, you can safely ignore this email.
      </p>
      <p style="font-size: 12px; color: #9ca3af; margin: 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        sent to ${email}
      </p>
    </div>
  </div>
</body>
</html>`;
};

const getMatchingEmailHtml = (data: {
  matchName: string;
  matchYear: string;
  matchMajor: string;
  matchEthnicity: string[];
  matchGender: string;
  matchInstagram: string;
  matchPhoto: string;
  attractivenessDiff: number;
}): string => {
  const diffOn10Scale = (data.attractivenessDiff / 10).toFixed(1);
  
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
  <style>
    @media only screen and (max-width: 600px) {
      .match-info-container {
        flex-direction: column !important;
      }
      .match-details {
        text-align: center !important;
        margin-bottom: 16px !important;
      }
      .attractiveness-box {
        margin-left: 0 !important;
        width: 100% !important;
      }
    }
  </style>
</head>
<body>
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
    <div style="text-align: center; margin-bottom: 20px;">
      <h1 style="font-size: 32px; font-weight: bold; color: #1f2937; margin: 0 0 8px 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        likely yours
      </h1>
      <p style="font-size: 16px; color: #6b7280; margin: 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        hey! here's your match ♥︎
      </p>
    </div>
    <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 40px; text-align: center; margin-bottom: 32px;">
      <div style="width: 100%; margin-bottom: 32px;">
        <img src="${data.matchPhoto}" alt="Match photo" style="width: 100%; height: auto; border-radius: 12px; display: block;" />
      </div>
      <div class="match-info-container" style="display: flex; align-items: stretch; justify-content: space-between; margin-bottom: 28px;">
        <div class="match-details" style="flex: 1; display: flex; flex-direction: column; justify-content: center; text-align: left;">
          <p style="font-size: 32px; font-weight: bold; color: #1f2937; margin: 0 0 12px 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
            ${data.matchName}
          </p>
          <p style="font-size: 16px; color: #374151; margin: 0 0 8px 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
            ${data.matchEthnicity.join(', ')} • ${data.matchGender}
          </p>
          <p style="font-size: 16px; color: #374151; margin: 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
            ${data.matchYear} • ${data.matchMajor}
          </p>
        </div>
        <div class="attractiveness-box" style="border: 2px solid #1f2937; border-radius: 12px; padding: 16px; margin-left: 16px; flex-shrink: 0; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <p style="font-size: 11px; color: #1f2937; margin: 0 0 8px 0; font-family: Merriweather, Georgia, 'Times New Roman', serif; text-align: center; line-height: 1.3;">
            your attractiveness<br/>levels differ by
          </p>
          <p style="font-size: 28px; font-weight: bold; color: #1f2937; margin: 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
            ${diffOn10Scale}/10
          </p>
        </div>
      </div>
      <div style="text-align: center;">
        <a href="https://instagram.com/${data.matchInstagram}" style="display: inline-block; background-color: #1f2937; color: #ffffff; font-size: 16px; font-weight: bold; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
          say hi on instagram →
        </a>
        <p style="font-size: 13px; color: #374151; margin: 12px 0 0 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
          @${data.matchInstagram}
        </p>
      </div>
    </div>
    <div style="text-align: center; padding-top: 24px; border-top: 1px solid #e5e7eb;">
      <p style="font-size: 12px; color: #9ca3af; margin: 0 0 8px 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        good luck! 💫
      </p>
      <p style="font-size: 12px; color: #9ca3af; margin: 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        <a href="https://likely.one" style="color: #9ca3af; text-decoration: none;">
          visit likely.one
        </a>
      </p>
    </div>
  </div>
</body>
</html>`;
};

const getNoMatchEmailHtml = (): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
</head>
<body>
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
    <div style="text-align: center; margin-bottom: 20px;">
      <h1 style="font-size: 32px; font-weight: bold; color: #1f2937; margin: 0 0 8px 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        not this time
      </h1>
      <p style="font-size: 16px; color: #6b7280; margin: 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        hey about your match...
      </p>
    </div>
    <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 40px; text-align: center; margin-bottom: 32px;">
      <p style="font-size: 18px; color: #1f2937; margin: 0 0 16px 0; line-height: 1.6; font-family: Merriweather, Georgia, 'Times New Roman', serif; font-weight: bold;">
        unfortunately, we couldn't find a match this round
      </p>
      <p style="font-size: 16px; color: #4b5563; margin: 0 0 24px 0; line-height: 1.6; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        we couldn't find anyone that fits your preferences <em>and</em> is as attractive as you.
      </p>
      <div style="background-color: #f9fafb; border: 2px solid #e5e7eb; border-radius: 12px; padding: 24px; margin: 0 0 24px 0;">
        <p style="font-size: 15px; color: #374151; margin: 0; line-height: 1.6; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
          don't worry! we've practically guaranteed you a match in the next round.
        </p>
      </div>
      <a href="https://likely.one/profile" style="display: inline-block; background-color: #1f2937; color: #ffffff; font-size: 16px; font-weight: bold; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        update profile →
      </a>
    </div>
    <div style="text-align: center; padding-top: 24px; border-top: 1px solid #e5e7eb;">
      <p style="font-size: 12px; color: #9ca3af; margin: 0 0 8px 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        better luck next time! 💫
      </p>
      <p style="font-size: 12px; color: #9ca3af; margin: 0; font-family: Merriweather, Georgia, 'Times New Roman', serif;">
        <a href="https://likely.one" style="color: #9ca3af; text-decoration: none;">
          visit likely.one
        </a>
      </p>
    </div>
  </div>
</body>
</html>`;
};

export const sendOTPEmail = async (email: string, otpCode: string, type: 'signup' | 'password-reset' = 'signup') => {
  const subject = type === 'signup' ? 'complete your likely account setup' : 'reset your password';
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'likely one <admin@likely.one>',
      to: [email],
      subject,
      html: getOtpEmailHtml(sanitizeEmail(email), otpCode),
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
};

export const sendMatchEmail = async (
  email: string,
  userName: string,
  matchData: {
    name: string;
    year: string;
    major: string;
    ethnicity: string[];
    gender: string;
    instagram: string;
    photo: string;
    attractivenessDiff: number;
  }
) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'likely one <admin@likely.one>',
      to: [email],
      subject: 'you have a new match! 💘',
      html: getMatchingEmailHtml({
        matchName: matchData.name,
        matchYear: matchData.year,
        matchMajor: matchData.major,
        matchEthnicity: matchData.ethnicity,
        matchGender: matchData.gender,
        matchInstagram: matchData.instagram,
        matchPhoto: matchData.photo,
        attractivenessDiff: matchData.attractivenessDiff,
      }),
    });

    if (error) {
      console.error('Error sending match email:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending match email:', error);
    return { success: false, error: 'Failed to send match email' };
  }
};

export const sendNoMatchEmail = async (email: string, userName: string = 'there') => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'likely one <admin@likely.one>',
      to: [email],
      subject: 'we got some bad news for you 😬',
      html: getNoMatchEmailHtml(),
    });

    if (error) {
      console.error('Error sending no match email:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending no match email:', error);
    return { success: false, error: 'Failed to send no match email' };
  }
};