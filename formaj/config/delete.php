<?php

include 'dbconnect.php';

if(isset($_GET['deleteid'])){

    $id = $_GET['deleteid'];

    // $sql = "delete from formserver where sno='$id'";
    
    $sql = "update formserver set flag = 0 where sno = '$id' ";

    $result = mysqli_query($conn,$sql);

    if($result){

        echo "Data Deleted Successfully";
        
    }
    else{

        die(mysqli_error($conn));
    }
}


?>