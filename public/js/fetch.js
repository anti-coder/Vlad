"use strict"
/* Как только страничка загрузилась */
window.onload = function () { 
	/* проверяем поддерживает ли браузер FormData */
if(!window.FormData) { alert("Браузер не поддерживает загрузку файлов на этом сайте"); } }

console.clear();

const registerUrl="mail.php";
let form=document.forms;
let registerForm=form.register;
let contactnameField=registerForm.elements.contactname;
let emailField=registerForm.elements.email;
let userMessageField=document.getElementById('message');


let code = document.getElementById('code'); // Получаем скрытый input
//console.log(code.value);



registerForm.addEventListener('submit', (event)=>{
	event.preventDefault();

code.value = 'liuhkibuwjyhe82364763ty4bekuwjdhx'; // Подставляем значение в value инпута, значение поля hidden меняется при нажатии 'submit'
console.log(code.value);

let contactname=registerForm.contactname.value;
let email=registerForm.email.value;
let userMessage=userMessageField.value; 

let userFormData = new FormData(registerForm);//конструктор, который позволяет доставать данные из формы и удобно отправлять их на сервер

for (let field of userFormData) {
  console.log(field);
}


let resultPromise = new Promise ((resolve, reject) => {
fetch(registerUrl, { //промис дожидается fetch-отправки данных на сервер; resolve - функция, которая будет выполнена, когда код завершится удачно
	method: 'POST',
    body: userFormData
    
})
.then(response => {
	resolve(response.text());//}//ответ-текстовый файл
})

	.catch(error => {
	reject(error)
})
});


//ответ от сервера - когда срабатывает обработчик промиса
 
resultPromise
.then(response => {
	
	console.log('Спасибо, сообщение отправлено!');//функция-обработчик
	
	Swal.fire({
            title: "Спасибо!", //если сервер не ответил
            text: "Сообщение отправлено",//сообщение заказчику
            type: "info", //определяетцвет на кружке и вывод
            confirmButtonText: "Ok" 
            });

//	document.location.href = "https://anti-site.ru/";
})
	.catch(error => 
		console.log('Ошибка! Сообщение не отправлено!'));


Swal.fire({
            title: "Ошибка!", //если сервер не ответил
            text: "Сообщение не отправлено!",//сообщение заказчику
            type: "error", //определяетцвет на кружке и вывод
            confirmButtonText: "Ok" 
        });



document.querySelector('#contactname').value = ``; // очищаем поле 
document.querySelector('#email').value = ``; // очищаем поле 
document.querySelector('#message').value = ``; // очищаем поле 



});

