function getData(){
    fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
        .then(response=>response.json())
        .then(data=>createTable(data))
        .catch(() =>alert("error"))
}
function createTable(data){
    let table = document.createElement('table');
        table.setAttribute('border', '1');
        table.setAttribute('color', '000');
        table.setAttribute('width','500');
        table.setAttribute('height', '300');
        table.setAttribute('align', 'center');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
        tr.setAttribute('bgcolor', '#C0C0C0');
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