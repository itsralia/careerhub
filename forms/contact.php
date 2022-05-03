
<?php

  if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "daincy35@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved an email from ".$name.".\n\n".$message;


    mail($mailTo, $subject, $txt, $headers) or die("Error!");
    header("Location: index.php?mailsend");


    echo'Message sent!';
  }
  

?>
