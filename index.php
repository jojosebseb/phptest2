<?php
  include 'views/header.php';
  $page = "";
  if(isset($_GET['page'])) $page = $_GET['page'];
  else $page = "login";
  include 'views/'.$page.'.php';
  include 'views/footer.php';
 ?>
