var canvas;
var backgroundImg;
var GameState = 0;
var PlayerCount;
var database;
var form;
var player;
var game;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.GetState();
  game.start();
}

function draw(){
}