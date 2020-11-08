var movingrect, fixrect
function setup() {
 createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200,200,50,50)
  fixrect.shapeColor = "blue"
  movingrect.shapeColor = "blue"
movingrect.velocityX = 2
fixrect.velocityX = -2
}

function draw() {
  background(255,255,255);  
  fixrect.debug = true
  movingrect.debug = true
  if(movingrect.x- fixrect.x < movingrect.width/2 + fixrect.width/2 && 
    fixrect.x- movingrect.x < movingrect.width/2 + fixrect.width/2){
      movingrect.velocityX = movingrect.velocityX*(-1)
      fixrect.velocityX = fixrect.velocityX*(-1)
  }
  if(movingrect.y- fixrect.y < movingrect.height/2 + fixrect.height/2 &&
    fixrect.y- movingrect.y < movingrect.height/2 + fixrect.height/2){
movingrect.velocityY = movingrect.velocityY*(-1)
fixrect.velocityY = fixrect.velocityY*(-1)
    }
  drawSprites();
}