<?php

  $msg = "";

  require "mailer/PHPMailerAutoload.php";
  
  function sendEmail($mailName, $mailAge, $mailPhone) {
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
    $mail->Subject = 'Заявка на консультацию - от ' . $mailName;
    $mail->Body    = "<h2>Заявка на консультацию</h2>
    <h4>Имя</h4><p>".$mailName."</p>
    <h4>Возраст</h4><p>".$mailAge."</p>
    <h4>Номер телефона</h4><p>".$mailPhone."</p>
        ";

    return $mail->send();
  }
  $name = $_POST['name'];
  $age = $_POST['age'];
  $phone = $_POST['phone'];
  if(!empty($name) && !empty($age) && !empty($phone)) {
    sendEmail($name, $age, $phone);
  } else {
    $msg = "Заполните все поля!";
    $msgClass = "alert-danger";
  }
?>