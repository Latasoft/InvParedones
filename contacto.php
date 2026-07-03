<?php

header('Content-Type: application/json; charset=utf-8');

$input = file_get_contents("php://input");
$data = json_decode($input, true);

$nombre   = trim($data['nombre'] ?? '');
$correo   = trim($data['correo'] ?? '');
$telefono = trim($data['telefono'] ?? '');
$empresa  = trim($data['empresa'] ?? '');
$servicio = trim($data['servicio'] ?? '');
$mensaje  = trim($data['mensaje'] ?? '');

if (!$nombre || !$correo || !$mensaje) {
    echo json_encode([
        "success" => false,
        "message" => "Campos obligatorios incompletos"
    ]);
    exit;
}

$mensajeHtml = "
<h2>Nuevo contacto desde InvParedones</h2>

<p><strong>Nombre:</strong> {$nombre}</p>
<p><strong>Correo:</strong> {$correo}</p>
<p><strong>Teléfono:</strong> {$telefono}</p>
<p><strong>Empresa:</strong> {$empresa}</p>
<p><strong>Servicio:</strong> {$servicio}</p>
<p><strong>Mensaje:</strong><br>{$mensaje}</p>
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: InvParedones <no-reply@invparedones.cl>\r\n";
$headers .= "Reply-To: {$correo}\r\n";

$enviado = mail(
    "inversiones.paredones@gmail.com",
    "Nuevo contacto desde InvParedones",
    $mensajeHtml,
    $headers
);

if ($enviado) {
    echo json_encode([
        "success" => true,
        "message" => "Correo enviado correctamente"
    ]);
} else {
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "No fue posible enviar el correo"
    ]);
}