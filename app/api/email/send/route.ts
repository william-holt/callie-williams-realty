import { Resend } from 'resend';

import { EmailTemplate } from '@/components/email/ContactEmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const bodyData = await req.json()
  try {
    let fromLine = 'Callie Williams Real Estate <callie@calliewilliamsrealestate.com>';
    if (bodyData.from) {
      fromLine = bodyData.from
    }
    const { data, error } = await resend.emails.send({
      from: fromLine,
      to: ['delivered@resend.dev', 'clwilliams208@gmail.com', 'wheat@likethebread.com'],
      subject: bodyData.subject + bodyData.firstName + ' ' + bodyData.lastName,
      react: EmailTemplate({ firstName: bodyData.firstName, lastName: bodyData.lastName, message: bodyData.message, email: bodyData.email, listing: bodyData.listing }),
      text: fromLine + ': ' + bodyData.subject + bodyData.firstName + ' ' + bodyData.lastName
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
