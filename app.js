const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();




const app = express();

app.set('view engine', 'ejs');



app.use(express.static("public"));


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var year = new Date().getFullYear()

app.get("/", function(req, res){
  
    res.render("home")
  
  
  });
  app.get("/home", function(req, res){
    res.render("home")
  
  });
  app.get("/about", function(req, res){
    res.render("about")
  
  });
  app.get("/pricing", function(req, res){
    res.render("pricing")});
   
  
  app.get("/testimonials", function(req, res){
    res.render("testimonials")
  
  });

  app.get("/contact", function(req, res){
    res.render("contact")
  
  });

  app.get("/services", function(req, res){
    res.render("services")
  
  });

// custom 404 page handler
app.get("*", (req, res) => {
    res.render("error")
  
  });







// email service 


  app.post('/send', (req, res) => {

    const output = `
      <p>You have a potential client!</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Subject: ${req.body.subject}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL, // generated ethereal user
          pass: process.env.PASS// generated ethereal password
      },
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: `"CareerHub Potential Client" ${process.env.EMAIL}`, // sender address
        to: ` ${process.env.EMAIL}`, // list of receivers
        subject: 'CareerHub Message Request', // Subject line
        html: output // html body
    };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);   
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    console.log(res.statusCode)
    if (res.status = 200){;
     res.render('sent' )}
     else{
       res.render('errorsentpage')
     }
});

});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started successfully on Port 3000");
  });