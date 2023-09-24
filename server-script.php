<?php
// Get the JSON data from the POST request
$jsonData = file_get_contents("php://input");

// Decode the JSON data
$data = json_decode($jsonData);

// Write the JSON data to a file
file_put_contents("coordinates.json", json_encode($data));

// Respond with a success message if needed
echo "Data received and stored.";
?>
