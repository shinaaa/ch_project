<?php
  header("Content-Type:application/json");
  $conn = mysqli_connect("127.0.0.1","root","","ch",3306);
  mysqli_query($conn,"set names utf8");
  $uname = $_REQUEST['uname'];
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  if(!$subject){
    $subject = "";
  }
  $message = $_REQUEST['message'];
  $sql = "INSERT INTO ch.ch_message VALUES(NULL,'$uname','$email','$subject','$message')";
  mysqli_query($conn,$sql);
  echo json_encode(["code"=>200]);
?>