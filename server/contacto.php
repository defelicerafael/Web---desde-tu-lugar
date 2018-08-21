<?php
require("class.phpmailer.php");
require("class.smtp.php");
require("class_sql.php");


$smtpHost = "wi582675.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "admin@desdetulugar.org.ar";  // Mi cuenta de correo
$smtpClave = "D3sd3tulug4r";  // Mi contraseña
$date = date("d/m/Y");

$objDatos = json_decode(file_get_contents("php://input"));



$datos = $objDatos->datos;
$tabla = $objDatos->tabla;
$array = json_decode(json_encode($datos), True);
/*
print_r($datos);
echo $tabla;
print_r($array);
/*
$array['nombre'] = "rafael";
$array['apellido'] = "defelice";
$array['email'] = "defelicerafael@gmail.com";
$array['mensaje'] = "Hola como estas?";
*/
$emailDestino = "info@desdetulugar.com.ar";

$cuerpo .= "<b>DATOS DEL CONTACTO</b><br>";
$cuerpo .= "<hr>";
$cuerpo .= "<b>Nombre:</b> " . $array['nombre'] . "<br>";
$cuerpo .= "<b>Apellido:</b> " . $array['apellido'] . "<br>";
$cuerpo .= "<b>Correo Electronico:</b> " . $array['email'] . "<br/>";
$cuerpo .= "<hr>";
$cuerpo .= "<b>MENSAJE</b><br>";
$cuerpo .= "<hr/>". $array['texto']."<br/>";

$cuerpo .= "<hr>";
$cuerpo .= "Este mail se origina cuando el usuario hace clic en 'ENVIAR' en contacto <br/>";
$cuerpo .= "El contacto se efectu&oacute; en la fecha: $date <br/>";

$sql = new Sql;
$insert = $sql->insert_array($tabla,$array);



$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587; 
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $smtpUsuario; // Email desde donde envío el correo.
$mail->FromName = $array['nombre'];
$mail->AddAddress($emailDestino); 
//$mail->AddAddress($emailMili);
//$mail->AddAddress($emailJuli);// Esta es la dirección a donde enviamos los datos del formulario
$mail->AddReplyTo($array['email']); // Esto es para que al recibir el correo y poner Responder, lo haga a la cuenta del visitante. 
$mail->Subject = "mensaje via WEB"; // Este es el titulo del email.
$mensajeHtml = nl2br($cuerpo);
$mail->Body = "{$mensajeHtml}"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje}"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    echo "1";
} else {
    echo "0";
}





//echo $cuerpo;



