const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Handle form submission
app.post('/submit', upload.single('pdfFile'), (req, res) => {
  const { name, email, phoneNumber } = req.body;
  const pdfFile = req.file;

  const mailOptions = {
    from: email,
    to: 'your-receiving-email@example.com', // The email address where you want to receive the form data
    subject: `Application from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}`,
    attachments: [
      {
        filename: pdfFile.originalname,
        path: pdfFile.path,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
    // Delete the file after sending the email
    fs.unlink(pdfFile.path, (err) => {
      if (err) console.error(err);
    });
    res.send({ success: true, message: 'Application sent successfully!' });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
