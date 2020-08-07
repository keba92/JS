/** Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов. 
 * Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'
 */


function newArr (text){
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

newArr("Alexey Kebets Mikhailovich");