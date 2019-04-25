<?php
    $to = 'ivan.eremeev@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = ''.$_POST['subject'].'';
    if ((isset($_POST['name']) && $_POST['name'] != "")) { //Проверка отправилось ли наше поля name и не пустые ли они
        $message = '
        <html>
            <head>
                <title> Заявка с сайта </title>
            </head>
            <body>
                <p>Набор: ' . $subject . '</p>
                <p>Имя: ' . $_POST['name'] . '</p>
                <p>Телефон: ' . $_POST['tel'] . '</p>                        
            </body>
        </html>'; 
    }
    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <".$to.">\r\n"; //Наименование и почта отправителя
    if (mail($to, 'Заявка с сайта', $message, $headers)) {
        // header('location: success.html');
        echo "success";
    } else {
        echo 'Ошибка отправки. Пожалуйста повторите еще раз!';
    }
?>
