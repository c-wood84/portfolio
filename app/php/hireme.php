<?php 
// check if fields passed are empty 
 if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");
  $errors = array();
  $data = array();

  if(empty($_POST['fullName'])) 
    $errors['fullName'] = 'Please fill in your name';

  if(empty($_POST['company'])) 
    $errors['company'] = 'Please fill in your company';

  if(empty($_POST['job'])) 
    $errors['job'] = 'Please fill in the job';

  if(empty($_POST['phone'])) 
    $errors['phone'] = 'Please fill in your phone number';

if(empty($_POST['email'])) 
    $errors['email'] = 'Please fill in your email address';
  


 if (! empty($errors)) {

  $data['success'] = false;
  $data['errors'] = $errors;

 } else {
  $data['success'] = true;
  $fullname = $_POST['fullName'];
  $subject = $_POST['subject'];
  $company = $_POST['company'];
  $phone = $_POST['phone'];
  $email_address = $_POST['email'];
  $message = $_POST['message'];


   // create email body and send it    
   $to = 'wesley.chitwood1@gmail.com'; 
   // put your email 
   $email_subject = " " . $subject . " info form submitted " ; 
   $email_body = "You have received a new message"  . $subject . "from wesleychitwood.com." . PHP_EOL . PHP_EOL;                  
   $email_body .= "Here are the details:\n \nName:" . $fullname . PHP_EOL . PHP_EOL;                  
   $email_body .= "Company: " . $company . "Job: ". $job . "Phone: " . $phone . "Email: ". $email_address . PHP_EOL;
   $email_body .= "Name:\n \n:" . $message . PHP_EOL . PHP_EOL;

    $headers = "From: $email_address" . PHP_EOL;   
    $headers .= "Reply-To: $email_address" . PHP_EOL;
    $headers .= "MIME-Version: 1.0" . PHP_EOL;
    $headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
    $headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;     
   
   mail($to,$email_subject,$email_body,$headers); 

   $data['errors'] = 'Success!';   
 }     

 echo json_encode($data);    
?>