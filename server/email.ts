import { Resend } from 'resend';
import type { BlogArticle, NewsletterSubscriber } from '@shared/schema';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key)) {
    throw new Error('Resend not connected');
  }
  return {
    apiKey: connectionSettings.settings.api_key, 
    fromEmail: connectionSettings.settings.from_email
  };
}

async function getResendClient() {
  const { apiKey, fromEmail } = await getCredentials();
  return {
    client: new Resend(apiKey),
    fromEmail
  };
}

export async function sendNewsletterToSubscribers(
  article: BlogArticle,
  subscribers: NewsletterSubscriber[]
): Promise<{ success: number; failed: number; errors: string[] }> {
  const results = { success: 0, failed: 0, errors: [] as string[] };
  
  if (subscribers.length === 0) {
    return results;
  }

  try {
    const { client, fromEmail } = await getResendClient();
    
    const siteUrl = process.env.REPLIT_DEV_DOMAIN 
      ? `https://${process.env.REPLIT_DEV_DOMAIN}`
      : 'https://secureflow.solutions';
    
    const articleUrl = `${siteUrl}/blog/${article.slug}`;
    
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0f; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0f; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #111118; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a24 0%, #0d0d12 100%); padding: 30px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">SECUREFLOW</h1>
              <p style="color: #888; margin: 8px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Excellence & Sécurité</p>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #888; font-size: 14px; margin: 0 0 20px;">Nouvel article publié / New article published</p>
              
              <h2 style="color: #ffffff; font-size: 24px; margin: 0 0 15px; line-height: 1.4;">${article.title}</h2>
              
              <p style="color: #aaa; font-size: 15px; line-height: 1.6; margin: 0 0 25px;">${article.excerpt}</p>
              
              ${article.imageUrl ? `
              <div style="margin-bottom: 25px; border-radius: 8px; overflow: hidden;">
                <img src="${article.imageUrl}" alt="${article.title}" style="width: 100%; height: auto; display: block;">
              </div>
              ` : ''}
              
              <a href="${articleUrl}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px;">
                Lire l'article / Read article →
              </a>
            </td>
          </tr>
          
          <tr>
            <td style="background-color: #0d0d12; padding: 25px 30px; border-top: 1px solid rgba(255,255,255,0.05);">
              <p style="color: #666; font-size: 12px; margin: 0; text-align: center;">
                © ${new Date().getFullYear()} SecureFlow International<br>
                <span style="color: #555;">Cotonou, Bénin • infosecureflowco@gmail.com</span>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    for (const subscriber of subscribers) {
      try {
        await client.emails.send({
          from: fromEmail,
          to: subscriber.email,
          subject: `📰 SecureFlow: ${article.title}`,
          html: emailHtml
        });
        results.success++;
        console.log(`Email sent successfully to: ${subscriber.email}`);
      } catch (err: any) {
        results.failed++;
        results.errors.push(`${subscriber.email}: ${err.message || 'Unknown error'}`);
        console.error(`Failed to send email to ${subscriber.email}:`, err);
      }
    }
    
  } catch (err: any) {
    console.error('Error initializing Resend client:', err);
    results.errors.push(`Resend initialization failed: ${err.message}`);
    results.failed = subscribers.length;
  }
  
  return results;
}
