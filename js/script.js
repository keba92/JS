/**class Car {
    constructor (speed){
        this.speed = speed;
    }

    viewSpeed() { return `Моя скорость ${this.speed} км/ч`}
    
}

let audi = new Car (200);
let el = document.querySelector('#car');
el.innerText = audi.viewSpeed();
audi.speed = 250;
document.querySelector('#car2').innerText = audi.viewSpeed()*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
/** Напишите программу, которая выводит через console.log все числа от 1 до
100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна
выводить ‘Fuddy’, а для чисел, делящихся на 5 (но не на 3) – ‘Duddy’.*/

/** for (var i = 0; i<100 ; i++){
    if (i%3 === 0){
        console.log("fuddy");
    }
    else if (i%5 === 0){
        console.log("dutty");
    }
    else{
        console.log(i)
    }
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////
/** Исправьте 1-ю задачу так, чтобы она выводила «Fuddy-Duddy» для всех
чисел, которые делятся и на 3, и на 5. */


/**for (var i = 0; i<100 ; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log("fuddy - dutty");
    }
    else{
        console.log(i)
    }
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////
/** Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря,
 *  умножает x на себя n раз и возвращает результат. */

/**function pow (x,n) {
    return console.log(x**n)
};

pow(100,1);*/

////////////////////////////////////////////////////////////////////////////////////////////////////
/** Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex. */

/** function splitWord (sting, word){
    let wordNew = new RegExp(word, 'i');
    if (wordNew.test(sting)){
        console.log(word);
    }
    else {
        console.log("Not found");
    }
}

splitWord(" [SPAM] Y jhfsdf word sdfjksl", "spam");*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
/** Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов. 
 * Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'
 */


/**function newArr (text){
    let arr = text.split("");
    console.log(arr)
    if (arr.length > 20){
        let arr2 = arr.splice(0, 19, '...');
        let text2 = arr2.join('');
        console.log(text2 +"...")
    }
    else {
        console.log(text);
    }
    
}

newArr("Alexey Kebets Mikhailovich");*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function showName () {
    let fname = document.querySelector('.fname').value;
    let age = document.querySelector('.age').value;
    console.log(`Ваше имя: ${fname}`);
    console.log(`Ваш возраст: ${age}`);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function vvod () {
    let num = prompt("Введите число: ");
    if (num > 0){
        console.log("1");
    }
    else if (num < 0){
        console.log("-1");
    }
    else if (num == 0){
        console.log("0");
    }
    else {
        console.log("Ошибка ввода");
    }
}
//////////////////////////////////////////////////////////////////////////////

function treygolnik(){
    let stroka = document.querySelector(".stroka").value;
    let hash = ""
    for (let i=0; i < stroka; i++){
        hash = hash + "#";
        console.log(hash) 
    }
}
/////////////////////////////////////////////////////////////////////////////

