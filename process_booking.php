<?php
require 'C:\Users\lenovo\Desktop\xammp\htdocs\phplogin\connection2.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $eventId = $_POST['event'];
    $fullName = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $numberOfTickets = $_POST['numberOfTickets'];

    // Retrieve event price for total calculation
    $query = $conn->prepare("SELECT price FROM events WHERE event_id = ? AND is_active = 1"); // Ensure the event is active
    $query->bind_param("i", $eventId);
    $query->execute();
    $result = $query->get_result();
    
    if ($result->num_rows > 0) {
        $event = $result->fetch_assoc();
        $totalPrice = $event['price'] * $numberOfTickets;

        // Store booking details in database
        $stmt = $conn->prepare("INSERT INTO bookings (event_id, full_name, email, phone, number_of_tickets, total_price) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("isssid", $eventId, $fullName, $email, $phone, $numberOfTickets, $totalPrice);

        if ($stmt->execute()) {
            $bookingId = $conn->insert_id;
            header("Location: ../public/confirmation.html?booking_id=" . $bookingId);
            exit();
        } else {
            echo "Booking failed: " . $stmt->error;
        }
    } else {
        echo "Event not found or is inactive.";
    }
}
?>
