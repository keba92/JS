const urlData = 'https://www.nbrb.by/API/ExRates/Rates/Dynamics/292?startDate=2020-8-1&endDate=2020-8-30';

function getData(){
    fetch(urlData)
        .then((response)=>response.json())
        .then(data=> createArr(data))
        .catch((error) =>{
            if (error){
                createArr(JSON.parse(localStorage.getItem('292')))
            }   
        })
}
getData()


function createArr(data){
    const arrData = [];
    
    for (let i=0; i<data.length; i++){
        const obj = data[i];
        arrData.push([obj['Date'], obj['Cur_OfficialRate']])
    }
    localStorage.setItem(`292`, JSON.stringify(data))
    return createGraf(arrData)
}


function clearStorage(){
    localStorage.clear();
}


function createGraf(data){
    
    Highcharts.chart('container', {
        
        title: {
            text: `Изменение курса Евро в Августе 2020 года`
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
            name: "Евро",
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

function clearStorage(){
    localStorage.clear();
}