<?php

  include ('connection.php');

  $postdata = file_get_contents("php://input");

   if (isset($postdata)) {
      $request = json_decode($postdata);
      $query  = "SELECT * FROM feedbackcustomers";
      $res = mysqli_query($conn, $query);
      if($res){
      while($row = mysqli_fetch_assoc($res)){
         echo $row["name"]." ".$row["phoneno"]." ".$row["remarks"]." ".$row["storequality"];
      }
     }
     else
       echo 'not ok';
    }
    mysqli_close($conn);
?>
