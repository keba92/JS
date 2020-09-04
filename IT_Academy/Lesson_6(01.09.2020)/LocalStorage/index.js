function getData(){
    let key = localStorage.key('data');
    (key)? createTable(JSON.parse(localStorage.getItem('data'))): getFetch();   
}

function getFetch(){
    const url = 'https://www.nbrb.by/api/exrates/rates?periodicity=0'; 
    fetch(url)
        .then((response)=>response.json())
        .then(data=>createTable(data))
        .catch((error) =>alert(error))
}

function createTable(data){
    localStorage.setItem('data', JSON.stringify(data))
    let table = document.createElement('table');
        table.setAttribute('align', 'center');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
        tr.innerHTML = '<th>Id</th><th>Дата обновления</th><th>Аббревиатура валюты</th><th>Количество единиц иностранной валюты</th><th>Наименование валюты</th><th>Установленый курс валют</th>';
        tbody.appendChild(tr);
    for (let i=0; i<data.length; i++){
        let tr = document.createElement('tr');
        let obj = data[i];
        for (let key in obj){
            let td = document.createElement('td');
            let item = obj[key];
            td.innerHTML = item;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.querySelector('#create').appendChild(table);
}

function clearStorage(){
    localStorage.clear();
}