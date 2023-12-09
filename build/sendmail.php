<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_OFF;                    
    $mail->isSMTP();                                          
    $mail->Host       = 'smtp.gmail.com';                   
    $mail->SMTPAuth   = true;                                 
    $mail->Username   = 'kirill.topchik2808@gmail.com';                     
    $mail->Password   = 'zlsc vpaq yatu laxc';                               
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            
    $mail->Port       = 465; 
    $mail->CharSet = "UTF-8" ;                                 


    //Recipients
    $mail->setFrom('kirill.topchik2808@gmail.com', 'Мененджер по работе с клиентами');
    $mail->addAddress('rbru-metrika@yandex.ru');              
    //Content
    $name = $_POST["name"];
    $email = $_POST["email"];
    $body = 'Имя клиента:  '. $name .' ' . ' ' .'Email клиента: '.  $email;
    $theme = "[Заявка с формы]";



    $mail->isHTML(true);                                 
    $mail->Subject = $theme;
    $mail->Body    = $body;
    $mail->send();
    echo 'Сообщение успешно отправлено!';
} catch (Exception $e) {
    echo "Ошибка! Сообщение не отправлено. Попробуйте позднее!";
}
