var frogimage;
var worm1;
function preload() {
  backg=loadImage("city.png")
  worm1=loadImage("wormbg.png")


frogimage=loadImage("shinchan.png")
}
var player,wormgroup,score=0;
var bg;

function setup() {
  createCanvas(600,600);
 bg=createSprite(300,300)
 bg.scale=1.2
 player=createSprite(90,80,20,20)
 player.scale=0.3
 wormgroup=new Group()
}

function draw() {
  background("black");  
  bg.addImage(backg)
  player.addImage(frogimage)
  player.x=mouseX
  player.y=mouseY
  strokeWeight(7);
stroke(255);
noFill();

  ellipse(90,300,40,30)
generateworms()
for (var i=0;i<wormgroup.length;i++){
  var temp=wormgroup.get(i)
  if (player.isTouching(temp)){
    temp.destroy()
    score++
    
  }
}
if (player.x>50 && player.x<150 && player.y<350 && player.y>250){
  player.x=30 
  player.y=30
}
  drawSprites()
  textSize(50);
  text(score, 10, 30);
}
function generateworms(){
  if (frameCount % 9==0){
    var worm=createSprite(90,300,40,5)
    worm.x=random(100,500)
    worm.y=random(100,500)
    worm.scale=0.07
    worm.shapeColor="red"
    worm.addImage(worm1)
  worm.velocityX=random(-5,5);

  worm.velocityY=random(-5, 5);

wormgroup.add(worm)
  }
  
}
