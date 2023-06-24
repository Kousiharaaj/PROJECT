<?php
$username=$_POST["username"];
$email=$_POST["email"];
$c=new mysqli('localhost','root','','login');
$query=$c->prepare("insert into stud(username,email) values(?,?)");
$query->bind_param('ss',$username,$email);
$query->execute();
$query->close();
include 'mainpage.html';
$c->close();
?>