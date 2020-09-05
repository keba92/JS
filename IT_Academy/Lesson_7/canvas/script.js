function draw(){
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");

    const arrRadius = [40, 30, 20, 11];
    const arrColor = ['white','white','white','black']
    const angles=Math.PI*2/6;

    for(let i=0; i<arrRadius.length; i++){
        ctx.translate(75,50);
        ctx.rotate(11);
        ctx.beginPath();
        ctx.moveTo(arrRadius[i],0);
        for(let j=1;j<6;j++){
            ctx.rotate(angles);
            ctx.lineTo(arrRadius[i],0);
        }
        ctx.closePath();
        ctx.fillStyle=arrColor[i];
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 7;
        ctx.stroke();
        ctx.fill();
        ctx.rotate(angles*-(6-1));
        ctx.rotate(-11);
        ctx.translate(-75,-50);
    }
}
