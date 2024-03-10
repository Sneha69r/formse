<?php

require 'dbconnect.php';

$sql = "select * from formserver where flag = 1";

$res = mysqli_query($conn,$sql);

$data = [];

while($row = mysqli_fetch_assoc($res)){

    $data[] = $row; 
}


print_r(json_encode($data));


?>