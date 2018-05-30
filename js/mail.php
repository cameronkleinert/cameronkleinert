<?php 
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$message = $_POST['message'];
$formcontent="From: $email \n Message: $message";
$recipient = "cameron.kleinert@gmail.com";
$subject = "Portfolio Site - Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>