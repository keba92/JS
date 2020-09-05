let urlName = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';
onmessage =  function(e){
    fetch(e.data)
        .then(response=>response.json())
        .then(data=>{
            postMessage(data)
        })
        .catch(error =>console.log(error))
   
}
