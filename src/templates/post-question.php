<?php

  $msg = "";

  require "mailer/PHPMailerAutoload.php";
  
  function sendEmail($mailQuestion, $mailPhone, $mailEmail) {
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
    $mail->Subject = 'Новый вопрос';
    $mail->Body    = "<h2>Вопрос</h2>
    <h4>Вопрос</h4><p>".$mailQuestion."</p>
    <h4>Телефон</h4><p>".$mailPhone."</p>
    <h4>Email</h4><p>".$mailEmail."</p>
        ";

    return $mail->send();
  }
  $question = $_POST['question'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  if(!empty($question) && !empty($phone) && !empty($email)) {
    sendEmail($question, $phone, $email);
  } else {
    $msg = "Заполните все поля!";
    $msgClass = "alert-danger";
  }
?>