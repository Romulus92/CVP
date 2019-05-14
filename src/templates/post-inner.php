<?php

  $msg = "";

  require "mailer/PHPMailerAutoload.php";
  
  function sendEmail($mailName, $mailPhone) {
    $mail = new PHPMailer(true);

    //Server settings
    $mail->Host = "smtp.yandex.ru";
    $mail->isSMTP(); 
    $mail->SMTPAuth = true;
    $mail->Username = 'mail@centrvoenprava.ru';
    $mail->Password = '4ynNM7u%D';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    //Recipients
    $mail->setFrom('mail@centrvoenprava.ru', 'Центр Военного Права');
    $mail->addAddress('info@centrvoenprava.ru', 'Центр Военного Права');
    
    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Заявка на консультацию ' . $mailName;
    $mail->Body    = "<h2>Заявка на косультацию</h2>
    <h4>Имя</h4><p>".$mailName."</p>
    <h4>Телефон</h4><p>".$mailPhone."</p>
        ";

    return $mail->send();
  }
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  
  if(!empty($name) && !empty($phone)) {
    sendEmail($name, $phone);
  } else {
    $msg = "Заполните все поля!";
    $msgClass = "alert-danger";
  }
?>