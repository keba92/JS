/** Исправьте 1-ю задачу так, чтобы она выводила «Fuddy-Duddy» для всех
чисел, которые делятся и на 3, и на 5. */


for (var i = 0; i<100 ; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log("fuddy - dutty");
    }
    else{
        console.log(i)
    }
}