<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Responder al preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

try {

    $data = json_decode(file_get_contents("php://input"), true);

    $nombre = trim($data['nombre'] ?? '');
    $correo = trim($data['correo'] ?? '');
    $telefono = trim($data['telefono'] ?? '');
    $empresa = trim($data['empresa'] ?? '');
    $servicio = trim($data['servicio'] ?? '');
    $mensaje = trim($data['mensaje'] ?? '');

    if (
        empty($nombre) ||
        empty($correo) ||
        empty($mensaje)
    ) {
        throw new Exception("Campos obligatorios incompletos");
    }

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;

    // CAMBIAR ESTOS DATOS
    $mail->Username   = 'inversiones.paredones@gmail.com';
    $mail->Password   = 'ppxg robc izfr bvmu';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom(
        'inversiones.paredones@gmail.com',
        'Formulario InvParedones'
    );

    $mail->addAddress(
        'inversiones.paredones@gmail.com'
    );

    $mail->isHTML(true);

    $mail->Subject = 'Nuevo contacto desde InvParedones';

    $mail->Body = "
        <h2>Nuevo formulario de contacto</h2>

        <p><strong>Nombre:</strong> {$nombre}</p>
        <p><strong>Correo:</strong> {$correo}</p>
        <p><strong>Teléfono:</strong> {$telefono}</p>
        <p><strong>Empresa:</strong> {$empresa}</p>
        <p><strong>Servicio:</strong> {$servicio}</p>
        <p><strong>Mensaje:</strong><br>{$mensaje}</p>
    ";

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Correo enviado correctamente"
    ]);

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}