const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors());
const nodemailer = require('nodemailer')
const {EMAIL,PASSWORD} =require('./env')

const http = require('http').Server(app);
//const StudentForm = require('./studentModel')

const mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://eternaltek:eternaltek@eternaltek-db.fwggvdc.mongodb.net/eternaltek-website-db?retryWrites=true&w=majority');

/*
app.post('/api/students', async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, phoneNo, course } = req.body;
        const newStudent = new StudentForm({ name, email, phoneNo, course });
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);

        //sendMail(req.body,res);
        
    } catch (error) {
        console.log("error is", error);
        res.status(500).json({ message: 'Failed to save student data', error: error.message });
    }
});

*/


app.post('/api/send-email', async (req, res) => {

    const { name, email, phoneNo, course } = req.body;
    console.log(name);
    

 
   
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL,
          pass: PASSWORD
        }
      });
      
      var mailOptions = {
        from: EMAIL,
        to: EMAIL,
        subject: `${name} wants to inquire about ${course}`,
    html: `
        <html>
            <head>
                <style>
                    /* Add your CSS styles here */
                    body {
                        font-family: Arial, sans-serif;
                        padding: 0;
                        margin: 0;
                    }
                    .bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #f4f4f4;
                        z-index: -1;
                    }
                    .container {
                        position: relative;
                        z-index: 1;
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #f0f0f0; /* Change this color */
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    .info {
                        margin-top: 20px;
                        font-size: 16px;
                        color: #555;
                    }
                    .highlight {
                        font-size: 24px;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="bg"></div>
                <div class="container">
                    <h1>Course Inquiry</h1>
                    <p>Hi, Vamsi</p>
                    <p><span class="highlight">${name}</span> wants to inquire about ${course}</p>
                    <div class="info">
                        <p>Contact them at:</p>
                        <p>Email: ${email}</p>
                        <p>Phone: ${phoneNo}</p>
                    </div>
                </div>
            </body>
        </html>
    `
};



const confirmationMailOptions = {
    from: EMAIL,
    to: email, // Email of the form filler for the confirmation
    subject: 'Confirmation: We received your inquiry',
    html: `
        <html>
            <head>
                <style>
                    /* Add your CSS styles here */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #555;
                        font-size: 16px;
                    }
                    .highlight {
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Hi, ${name}!</h1>
                    <p>Thanks for contacting Eternaltek.</p>
                    <p>We appreciate your interest in the <span class="highlight">${course}</span> course.</p>
                    <p>Our team will get back to you soon.</p>
                </div>
            </body>
        </html>
    `
};
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    })

    transporter.sendMail(confirmationMailOptions, function(error, confirmationInfo) {
        if (error) {
            console.log('Error sending confirmation email:', error);
        } else {
            console.log('Confirmation email sent:', confirmationInfo.response);
        }
    });


})

//For Sending Buisnessrelated Inquiry Email
app.post('/api/send-inquiry-email', async (req, res) => {

    const { name, email, phoneNo, message } = req.body;
    console.log(name);
    

 
   
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL,
          pass: PASSWORD
        }
      });
      
      var mailOptions = {
        from: EMAIL,
        to: EMAIL,
        subject: `${name} wants to inquire`,
    html: `
        <html>
            <head>
                <style>
                    /* Add your CSS styles here */
                    body {
                        font-family: Arial, sans-serif;
                        padding: 0;
                        margin: 0;
                    }
                    .bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #f4f4f4;
                        z-index: -1;
                    }
                    .container {
                        position: relative;
                        z-index: 1;
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #f0f0f0; /* Change this color */
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    .info {
                        margin-top: 20px;
                        font-size: 16px;
                        color: #555;
                    }
                    .highlight {
                        font-size: 24px;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="bg"></div>
                <div class="container">
                    <h1>Course Inquiry</h1>
                    <p>Hi, Vamsi</p>
                    <p><span class="highlight">${name}</span> wants to have some Information</p>
                    <div class="info">
                        <p>Contact them at:</p>
                        <p>Email: ${email}</p>
                        <p>Phone: ${phoneNo}</p>
                        <p>Message: ${message}</p>
                    </div>
                </div>
            </body>
        </html>
    `
};



const confirmationMailOptions = {
    from: EMAIL,
    to: email, // Email of the form filler for the confirmation
    subject: 'Confirmation: We received your inquiry',
    html: `
        <html>
            <head>
                <style>
                    /* Add your CSS styles here */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #555;
                        font-size: 16px;
                    }
                    .highlight {
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Hi, ${name}!</h1>
                    <p>Thanks for contacting Eternaltek.</p>
                    <p>Our Team will connect with you soon.</p>
                </div>
            </body>
        </html>
    `
};
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    })

    transporter.sendMail(confirmationMailOptions, function(error, confirmationInfo) {
        if (error) {
            console.log('Error sending confirmation email:', error);
        } else {
            console.log('Confirmation email sent:', confirmationInfo.response);
        }
    });


})


//For sending Placement Proagram Email
app.post('/api/send-placement-proagram-email', async (req, res) => {

    const { name, email, phoneNo,whatsappNo, qualification,interestedIn } = req.body;
    console.log(req.body);
    

 
   
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL,
          pass: PASSWORD
        }
      });
      
      var mailOptions = {
        from: EMAIL,
        to: EMAIL,
        subject: `${name} wants to inquire`,
    html: `
        <html>
            <head>
                <style>
                    /* Add your CSS styles here */
                    body {
                        font-family: Arial, sans-serif;
                        padding: 0;
                        margin: 0;
                    }
                    .bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #f4f4f4;
                        z-index: -1;
                    }
                    .container {
                        position: relative;
                        z-index: 1;
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #f0f0f0; /* Change this color */
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    .info {
                        margin-top: 20px;
                        font-size: 16px;
                        color: #555;
                    }
                    .highlight {
                        font-size: 24px;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="bg"></div>
                <div class="container">
                    <h1>Course Inquiry</h1>
                    <p>Hi, Vamsi</p>
                    <p><span class="highlight">${name}</span> wants to Enroll in ${interestedIn}</p>
                    <div class="info">
                        <p>Contact them at:</p>
                        <p>Email: ${email}</p>
                        <p>Phone: ${phoneNo}</p>
                        <p>WhatsApp No: ${whatsappNo}</p>
                        <p>Qualifications: ${qualification}</p>
                        <p>Interested In: ${interestedIn}</p>

                    </div>
                </div>
            </body>
        </html>
    `
};



const confirmationMailOptions = {
    from: EMAIL,
    to: email, // Email of the form filler for the confirmation
    subject: 'Confirmation: We received your inquiry',
    html: `
        <html>
            <head>
                <style>
                    /* Add your CSS styles here */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #555;
                        font-size: 16px;
                    }
                    .highlight {
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Hi, ${name}!</h1>
                    <p>Thank You for contacting Eternaltek.</p>
                    <p>We Have Recieved Your Inquiry Regarding ${interestedIn}.</p>
                    <p>Our Team will connect with you soon.</p>
                </div>
            </body>
        </html>
    `
};
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    })

    transporter.sendMail(confirmationMailOptions, function(error, confirmationInfo) {
        if (error) {
            console.log('Error sending confirmation email:', error);
        } else {
            console.log('Confirmation email sent:', confirmationInfo.response);
        }
    });


})

//For Sending Featured Course Email
app.post('/api/send-course-email', async (req, res) => {

    const { name, email, phoneNo,course } = req.body;
    console.log(req.body);
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL,
          pass: PASSWORD
        }
      });
      
      var mailOptions = {
        from: EMAIL,
        to: EMAIL,
        subject: `${name} wants to inquire`,
    html: `
        <html>
            <head>
                <style>
                    /* Add your CSS styles here */
                    body {
                        font-family: Arial, sans-serif;
                        padding: 0;
                        margin: 0;
                    }
                    .bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #f4f4f4;
                        z-index: -1;
                    }
                    .container {
                        position: relative;
                        z-index: 1;
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #f0f0f0; /* Change this color */
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    .info {
                        margin-top: 20px;
                        font-size: 16px;
                        color: #555;
                    }
                    .highlight {
                        font-size: 24px;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="bg"></div>
                <div class="container">
                    <h1>Course Inquiry</h1>
                    <p>Hi, Vamsi</p>
                    <p><span class="highlight">${name}</span> wants to Enroll in ${course}</p>
                    <div class="info">
                        <p>Contact them at:</p>
                        <p>Email: ${email}</p>
                        <p>Phone: ${phoneNo}</p>
                        <p>Interested In: ${course}</p>

                    </div>
                </div>
            </body>
        </html>
    `
};



const confirmationMailOptions = {
    from: EMAIL,
    to: email, // Email of the form filler for the confirmation
    subject: 'Confirmation: We received your inquiry',
    html: `
        <html>
            <head>
                <style>
                    /* Add your CSS styles here */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #555;
                        font-size: 16px;
                    }
                    .highlight {
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Hi, ${name}!</h1>
                    <p>Thank You for contacting Eternaltek.</p>
                    <p>We Have Recieved Your Inquiry Regarding ${course}.</p>
                    <p>Our Team will connect with you soon.</p>
                </div>
            </body>
        </html>
    `
};
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    })

    transporter.sendMail(confirmationMailOptions, function(error, confirmationInfo) {
        if (error) {
            console.log('Error sending confirmation email:', error);
        } else {
            console.log('Confirmation email sent:', confirmationInfo.response);
        }
    });


})


http.listen(3000, function () {
    console.log("Server is Running");
});



/*
let config={
    service:'gmail',
    auth:{
        user:'',
        password:''
    }
}

let transporter=noademailer.createTransport(config)
*/


