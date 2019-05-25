const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
  if (searchBox.style.top == '72px') {
    searchBox.style.top = '24px';
    searchBox.style.pointerEvents = 'none';
  } else {
    searchBox.style.top = '72px';
    searchBox.style.pointerEvents = 'auto';
  }
});

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})

//CAROUSEL banner
var i=0;
var images=[];
var time=3000;

images[0]="url('img/3.jpg')";
images[1]="url('img/9.jpg')";
images[2]="url('img/2.jpg')";

function changeImg(){
  document.getElementById("banner").style.backgroundImage = images[i];

if (i< images.length - 1){
  i++;

}else
i=0;


setTimeout("changeImg()",time);
}
window.onload=changeImg;

//carousel events
var x=0;
var image=[];
var time1=9000;

image[0]='img/8.jpg';
image[1]='img/12.jpg';
image[2]='img/10.jpg';


function changeImg1(){
  document.slide.src = image[x];

if (x< image.length - 1){
  x++;}

else
x=0;

}




var y=0;
var imag=[];
var tim=9000;

imag[0]='img/anubh.jpg';
imag[1]='img/12.jpg';
imag[2]='img/10.jpg';


function changeIm(){
  document.slide1.src = imag[y];

if (y< imag.length - 1){
  y++;}

else
y=0;

}


//animation

var hero= document.getElementById('hero');
var left=20;
var step_num = 1;
var step_sound= new Audio('ani/Lock And Load-SoundBible.com-658079324.mp3');
var move_hero = function(){
  left=left + 20;
  if (left> 120)
    {document.getElementById("hero").style.visibility = "hidden";
    return;}
  if(step_num > 8){
    step_num = 1;
  }
  
  

 hero.style.left= left +'px';
   hero.src='ani/hero_walking_'+step_num+ '.png';

step_num=step_num+1;

setTimeout(move_hero, 100);
 
 

  step_sound.play();


 }

var b=window.confirm("TO UNLOCK THIS SITE U NEED TO FIRST FIGHT OUR GAURD");
function con_box() {
  document.querySelector('.bg-modal').style.display = "flex";
}

if(b) 
  {
    con_box();
}

document.querySelector('.close').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "none";
});




//game
var choices=["paper", "rock", "scissors"];
var z= Math.floor(Math.random () * 3);
var ComputerChoice= choices[z];
var UserPoints =0;
var ComputerPoints=0;
function score(){
  var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComputerPoints;
}
setInterval(score, 3);

function game(UserChoice){
  var box=document.getElementById("g_umsg");
  box.style.display="none";
var box1=document.getElementById("g_cmsg");
  box1.style.display="none";
 var box2=document.getElementById("g_dmsg");
  box2.style.display="none";
  

if(UserChoice=== "paper"&& ComputerChoice==="rock"||UserChoice=== "rock"&& ComputerChoice==="scissors"||UserChoice=== "scissors"&& ComputerChoice==="paper"){
  win();
}
else if(UserChoice=== ComputerChoice){
  draw();
}
else{
  lose();
}
function continueGame(){
   z= Math.floor(Math.random () * 3);
 ComputerChoice= choices[z];
 box.style.display="none"; 
  box1.style.display="none";
  box2.style.display="none";
}
 var myvar= setTimeout(continueGame, 1200);
if (UserPoints==3||ComputerPoints==3){
  clearTimeout(myvar);
  if(ComputerPoints==3){
  var box4=document.getElementById("g_lmsg");
  box4.style.display="inline-flex";}
  else if (UserPoints==3){
    var box4=document.getElementById("g_fmsg");
  box4.style.display="inline-flex";
  }
  setTimeout(function(){
document.querySelector(".bg-modal").style.display = "none"; 
}, 1150);
 move_hero();
}

}
function win(){
  UserPoints++;
   box=document.getElementById("g_umsg");
  box.style.display="inline-flex";
}
function lose(){
  ComputerPoints++;
  box1=document.getElementById("g_cmsg");
  box1.style.display="inline-flex";
}
function draw(){
   box2=document.getElementById("g_dmsg");
  box2.style.display="inline-flex";
  
}
