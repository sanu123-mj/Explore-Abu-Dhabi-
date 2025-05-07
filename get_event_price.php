<?php
// src/get_event_price.php

require 'connection2.php';

// Fetch events data
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $query = $conn->prepare("SELECT event_id AS id, name, price, description FROM events");
    $query->execute();
    $result = $query->get_result();

    $events = [];
    while ($row = $result->fetch_assoc()) {
        $events[] = $row;
    }

    // Output as JSON
    header('Content-Type: application/json');
    echo json_encode(['events' => $events]);
    exit();
}
?>
