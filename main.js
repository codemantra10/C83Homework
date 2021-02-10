var lastX;
var lastY;
canvas=document.getElementById("myCanvas");
veryimportant=canvas.getContext("2d");
var width=screen.width;
var newW=screen.width-70;
var newH=screen.height-250;
if (width<992) {
document.getElementById("myCanvas").width=newW;
document.getElementById("myCanvas").height=newH;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", mytouchstart);
function mytouchstart(e){
lastX=e.touches[0].clientX-canvas.offsetLeft;
lastY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
currentX=e.touches[0].clientX-canvas.offsetLeft;
currentY=e.touches[0].clientY-canvas.offsetTop;
veryimportant.beginPath(); 
veryimportant.strokeStyle=document.getElementById("color").value;
veryimportant.lineWidth=document.getElementById("width").value;
veryimportant.moveTo(lastX,lastY);
veryimportant.lineTo(currentX,currentY);
veryimportant.stroke();
lastX=currentX;
lastY=currentY;
}