<?php 

$servername = "localhost";
$database = "test";
$username = "root";
$password = "";


$connection = mysqli_connect($servername, $username, $password, $database);


if($connection->connect_error){
    die("Connection failed:" . $connection->connect_error);

}

echo "Connected successfully";

mysqli_close($connection);



?>