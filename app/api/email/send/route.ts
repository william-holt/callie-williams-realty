import { Resend } from 'resend';

import { EmailTemplate } from '@/components/email/ContactEmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const bodyData = await req.json()
  try {
    const { data, error } = await resend.emails.send({
      from: 'Callie Williams Real Estate <callie@calliewilliamsrealestate.com>',
      to: ['delivered@resend.dev', 'clwilliams208@gmail.com'],
      subject: bodyData.subject + bodyData.firstName + ' ' + bodyData.lastName,
      react: EmailTemplate({ firstName: bodyData.firstName }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
