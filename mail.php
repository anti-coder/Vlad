<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Обратная связь</title>
</head>
<body>
<?php

if ($_POST['code'] != 'liuhkibuwjyhe82364763ty4bekuwjdhx') { /*проверка на спам*/
  exit;
}

if (isset($_POST['contactname'])) {$contactname = $_POST['contactname'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['message'])) {$message = $_POST['message'];}


$to = "7558616@gmail.com"; 
$headers = "Content-type: text/plain; charset=utf-8";
$subject = "Сообщение с вашего сайта";
$message = "Имя пославшего: $contactname \nЭлектронный адрес: $email \nСообщение: $message";
$send = mail ($to, $subject, $message, $headers);


if ($send == 'true')
{
echo "<b>Спасибо за отправку вашего сообщения!<p>";
echo "<a href=https://anti-site.ru/>Нажмите,</a> чтобы вернуться на главную страницу";
}
else
{
echo "<p><b>Ошибка. Сообщение не отправлено!";
}
?>
</body>
</html>
