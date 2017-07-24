<?php 
// check if fields passed are empty 
 if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");
  $errors = array();
  $data = array();

  if(empty($_POST['firstName'])) 
    $errors['firstName'] = 'Please fill in your first name';

  if(empty($_POST['lastName'])) 
    $errors['lastName'] = 'Please fill in your last name';

  if(empty($_POST['company'])) 
    $errors['company'] = 'Please fill in your company name';

  if(empty($_POST['jobTitle'])) 
    $errors['jobTitle'] = 'Please fill in your job title';

  if(empty($_POST['email'])) 
    $errors['email'] = 'Please fill in your email address';

  if(empty($_POST['phone'])) 
    $errors['phone'] = 'Please fill in your phone number';

  if(empty($_POST['address'])) 
    $errors['address'] = 'Please enter your address';

  if(empty($_POST['city'])) 
    $errors['city'] = 'Please fill in your city';

  if(empty($_POST['state'])) 
    $errors['state'] = 'Please enter your state';

  if(empty($_POST['zip'])) 
    $errors['zip'] = 'Please enter your zip code';

 if (! empty($errors)) {

  $data['success'] = false;
  $data['errors'] = $errors;

 } else {
  $data['success'] = true;
  $firstname = $_POST['firstName'];
  $lastname = $_POST['lastName'];
  $company = $_POST['company'];
  $job = $_POST['jobTitle'];
  $email_address = $_POST['email'];
  $phone = $_POST['phone'];
  $address = $_POST['address'];
  $city = $_POST['city'];
  $state = $_POST['state'];
  $zip = $_POST['zip'];
  $event1 = $_POST['events1'];
  $event2 = $_POST['events2'];
  $event3 = $_POST['events3'];
  $event4 = $_POST['events4'];
  $event5 = $_POST['events5'];

   // create email body and send it    
   $to = 'wesley.chitwood1@gmail.com'; 
   // put your email 
   $email_subject = "Contact form submitted by:" . $firstname . " " . $lastname; 
   $email_body = "You have received a new registration for ATM ISO." . PHP_EOL . PHP_EOL;                  
   $email_body .= "Here are the details:\n \nName:" . $firstname . " " . $lastname . "." . PHP_EOL . PHP_EOL;                  
   $email_body .= "Company: " . $company . "Job: ". $job . "Email: ". $email_address ."Phone: " . $phone . PHP_EOL;
   $email_body .="Address: " . $addres . "City " . $city . "State " . $state . "Zip: " . $zip . PHP_EOL;
   $email_body .= "Events: " . $event1 . PHP_EOL;
   $email_body .=  $event2 . PHP_EOL;
   $email_body .=  $event3 . PHP_EOL;
   $email_body .=  $event4 . PHP_EOL;
   $email_body .=  $event5;

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