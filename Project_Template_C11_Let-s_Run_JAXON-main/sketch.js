var boy,boyimg;
var road,roadimg
var invisibleboundry,invisibleboundry2
var coin
function preload()
   {
  //pre-load images
  boyimg = loadAnimation("Runner-1.png","Runner-2.png")
  roadimg = loadImage("path.png")
}


function setup()
{
  createCanvas(370,550,3);
  //create sprites here
  road = createSprite(175,200,20,20)
  road.addImage(roadimg)
  road.y = road.height/2

  boy = createSprite(150,490,20,20)
  boy.addAnimation("boy",boyimg)
  boy.scale=0.07

  invisibleboundry= createSprite (2,300,80,550);
  invisibleboundry.visible=false;
  invisibleboundry2= createSprite (380,300,80,550);
  invisibleboundry2.visible=false;
}

function draw() 
{
  background(0);
  //create infinite background
  road.velocityY = 3
  if(road.y>500){
    road.y=height/2}
  //Make the boy move left and right with the mouse
  boy.x=mouseX
  //Keep the boy in the boundries
  boy.collide(invisibleboundry);
  boy.collide(invisibleboundry2);
drawSprites();
}
