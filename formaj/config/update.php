<?php

// require 'dbconnect.php';

//     $id = $_POST['sno'];
//     $name = $_POST['name'];
//     $email = $_POST['email'];
//     $phoneNumber = $_POST['phone'];
//     $gender = $_POST['gender'];
//     $message = $_POST['message'];

//     if (!preg_match("/^[a-zA-Z_]+( [a-zA-Z]+)*$/", $name)) {
//         $res = [
//             "status" => 422,
//             "message" => "Invalid Name"
//         ];
//         echo json_encode($res);
//         return;
//     }

//     $email_regex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
//     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
//         $res = [
//             "status" => 422,
//             "message" => "Invalid Email"
//         ];
//         echo json_encode($res);
//         return;
//     }
     
//     if (!preg_match("/^[0-9]+$/" , $phoneNumber) || sizeof($phoneNumber < 10) ) {
//         $res = [
//             "status" => 422,
//             "message" => "Invalid Number"
//         ];
//         echo json_encode($res);
//         return;
//     }

      
//   if($gender == ""){
  
//     $res = [
//       "status" => 422,
//       "message" => "Please select a gender!"
//     ];
//     echo json_encode($res);
//     return;
  
//   }
  
//   if($message == ""){
  
//     $res = [
//       "status" => 422,
//       "message" => "Please enter a message"
//     ];
//     echo json_encode($res);
//     return;
  
//   }





// $sql1 = "update formserver set name='$name' ,email='$email' ,phone='$phoneNumber', gender='$gender',message='$message' where sno='$id' ";
// $result = mysqli_query($conn, $sql1);



// if (!$result) {
//     $res = [
//         "status" => 404,
//         "message" => "Connection Error.."
//     ];
//     echo json_encode($res);
//     return;
// }

// else {
//     $res = [
//         "status" => 200,
//         "message" => "Record Updated"
//     ];
//     echo json_encode($res);
// }



// mysqli_close($conn);



?>

<?php

require 'dbconnect.php';

if (isset($_POST['sno'])) {
    $id = $_POST['sno'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phone'];
    $gender = $_POST['gender'];
    $message = $_POST['message'];

    if (!preg_match("/^[a-zA-Z_]+( [a-zA-Z]+)*$/", $name)) {
        $res = [
            "status" => 422,
            "message" => "Invalid Name"
        ];
        echo json_encode($res);
        return;
    }

    $email_regex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $res = [
            "status" => 422,
            "message" => "Invalid Email"
        ];
        echo json_encode($res);
        return;
    }
     
    if (!preg_match("/^[0-9]+$/" , $phoneNumber) || sizeof($phoneNumber) < 10) {
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





$sql1 = "update formserver set name='$name' ,email='$email' ,phone='$phoneNumber', gender='$gender',message='$message' where sno='$id' ";
$result = mysqli_query($conn, $sql1);



if (!$result) {
    $res = [
        "status" => 404,
        "message" => "Connection Error.."
    ];
    echo json_encode($res);
    return;
}

else {
    $res = [
        "status" => 200,
        "message" => "Record Updated"
    ];
    echo json_encode($res);
}



mysqli_close($conn);

?>
