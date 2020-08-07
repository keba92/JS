/** Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex. */

function splitWord (sting, word){
    let wordNew = new RegExp(word, 'i');
    if (wordNew.test(sting)){
        console.log(word);
    }
    else {
        console.log("Not found");
    }
}

splitWord(" [SPAM] Y jhfsdf word sdfjksl", "spam");