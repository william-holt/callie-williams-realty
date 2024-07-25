
import { Resend } from 'resend';

import { EmailTemplate } from '@/components/email/ContactEmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any, res: any) {
  // const { title, post, email } = JSON.parse(req.body);
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev', 'wheat@likethebread.com'],
      subject: 'Contact Outreach',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
