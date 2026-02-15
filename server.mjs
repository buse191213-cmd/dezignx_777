import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // 587 -> STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Dezignx Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Neue Anfrage: ${name}${company ? " – " + company : ""}`,
      text: `Name: ${name}\nE-Mail: ${email}\nFirma: ${company || "-"}\n\nNachricht:\n${message}`,
    });

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: "Mail failed" });
  }
});

app.listen(3001, () => console.log("API running on http://localhost:3001"));
