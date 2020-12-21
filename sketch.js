var object1,object2;


function setup() {
  createCanvas(800,400);
  object1=createSprite(400, 200, 50, 50);
  object2=createSprite(200,200,50,50);
}

function draw() {
  background("green");  
  object1.x=mouseX;
  object1.y=mouseY;
  object1.velocityX=5;
  object1.velocityY=5;
  object2.velocityX=5;
  object2.velocityY=5;
  if(object1.x-object2.x <=object1.width/2+object2.width/2
    &&object2.x-object1.x<=object1.width/2+object2.width/2
    &&object1.y-object2.y <=object1.height/2+object2.height/2
    &&object2.y-object1.y<=object1.height/2+object2.height/2){
    object2.shapeColor="red";
  }
  else {
    object2.shapeColor="grey";
  }
   if(object1.x-object2.x <=object1.width/2+object2.width/2
    &&object2.x-object1.x<=object1.width/2+object2.width/2){
      object2.velocityX=-(object2.velocityX);
      object1.velocityX=-(object1.velocityX);
    }
    if(object1.y-object2.y <=object1.height/2+object2.height/2
      &&object2.y-object1.y<=object1.height/2+object2.height/2){
        object2.velocityY=-(object2.velocityY);
        object1.velocityY=-(object1.velocityY);
      }



  drawSprites();
 
}