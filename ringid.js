let canvas;
let ctx;
let startA = 0;
let endA = 2 * Math.PI; 


window.onload = function(){
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext("2d");
  ctx.canvas.width  = window.innerWidth-20;
  ctx.canvas.height = window.innerHeight-20;
	ctx.strokeStyle = "black";
	ctx.lineWidth = 4;
	ctx.translate(0, canvas.height);
	ctx.scale(1, -1);
	
	let x = canvas.width  / 2;
  let y = canvas.height / 2;
  let r = canvas.width  / 4 - 40;
	
  drawCircle(x, y, r, startA, endA);
   
}


function drawCircle(x, y, r, startA, endA){	
	
	ctx.beginPath();
		//kaar keskpunkt x, y, r, kaare algusnurk, kaare lõppnurk
    ctx.fillStyle = 'rgb(' + parseInt(Math.random() * 255) + ',' + parseInt(Math.random() * 255) + ',' + parseInt(Math.random() * 255) + ')';
		ctx.arc(x, y, r, startA, endA);
    

		ctx.stroke();
		ctx.fill();
	ctx.closePath();

	if(r > 5){
    
    drawCircle(x, y + r/2, r/2, startA, endA);
    drawCircle(x, y - r/2, r/2, startA, endA);
    drawCircle(x + r/2, y, r/2, startA, endA);
    drawCircle(x - r/2, y, r/2, startA, endA);
    setTimeout(function() {
      location.reload();
      }, 1000);
 
    
  }
  
  
	
}
