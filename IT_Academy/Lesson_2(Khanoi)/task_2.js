  /**  let i = 0;                                              // Первоначальное количество перекладываний

    function startKhanoi(){                                 // При нажатии "Расчитать" выполняется данная функция
        let data = document.querySelector('#vvod').value;   // Получаем данные из input с id = vvod 
        khanoi(data);                                       // Запускаем функцию для вычисления перекладываний и передаем ей количество дисков
    }

    function khanoi(n){
        if (n >0){                                          // Если количество переданных дисков отличное от нуля, то выполняем рекурсию
            khanoi(n-1);
            khanoi(n-1); 
            i++;                                            // Счетчик количества перекладываний
        }
        document.querySelector('#vivod').value = i;         // Вывод количество перекладываний в input c id = vivod
    }

    function clearResult(){                                 // При нажатии "Очистить результат" данная фунуция очищает поля и обнуляет счетчик
        document.querySelector('#vivod').value = "";
        document.querySelector('#vvod').value = "";
        i=0;
    }  */

    /** Решение корявое_ так как счетчик перегружает оперативу, но я обещаю исправится :-)   */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    /** Как и обещал, не много исправил счетчик исходя из математических расчетов (upd 23-08-2020)*/

    function startKhanoi(){                                 
        const data = document.querySelector('#vvod').value;   
        khanoi(data);                                      
    }

    function khanoi(n){
        if (n >0){                                          
            khanoi(n-1);
            khanoi(n-1);                                             
        }
        const count = Math.pow(2,n) - 1;
        document.querySelector('#vivod').value = count;         
    }

    function clearResult(){                                 
        document.querySelector('#vivod').value = "";
        document.querySelector('#vvod').value = "";
    }