document.addEventListener("DOMContentLoaded" , ()=>{

 let table=document.getElementById("ping-pong-table");
 let ball= document.getElementById("ball"); // targeting the ball element
 let paddle=document.getElementById("paddle"); // targeting the paddle 

 // here the ballX and ballY will be helping us to get the starting point of the ball w.r.t to table 

 let ballX=50; // distance of top of the ball w.r.t to ping pong table
 let ballY=50; // distance of left of the ball w.r.t to ping pong table

 let dx=2;  // displacement factor in X direction , 2 -> you will displace by 2px in + X direction , -2 -> you will displace by 2px in - X 
 let dy=2;  // displacement factor in Y direction , 2 -> you will displace by 2px in + Y direction , -2 -> you will displace by 2px in  -Y

 ball.style.left = `${ballX}px`;
 ball.style.top=`${ballY}px`;

setInterval(function exe() {

ballX += dx;
ballY += dy;

ball.style.left= `${ballX}px`;
ball.style.top= `${ballY}px`;


// if(ballX >700-20 || ballX <=0) dx*=-1;
// if(ballY >400-20 || ballY <=0) dy*=-1;

  if(ballX < paddle.offsetLeft + paddle.offsetWidth &&  
  
   ballY > paddle.offsetTop  &&
   ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight

  ){
     dx*=-1;

  }

 if(ballX >table.offsetWidth-ball.offsetWidth  || ballX <=0) dx*= -1;
 if(ballY >table.offsetHeight-ball.offsetHeight  || ballY <=0) dy*= -1;

}, 9);

let PaddleY=0;
let dPy=5; // displacment in Y direction 

document.addEventListener("keydown",(event)=>{

   event.preventDefault();  // prevents the default execution of any event 

 if(event.keyCode==38 && PaddleY >0){
    // up arrow 
    console.log("up key ")
    PaddleY += (-1)*dPy;
    console.log(PaddleY);
 } else if(event.keyCode==40 && PaddleY< table.offsetHeight - paddle.offsetHeight){
    // down arrow 
    console.log("down key");
    PaddleY += dPy;
 }

  paddle.style.top=`${PaddleY}px`;



});


document.addEventListener("mousemove", (event) => {
   let mouseDistanceFromTop = event.clientY; // distance of the mouse pointer from the top of the screen
   let distanceOfTableFromTop = table.offsetTop;
   let mousePointControl = mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight / 2;
   
   PaddleY=mousePointControl;
   // Assuming PaddleY should be mousePointControl
   if (mousePointControl <= 0 || mousePointControl > table.offsetHeight - paddle.offsetHeight) return;
   
   paddle.style.top = `${PaddleY}px`;
});






});