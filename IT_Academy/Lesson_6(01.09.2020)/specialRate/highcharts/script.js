const url = `https://www.nbrb.by/api/exrates/rates/dynamics/298?startdate=2019-09-03T00:00:00&enddate=2020-09-01T00:00:00`;
        fetch(url)
            .then(response=>response.json())
            .then(obj=>createObjRate(obj))
            .catch(error => alert(error))


        const dataObj = [];
        function createObjRate(arr){
            const arrRates =[];
            for(let i=0; i<arr.length; i++){
                let obj = arr[i];
                arrRates.push(obj['Cur_OfficialRate']);
            }
            for(let i=0; i<arrRates.length; i++){
                let cout = 1;
                for(let j=i-1; j>=0; j--){
                    if(arrRates[i]>arrRates[j]){
                        ++cout
                    }
                    else if(arrRates[i]<=arrRates[j]){
                       j=0;
                    }
                }
                dataObj.push({rate: arrRates[i], specialRate : cout})
            }
            console.log(dataObj)
            createArr(dataObj)
        }


function createArr(data){
    const arrData = [];
    
        
    for (let i=0; i<data.length; i++){
        const obj = data[i];
        arrData.push([obj['rate'], obj['specialRate']])
    }
    console.log(arrData)
    createGraf(arrData)

}


function createGraf(data){
    
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'SpecialRate Российского рубля за год'
        },
        xAxis: {
            type: 'Курс валюты',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'SpacialRate'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'SpecialRate: <b>{point.y:.1f}</b>'
        },
        series: [{
            name: 'SpecialRate',
            data: data,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}
