var fixedRect, movingRect, fixedRect2, fixedRect3, fixedRect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  fixedRect2 = createSprite(800,400,50,80);
  fixedRect2.shapeColor = "green";
  //fixedRect.debug = true;
  fixedRect3 = createSprite(200,400,70,70);
  fixedRect3.shapeColor = "green";
  //fixedRect3.debug = true;
  fixedRect4 = createSprite(900,600,70,70);
  fixedRect4.shapeColor = "green";
  //fixedRect4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "blue";
    fixedRect2.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect3)){
    movingRect.shapeColor = "yellow";
    fixedRect3.shapeColor = "yellow";
  }
  else if(isTouching(movingRect,fixedRect4)){
    movingRect.shapeColor = "purple";
    fixedRect4.shapeColor = "purple";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
    fixedRect3.shapeColor = "green";
    fixedRect4.shapeColor = "green";
  }
  isTouching(movingRect,fixedRect);
  
  drawSprites();
}