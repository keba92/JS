class Car {
    constructor (speed){
        this.speed = speed;
    }

    viewSpeed() { return `Моя скорость ${this.speed} км/ч`}
    
}

let audi = new Car (200);
let el = document.querySelector('#car');
el.innerText = audi.viewSpeed();
audi.speed = 250;
document.querySelector('#car2').innerText = audi.viewSpeed()