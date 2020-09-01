const objLite = {
    abs : 5,
    track: 5,
    stab: 5,
    change: function(){
        document.querySelector('#abs').value = this.abs;
        document.querySelector('#traction').value = this.track;
        document.querySelector('#stability').value = this.stab;
    }
}

const objMedium = {
    abs : 3,
    track: 2,
    stab: 4
}

const objStrong = {
    abs : 1,
    track: 2,
    stab: 0
}

let lite = objLite.change.bind(objLite);
let medium = objLite.change.bind(objMedium);
let strong = objLite.change.bind(objStrong);


