<?php

require 'dbconnect.php';

$name = $_POST['user_name'];
$email = $_POST['user_email'];
$phoneNumber = $_POST['user_phone'];
$gender = $_POST['user_gender'];
$message = $_POST['user_message'];


  if (!preg_match("/^[a-zA-Z_]+( [a-zA-Z]+)*$/", $name) || $name == "") {
    $res = [
      "status" => 422,
      "message" => "Invalid Name"
    ];
    echo json_encode($res);
    return;
  }
  
  // $email_regex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
  if (!filter_var($email, FILTER_VALIDATE_EMAIL) ) {
    $res = [
      "status" => 422,
      "message" => "Invalid Email"
    ];
    echo json_encode($res);
    return;
  }
  
  if (!preg_match("/^[0-9]+$/", $phoneNumber) || (strlen($phoneNumber) < 10) || !isset($phoneNumber)) {
    $res = [
      "status" => 422,
      "message" => "Invalid Number"
    ];
    echo json_encode($res);
    return;
  }
  
  
  if($gender == ""){
  
    $res = [
      "status" => 422,
      "message" => "Please select a gender!"
    ];
    echo json_encode($res);
    return;
  
  }
  
  if($message == ""){
  
    $res = [
      "status" => 422,
      "message" => "Please enter a message"
    ];
    echo json_encode($res);
    return;
  
  }







$sql1 = "INSERT INTO formserver (name, email, phone, gender, message,flag) 
   VALUES ('$name', '$email', '$phoneNumber', '$gender', '$message','1')";


$result = mysqli_query($conn, $sql1);




if (!$result) {
  $res = [
    "status" => 404,
    "message" => "Connection Error.."

  ];
  echo json_encode($res);
  return;

} else {
  $res = [
    "status" => 200,
    "message" => "Record Inserted"
  ];
  echo json_encode($res);
}


mysqli_close($conn);

?>