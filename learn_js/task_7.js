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