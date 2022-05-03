const express = require("express");
const bodyParser = require("body-parser");




const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



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

// custom 404 page handler
app.get("*", (req, res) => {
    res.render("error", {layout: 'error'})
  
  });















app.listen(process.env.PORT || 3000, function() {
    console.log("Server started successfully on Port 3000");
  });