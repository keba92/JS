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

/** function showName () {
    let fname = document.querySelector('.fname').value;
    let age = document.querySelector('.age').value;
    console.log(`Ваше имя: ${fname}`);
    console.log(`Ваш возраст: ${age}`);
} */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** function vvod () {
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
} */
//////////////////////////////////////////////////////////////////////////////

/** function treygolnik(){
    let stroka = document.querySelector(".stroka").value;
    let hash = ""
    for (let i=0; i < stroka; i++){
        hash = hash + "#";
        console.log(hash) 
    }
} */
/////////////////////////////////////////////////////////////////////////////

/** function getCount(str) {
    var vowelsCount = 0;
    let arr = str.split("");
    for (let i=0; i<arr.length; i++){
        if (arr[i] == "a"){
            vowelsCount += 1;
        }
        else if (arr[i] == "e"){
            vowelsCount += 1;
        }
        else if (arr[i] == "i"){
            vowelsCount += 1;
        }
        else if (arr[i] == "o"){
            vowelsCount += 1;
        }
        else if (arr[i] == "u"){
            vowelsCount += 1;
        }
        else{
        }
    }   
    return vowelsCount;
  } */

  //////////////////////////////////////////////////////////////////////////////////
  /**Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

    Examples input/output:

    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
 */

/** function XO(str) {
    const arr = str.toLowerCase().split("");
    let O = 0;
    let X = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i] == "x"){
            X+=1;
        }
        else if (arr[i] == "o"){
            O+=1;
        }
        else{
        }
    }
    if (X == O){
        return true;
    }
    else {
        return false;
    }
} */
////////////////////////////////////////////////////////////////////////////////////////////
/**
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

 */

/** function arrayDiff(a, b) {
  let c = a.filter(i=>b.indexOf(i) === -1);
  return c;
} */

//////////////////////////////////////////////////////////////////////////////////////////////////
/**You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}: Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}: Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index. */

/**
function findEvenIndex(arr)
{
  let sumR = 0;
  let sumL = 0;
  let revArr = arr.reverse()
  for (let i = 0; i<arr.length; i++){
      sumL +=arr[i];

  }
  for (let j = 0; j<revArr.length; j++){
    sumR +=revArr[j];
    if(sumL == sumR){
        console.log(sumL)
    }
  }
} */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
var maxSequence = function(arr){
    let currentVal = 0;
    let highestVal = 0
    for(let val of arr){
        currentVal += val;
        if(currentVal < 0) currentVal = 0;
        else if(currentVal > highestVal) highestVal = currentVal
    }
  return highestVal
}
  maxSequence([])
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.
Don't mutate the inputs. */


/** function inArray(array1,array2){
    let newArr = [];
    for (let i = 0; i<array1.length; i++){
        for (let j = i; j<array2.length; j++){
            let wordNew = new RegExp(array1[i], 'i');
            if (wordNew.test(array2[j])){
                newArr.push(array1[i]);
            }
        }
    }
    console.log(newArr)
}

inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////gg
/**Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)*/

/**function alphabetPosition(text) {
    let word = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let newArr = [];
    text.toLowerCase().replace(/[\s.,%]/g, '').split("").map(i=>{
        let idx = word.indexOf(i);
        if(idx>=0){
            let newIdx = idx + 1;
            return newArr.push(newIdx);
        }
    });
    return newArr.join(' ');
  }
  alphabetPosition("The sunset sets at twelve o' clock.");*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.*/

/**function findUniq(arr) {
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr.length >3){
            if(arr[i] != arr[i+1] && arr[i] != arr[i-1]){
                newArr.push(arr[i]);   
            }
        }
        else{
            if(arr[0] != arr[1] && arr[0] != arr[2]){
                newArr.push(arr[0]);
            }
            else if (arr[1]!=arr[0] && arr[1]!=arr[2]){
                newArr.push(arr[1]);
            }
        }
    }
    console.log(newArr[0]);
  }
  
  findUniq([  1, 1, 2, 1, 1, 1 ])*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
