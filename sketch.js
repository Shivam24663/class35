var gameState=0;
var database;
var form;
var playerCount=0;
var player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
    drawSprites();
}