let urlName = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';

const myWorker = new Worker('../../Lesson_7/worker/worker.js')

function getCurrencies() {
    getData(urlName)
}


function getData(url){
    if(url == urlName){
        myWorker.postMessage(url)
        myWorker.onmessage= function(e){
            createOption(e.data)
        }
    }
    else{
        myWorker.postMessage(url)
        myWorker.onmessage= function(e){
            createArr(e.data)
        }
    }
       
}
getCurrencies();

function createOption(data){
    const select = document.querySelector('#curent');

    for (let i=0; i<data.length; i++){
        let obj = data[i];
        const option = document.createElement('option');
        option.setAttribute('class', 'cur');
        option.text = obj['Cur_Name'];
        option.value = obj['Cur_ID'];
        select.appendChild(option);
    }

}

let nameCurent;
let nameMounth = "Август";

function choiseMounth(){
    let valueMounth;
    const checkMounth = document.querySelectorAll('.mounth')

    checkMounth.forEach(element => {
        if(element.selected){
            valueMounth = element.value;
            nameMounth = element.innerHTML;
        }
    });
    startCurent(valueMounth);
}


function startCurent(valueMounth = 8 ){
    document.querySelector('.choiseMounth').style.display = "block";
    let idCurent;
    const checkOption = document.querySelectorAll('.cur');

    checkOption.forEach(element => {
        if(element.selected){
            idCurent = element.value;
            nameCurent = element.innerHTML;
        }
    });

    let date;

    if(valueMounth%2==0 && valueMounth!=2 ){
        date = `2020-${valueMounth}-1&endDate=2020-${valueMounth}-30`;
    }
    else if (valueMounth==2){
        date = `2020-${valueMounth}-1&endDate=2020-${valueMounth}-28`;
    }
    else{
        date = `2020-${valueMounth}-1&endDate=2020-${valueMounth}-31`;
    }
    let urlData = `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${idCurent}?startDate=${date}`;
    getData(urlData)

}

function createArr(data){
    const arrData = [];

    for (let i=0; i<data.length; i++){
        const obj = data[i];
        arrData.push([obj['Date'], obj['Cur_OfficialRate']])
    }
    createGraf(arrData)
}



function createGraf(data){
    
    Highcharts.chart('container', {
        
        title: {
            text: `Изменение курса ${nameCurent} в ${nameMounth} 2020 года`
        },
    
        yAxis: {
            title: {
                text: 'Стоимость валюты'
            }
        },
    
        xAxis: {
            title: {
                text: 'Дата'
            }
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1
            }
        },
    
        series: [{
            name: nameCurent,
            data: data
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 1500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });
    
}



