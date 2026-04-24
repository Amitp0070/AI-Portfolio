import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import ContactEmail from '../src/emails/ContactEmail.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // 🧠 validate
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields required' });
        }

        // 📩 render email template
        const html = render(
            ContactEmail({ name, email, message })
        );

        // 📡 transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 🚀 send mail
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Contact from ${name}`,
            replyTo: email,
            html,
        });

        res.status(200).json({ success: true });

    } catch (err) {
        console.error('MAIL ERROR:', err);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(5000, () => {
    console.log('✅ Server running on http://localhost:5000');
});