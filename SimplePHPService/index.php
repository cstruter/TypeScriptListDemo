<?php 

header('Access-Control-Allow-Origin: *');  
header('Content-Type: application/json');

include 'Models/User.php';

$users = [
    new User('Bertie', 'Naude', 'bertie'),
    new User('Christoff', 'Truter', 'cstruter'),
    new User('Nelis', 'Van Schalkwyk', 'nelis'),
    new User('Pieter', 'Booysen', 'pieter')
];

echo json_encode($users);

?>