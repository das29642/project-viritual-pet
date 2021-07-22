//Create variables here
var dog;
var happydog;
var database;
var foodS;
var foodStock;


function preload()
{
dog=loadImage("dogImg.png");
happydog=loadImage("dogImg.png");

}

function setup() {
	createCanvas(500, 500);
  dogSprite();
  addImage("images/dogImg.png")

foodStock=database.ref('food');
foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);
if (keyDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
textSize(h3);
Fill(peach);
stroke();
//functions to read values from DB
function readStock(data){
  foods-data.val();

}
//functions to write values in DB
function writeStrock(x) {
if(x<=0){
  x=0;}
else{x=x-1;
}
  database.ref('/').update({
food:x
})
  
}
}
