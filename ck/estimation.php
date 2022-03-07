<?php
error_reporting(-1);
ini_set('display_errors', 'On');
if(isset($_POST['email'])) {

// EDIT THE 2 LINES BELOW AS REQUIRED
$email_to = "info@ckagro.in";
$email_subject = "Quotation Enquiry";
$email_from = "abc";

$email_message = "Form details below.\n\n";

function clean_string($string) {
  $bad = array("content-type","bcc:","to:","cc:","href");
  return str_replace($bad,"",$string);
}

$email_message .= "Name: ".clean_string($_POST["name"])."\n";
$email_message .= "Email: ".clean_string($_POST["email"])."\n";
$email_message .= "Phone: ".clean_string($_POST["phone"])."\n";
$email_message .= "Type: ".implode(", ", $_POST["type_of_cage"])."\n";
$email_message .= "Number: ".clean_string($_POST["numberofpet"])."\n";


// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
mail($email_to, $email_subject, $email_message, $headers); 
?>

<!-- include your own success html here -->
<head>

  <meta http-equiv="refresh" content="2; URL=http://ckagro.in">
<meta name="keywords" content="automatic redirection">
 </head><center>
<img src="images/logo.png" />
  <br>
  <br>
  Thank you for contacting us.  We will be in touch.<br>
<br>
 <a href="index.html">HOME</a></center>

<?php
}
?>