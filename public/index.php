<?php
/**
 * Just a simple hello world web page that connects to the database to check the infrastructure and response JSON with
 * the information about it.
 */
$host = $_ENV['DB_HOST'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$database = $_ENV['DB_DATABASE'];
$port = $_ENV['DB_PORT'];
$connection = mysqli_connect($host, $username, $password, $database, $port);

$response = [
    'message' => 'Hello World! This is a test for the CT Candidates App.',
    'db_connection' => (bool) $connection,
];

echo json_encode($response, JSON_PRETTY_PRINT) . PHP_EOL;
