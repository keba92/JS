let answer = prompt('Если хотите изменять элементы с четными и нечетными индексами, то введите "1", а если хотите изменить четные или нечетные элементы массива, то введите "2":')
function changeArr(num){
    const data = prompt('Введите числа:');
    const arr = data.replace(/[^\d;]/g, '').split('');
    (answer =="1")?arr.map((el,index) =>(index%2==0||index==0)?arr[index]= el*4:arr[index]= el/2):arr.map((el,index) =>(el%2==0||el==0)?arr[index]= el*4:arr[index]= el/2);
    alert(`Преобразованный массив: [${arr}]`);
}
(answer == "1"||answer == "2")?changeArr(answer):alert(`Вы ввели "${answer}", а необходимо "1" или "2"`);
