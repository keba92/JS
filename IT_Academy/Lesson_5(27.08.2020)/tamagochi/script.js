class CreateTama{
    name = "";

    constructor(name){
        this.name = name;
    }

    tamagochi(){

        let generalDiv = document.createElement('div');
            generalDiv.style.display = "inline-block";
            generalDiv.style.paddingLeft = "15px";
            generalDiv.style.textAlign = "center";

        let image = document.createElement('img');
            image.setAttribute('align', 'center');
            image.setAttribute('src', 'img/emoji.png');
            image.style.width = '200px'

        let nameH = document.createElement('h3');
            nameH.setAttribute('align', 'center');
            nameH.style.paddingTop = "5px";
            nameH.innerHTML = this.name;

        let textDiv = document.createElement('div');
            textDiv.innerHTML = 'Здоровье:';

        let liveDiv = document.createElement('div');
            liveDiv.innerHTML = '100';

        let btnAdd = document.createElement('button');
            btnAdd.innerHTML = 'Добавить жизни';
            btnAdd.setAttribute('align', 'center');

            generalDiv.appendChild(image);
            generalDiv.appendChild(nameH);
            generalDiv.appendChild(textDiv);
            generalDiv.appendChild(liveDiv);
            generalDiv.appendChild(btnAdd);

            document.querySelector('#tamagochi').appendChild(generalDiv);

        this.live(image,liveDiv, btnAdd);
    }


    live(image,liveDiv, btn){

        let health = 100;
        
        btn.addEventListener("click", function(){
            let data = parseInt(liveDiv.innerHTML);
                if(data<100){
                    data = data + 20;
                    health = data;
                    liveDiv.innerHTML = `${health}`;
                }
        },false)
                
        setInterval(function(){
            if(health>0){      
                health -= 20;
                liveDiv.innerHTML = `${health}`;
            }
            else{
                image.src = 'img/died.jpg';
                liveDiv.innerHTML = '<h3>Умер!!</h3>';
                btn.style.display = 'none';
            }
        },2500)
    }
}


function createTama(){
    let name = document.querySelector('#input').value;
    let creat = new CreateTama(name)
    creat.tamagochi();
}