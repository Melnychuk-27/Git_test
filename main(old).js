// let couner = 0;

// function onClickButton(el) {
//     couner++;
//     el.innerHTML = couner;
//     el.style.background = 'red';
//     console.log(el.value);
//     el.style.cssText = "border-radius: 50%; outline:none;";
// }

// function onInput(el) {
//     if (el.value == 'Hello') {
//         alert('hi peder')
//     }
//     console.log(el.value);
// }

// let spans = document.getElementsByTagName('span');
// console.log(spans.innerHTML);
// for(let i = 0; i < spans.length; i++){
//     console.log(spans[i].innerHTML);
// }

// document.querySelector("#main-form").addEventListener("submit", checkForm);

// function checkForm(event) {
//     event.preventDefault();

//     let el = document.querySelector("#main-form");
    
//     let name = el.name.value;
//     let pass = el.pass.value;
//     let repass = el.repass.value;
//     let state = el.state.value;

//     let fail = "";

//     if(name == "" || pass == "" || state == "")
//         {fail = "Заполните все поля";}
//     else if(name.length <=1 || name.length > 30)
//         {fail = "Введите корректно имя";}
//     else if(pass != repass)
//         fail = "Пароли должни совпадать";
//     else if(pass.split("w").length > 1)
//        { fail = "Некоретной пароль";}

//     if(fail != ""){
//         document.querySelector("#error").innerHTML = fail;
        
//     } else {
//         alert("Все данние корректно заповнени")
       
//     }
    
//     console.log(name + " -" + pass + " -" +  repass + " -" +   state);
    
// }



// document.querySelector("#main-form").addEventListener("submit", checkForm);

// function checkForm(event) {
//     event.preventDefault();

//     let el = document.querySelector("#main-form");

//     let email = el.Email.value;
//     let Pass = el.pass.value;
    
//     let fail = "";

//     if(email == "" || Pass == "" ){
//         fail = "Заполните все поля";
//     } else if(email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0) {
//         fail = "Заполните email корректно";
//     } else if(Pass == "qwerty") {
//         fail = "Заполните пароль корректно, а не qwerty";
//     }
    
//     if(fail != "") {
//         alert(fail);
//     } else {
//         alert("Все хорошо");
//         document.querySelector("#Email").value = "";
//         document.querySelector("#pass").value = "";
//     }

// }
// let couner = 10;
// idd();
//   function idd()  {
//     console.log(couner);
//     couner++ ;
//     if (couner <= 30) {
//         setTimeout(idd, 120);
//     }

// } 
// var theBigDay = new Date(1962, 6, 7);
// console.log(theBigDay); 
// alert(window.innerHeight);
// document.body.style.background = "red";

// // а через секунду вернём как было
// setTimeout(() => document.body.style.background = "", 1000);


// var numbers = 10;
// numbersToConsole();

// function numbersToConsole() {
// 	// Выводим число
// 	console.log("Число - " + numbers);
	
// 	numbers++; // Увеличиваем число на 1
// 	// Если число меньше или равно 32, то вызываем функцию снова
// 	if(numbers <= 32)
// 		// Можно прописать просто название функции, но без скобок
// 		setTimeout(numbersToConsole, 120);
// }

function hello() {
    console.log("Hello", this);
}

const person = {
    name: "Vasja",
    age: 23,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} inafo`) 
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`phone is ${phone}`);
        console.log(`job is ${job}`);
        console.groupEnd
    }
}

const lena = {
    name: "Elena",
    age: 25
}
 //person.logInfo.bind(lena ,'frontend','122455')()
 //person.logInfo.call(lena ,'frontend','122455')
 person.logInfo.apply(lena ,'frontend','122455')
//fnLenaInfoLog('frontend','122455')