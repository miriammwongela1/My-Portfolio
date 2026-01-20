// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ 
    origin: process.env.CLIENT_URL, // allow your React app 
    methods: ["POST"], 
}));
app.use(bodyParser.json());

// Route to handle form submission
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter using .env values
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,      // e.g. smtp.gmail.com
    port: process.env.SMTP_PORT,      // e.g. 587
    secure: false,                    // use TLS/STARTTLS
    auth: {
      user: process.env.EMAIL_USER,   // your Gmail address
      pass: process.env.EMAIL_PASS,   // your Gmail app password
    },
  });

  try {
    await transporter.sendMail({
      from: email, // sender (user filling the form)
      to: process.env.EMAIL_USER, // your receiving email
      subject: `New message from ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
