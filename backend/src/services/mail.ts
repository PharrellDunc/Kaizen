import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendWelcomeEmail(
    
  email: string,
  name: string
  
) {
  await transporter.sendMail({
    from: `"Kaizen 🌱" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to Kaizen 🌱",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1>Welcome to Kaizen, ${name} 🌱</h1>

        <p>
          Thank you for trying out my app
        </p>

        <p>
        This application was developed as a means to help improve your wellbeing,
        perspective and daily habits through a japanese philosophy called 'kaizen'.
                </p>

        <p>
          Small incremental steps create large wins over time!
          Your journey starts today.
        </p>

        <p>
          — Pharrell CEO of Kaizen
        </p>
      </div>
    `,
  });
}

export async function sendLetterReadyEmail(
  email: string,
  name: string,
  title: string
) {
  await transporter.sendMail({
    from: `"Kaizen 🌱" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Its time for you to open your time capsule! ✉️",
    html: `
      <div style="
        font-family: Arial, sans-serif;
        line-height: 1.7;
        max-width: 600px;
        margin: auto;
      ">
        <h1 style="color: #6bd37d;">
          It's time, ${name} 🌱
        </h1>

        <p>
          A letter from the past awaits you...
        </p>

        <p>
          <strong>${title}</strong>
        </p>

        <p>
          I'm just as excited as you are!
        </p>

        <p>
          Open Kaizen, old you would love for you to see this.
        </p>

        <p>
          — Kaizen
        </p>
      </div>
    `,
  });
}