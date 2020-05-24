

var supply;
var helicopter;

function setup(){
    var canvas = createCanvas(400,400);
   helicopter=createSprite(350,200,50,20);
   helicopter.velocityX=2;
 

   supply=createSprite(350,200,10,10);
supply.velocityX=helicopter.velocityX;

   
}

function draw(){
    background(0);
   helicopter.display;
   supply.display;

   if(keyDown("DOWN_ARROW"))
{
   supply.velocityY=-2;
}

}