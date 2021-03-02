// let i = 0;
// function CloneP (){
//     let pageg = $('p:first').clone().html(`Номер блока - ${i}`);
//     console.log(pageg);
//     $('body').append(pageg);
//     console.log(pageg);
//     i++;
// } 
// $("#btn").bind("mouseover", function () {
// 	// Можно использовать $("#btn"),
// 	// но если мы работаем с тем же элементом
// 	// к которому прикреплен обработчик событий,
// 	// то можно использовать $(this).
// 	$(this).attr("disabled", "disabled");
// 	// Добавляем аттрибут disabled для деактивации кнопки
// });

// function createSumNum(n) {
//     return function (num) {
//         return n + num
        
//     }
// }

// let Sumy = createSumNum(15);

// console.log(Sumy(1));

function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 19, job: 'SMM'}

function bind(context, fn){
    return function(...args){
        fn.apply(context,args)
    }
}

bind(person1, logPerson)();
bind(person2, logPerson)();