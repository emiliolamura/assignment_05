var a = 0
var b = 0
var immagine;
var h = 100;
var analyser;
var song, myRate=1;



function preload(){
immagine = loadImage("assets/1.png")
song = loadSound("assets/audio2.mp3");

}


function setup() {
  frameRate(30);
  createCanvas(500,500)
  angleMode(DEGREES)
  analyser = new p5.Amplitude()
  analyser.setInput(song)
    song.loop();

}


function draw() {
  a++
  b++
  time = a
  song.rate(mouseY/height*0.03+a/100);

if (mouseY <= 230)
{ 

  var h = 0;
  a = (a-a/20 )

  //a = a+=-1 
  }
  
 else {
var h = 100 ;  a = a + 2

  if (song.isPlaying() == false ) {


  }
}


var z = time/h;
background(28,36,35,120) 
fill(100)
text('Move the Mouse UP and DOWN',165,483)
translate(cos(time*6*z)*1,sin(time*9*z)*1)
image(immagine,0,0,500,500)



gears()


push()
piston()
pop()

push()
piston2()
pop()

push()
translate(19,0)
barre(4)
pop()

push()
translate(30,0)
barre(7)
pop()

push()
translate(7,0)
barre(2)
pop()

push()
translate(-4,0)
barre(4)
pop()


push()
stroke(200)
strokeWeight(6)
line(220,180+mouseY/6,230,230)
noStroke()
fill(0,216,248)
ellipse(220,180+mouseY/6,30)
pop()

noStroke()
fill(254,241,126)
rect(105,255,50,40)
}


function barre(b){
if (mouseY <= 200){
  var h = 0;
} else { var h = 300;  }
  
var z = time/h;
translate(85,-180-sin(time*9*z)*10)

translate(width/2,height/2)
noStroke()
fill(0,216,248)
rect(-220,175-sin(time*b*z)*10,8,30)
}



function piston(){
var z = time/h;

push()
translate(width/2,height/2)
translate(85,-180-sin(time*9*z)*10)

fill(186,177,75)
noStroke()
rect(0,0,20,-15-sin(time*9*z)*10)
fill(254,241,126)
rect(-3,-16,26,17)

}


function piston2(){
var z = time/h;

push()
translate(width/2,height/2)
translate(134,-130)

fill(186,177,75)
noStroke()
rect(0,0,15-sin(time*9*z)*10,20)
fill(254,241,126)
rect(15-sin(time*9*z)*10,-3,17,26)

}


function gear(f,r){
var z = time/h;

push()
translate(width/2,height/2)
rotate(f)
fill(254,241,126)
noStroke()
ellipse(0,0,r)
strokeWeight(6)
stroke(186,177,75)
line(-r*0.3,0,r*0.3,0)
pop()
  
}

function gear2(f,r){
var z = time/h;

push()
translate(width/2,height/2)
rotate(f)
fill(186,177,75)
noStroke()
ellipse(0,0,r)
strokeWeight(6)
stroke(255,242,103)
line(-r*0.2,0,r*0.2,0)
pop()
  
}

function linea1(){
var z = time/h;

  
push()
translate(width/2,height/2)
strokeWeight(9)
stroke(0,216,248)
noFill()
line(cos(time*2*z)*80,sin(time*2*z)*80,80+cos(time*2*z)*80,0)
line(80+cos(time*2*z)*80,0,190,0)
fill(254,241,126)
noStroke()
fill(186,177,75)

ellipse(cos(time*2*z)*80,sin(time*2*z)*80,25,25)

ellipse(80+cos(time*2*z)*80,0,25,25)

rect(180,-10,17,20)
pop()  
}


function gear3(f,r){
var z = time/h;

push()
translate(width/2,height/2)
rotate(f)

fill(254,241,126)
noStroke()
ellipse(0,0,r)
strokeWeight(6)
stroke(186,177,75)
line(0,-r*0.3,0,r*0.3)
strokeWeight(9)
stroke(0,216,248)
line(0,0,80,0)
pop()
}

function gears(){
var z = time/h;

push()
translate(-120,-140)
gear3(time*2*z,120)
linea1()
pop()

push()
translate(155,-35)
gear(time*6*z,60)
pop()

push()
translate(85,100)
gear(time*8*z,30)
pop()

push()
translate(20,65)
gear2(time*7*z,40)
pop()

push()
translate(-120,120)
gear(time*2*z,70)
pop()
}

