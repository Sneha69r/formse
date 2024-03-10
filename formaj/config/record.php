<?php
require 'dbconnect.php';

$id = $_GET['updateid'];
    
    $sql = "select * from formserver where sno='$id'";
    $result = mysqli_query($conn, $sql);
    $row[] = mysqli_fetch_assoc($result);

print_r(json_encode($row));

    ?>