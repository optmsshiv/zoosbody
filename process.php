<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$visitor_phone = $_POST['phone'];
$message = $_POST['message'];
$email_from = 'request@zoosbodypiercing.com';
$email_subject = "[Important] New Request from zoosbodypiercing.com" ;
$email_body ="New Request Details:".
"\n"."Name :". $name.
"\n"."Email :". $visitor_email.
"\n"."Phone :". $visitor_phone.
"\n"."Message:". $message."";
$to = "zoosbodypiercing@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
header('Location: https://zoosbodypiercing.com/thank-you.html');
?> 