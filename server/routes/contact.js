import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, company, inquiryType, message } = req.body;

  if (!name || !email || !inquiryType || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // -----------------------------------------
    // 1️⃣ Email TO COMPANY (Your Boss)
    // -----------------------------------------
    const companyMail = {
      from: `"Website Inquiry" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: `New Inquiry: ${inquiryType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // -----------------------------------------
    // 2️⃣ Auto Reply Email TO USER
    // -----------------------------------------
    const userMail = {
      from: `"JIGISHA AGROFUSION" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <h2>Thank You, ${name}! 🙏</h2>
        <p>We have received your inquiry regarding:</p>
        <p><strong>${inquiryType}</strong></p>

        <p>
          Our team at <strong>JIGISHA AGROFUSION PVT LTD</strong> will get back to you 
          within the next <strong>24 hours</strong>.
        </p>

        <p>Here’s a copy of your message:</p>
        <blockquote style="border-left: 4px solid #4CAF50; padding-left: 10px; margin: 10px 0;">
          ${message}
        </blockquote>

        <p>
          If you have any urgent queries, feel free to reply directly to this email.
        </p>

        <br/>
        <p>Warm regards,<br/>
        <strong>JIGISHA AGROFUSION Team</strong></p>
      `,
    };

    // Send both emails
    await transporter.sendMail(companyMail);
    await transporter.sendMail(userMail);

    res.json({ success: true });
  } catch (err) {
    console.log("Mail Error:", err);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

export default router;
