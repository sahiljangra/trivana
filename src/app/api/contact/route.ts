import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message, phone, subject } = await req.json();

    if (!name || !email || !message || !phone || !subject) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "mail.trivanatextile.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // info@trivanatextile.com
        pass: process.env.SMTP_PASS
      },
      tls: { rejectUnauthorized: false }
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // YOUR domain email
      to: process.env.RECEIVER_EMAIL,
      // replyTo: email, // user email
      subject: `New Contact Form: ${subject}`,
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to send email', details: err.message }), { status: 500 });
  }
}
