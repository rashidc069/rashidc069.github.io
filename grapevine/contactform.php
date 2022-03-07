<?php
	
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_from = 'abc';
	$email_subject = 'New enquiry';

	$email_body = "User name: $name.\n".
					"User Email: $visitor_email.\n".
						"User message: $message.\n";

$to = "info@grapevineglobal.net";

$headers = " From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);
header("Location: index.html");

?>