<?php
$para      = 'walter.niro23@gmail.com';
$titulo    = 'Test mail';
$mensaje   = 'Test mail';
$cabeceras = 'From: admin@cointigo.io' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($para, $titulo, $mensaje, $cabeceras);
?>