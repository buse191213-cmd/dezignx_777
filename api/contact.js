import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, company, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      requireTLS: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Dezignx Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Neue Anfrage: ${name}${company ? " – " + company : ""}`,
      text: `Name: ${name}\nE-Mail: ${email}\nFirma: ${company || "-"}\n\nNachricht:\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("MAIL ERROR:", e);
    return res.status(500).json({ ok: false, error: "Mail failed" });
  }
}
