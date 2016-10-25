<?php

return $conn = mysqli_connect('localhost', 'root', '', 'phptest');

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
