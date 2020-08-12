var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, Tsignup, game, main, player; 

var car1,car2,car3,car4,cars;  
var teacher, title, student, btnSignUp1, btnSignUp2, btnLogin1, btnLogin2, signup; 
//var mixedGroup; 

//design images 
var Dt1,Dt2;  

//design names 
var t1, t2; 


var bg,background, marble, marbleImg, SignupLogin, title, teacherImg, studentImg, SignupImg1, LoginImg1, SignupImg2, LoginImg2,  tsingup; 

function preload(){ 
  SignupLogin= loadImage("Images/Sign-UpLogin.png"); 
  marbleImg= loadImage("Images/marble.png"); 
  teacherImg=loadImage("Images/Teacher.png"); 
  studentImg=loadImage("Images/Student.png");  
  SignupImg1=loadImage("Images/Sign-Up.png"); 
  LoginImg1=loadImage("Images/Log-in.png");  
  SignupImg2=loadImage("Images/Sign-Up.png"); 
  LoginImg2=loadImage("Images/Log-in.png");   

  Dt1=loadImage("Images/T1.png");  
  Dt2=loadImage("Images/T2.png"); 
  tsignup=loadImage("Images/TSignUp.png");   
  tenter=loadImage("Images/TEnter.png");   

  bg=loadImage("Images/bg.png");
}


function setup(){
  canvas = createCanvas(displayWidth+400,displayHeight+80);  
  //canvas = createCanvas(displayWidth-20,displayHeight-30);  


 // mixedGroup= createGroup();


  database = firebase.database();
  main = new Main();
  main.getState();
  main.start();   
 // main.next();  
  //Tsingup=new TSignUp;   
  //Tsignup=new TSignUp(); 

  
 
}


function draw(){ 
  background(224,200,202);  
     
  //background= createSprite(displayWidth+400,displayHeight+80); 
  //background= addImage("bg", bg);

  //mixedGroup= createGroup();
  /*if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }*/  
  //Tsignup.display();  

  
  
  drawSprites();

}
