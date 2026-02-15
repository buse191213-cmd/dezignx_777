import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const app = express();

// Security headers
app.use(helmet());

// JSON body limit (prod için iyi)
app.use(express.json({ limit: "20kb" }));

// CORS (sadece kendi domainlerin)
app.use(
  cors({
    origin: ["https://dezignx.de", "https://www.dezignx.de"],
    methods: ["POST"],
  })
);

// Rate limit (sadece contact endpoint’e)
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
});
app.use("/api/contact", limiter);

// ENV sanity check (opsiyonel ama çok önerilir)
for (const key of ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "MAIL_TO"]) {
  if (!process.env[key]) {
    console.error(`Missing env: ${key}`);
  }
}

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // 587 => STARTTLS
      requireTLS: true,
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

    return res.json({ ok: true });
  } catch (e) {
    console.error("MAIL ERROR:", e); // prod’da log kalsın
    return res.status(500).json({ ok: false, error: "Mail failed" });
  }
});

app.listen(3001, () => console.log("API running on http://localhost:3001"));
