function setup() {
  createCanvas(400, 400);
  background(220);
  x = width/2; //using variables to make the duck as a whole moveable
  y = height*0.8-80;
  colR = 255;  // using variables for colour to easily change in future code
  colG = 255;
  colB = 0;
  pondTrace = 0;
  bob = 0;
  speed = random(20); // the speed ofthe pond is dictated by the multiplier of the sin function, I will make this variable constant between the bobboing of the duck and the speed of the water, and make it random to change the ducks speed each time you watch it.
}

function draw(){
    background(220);
    
  
    y = height*0.8-80+(speed*sin(pondTrace/20 -bob + width/2));
  
    // duck body shapes
    stroke(colR,colG,colB);
    fill(colR,colG,colB);
    circle(x,y,50);
    circle(x+45,y+40,50);
    ellipse(x+20,y+50,100,60);

    //duck bill shapes
    stroke(colG, colB, abs(colR+100));
    fill(colG, colB, abs(colR+100));
    ellipse(x-20,y,30,10);
    ellipse(x-15,y-5,15,5);

    //duck eye shapes  
          //eye white
    stroke(0,0,0);
    fill(0,0,0);
    circle(x+10,y-5,11)
          // eye black
    stroke(255,255,255);
    fill(255,255,255);
    circle(x+12,y-10,5)
    // those are all the parts I need to draw a duck!
  
  // draw a pond for duck to float on
  fill(0,255,255);
  stroke(0,255,255);
    // quad to fill in the lower water
  quad(0, height*0.8, width, height*0.8, width, height, 0, height);
    // tracing the water with a circel on a while loop.
  while (pondTrace < width){
    fill(0,255,255);
    stroke(0,255,255);
    // width of circle is 20px, want centre of circle to oscilate around height*0.8. i.e. 20*sin(x/20 - displacement)-0.8height
    circle(pondTrace,(speed*sin(pondTrace/20 - bob)+(height*0.8)),40);
    pondTrace += 1;
  }
  pondTrace = 0; //reset trace index to 0 to keep updating the pond
  bob += 0.1; // increment bob to move the pond (doesnt need to be reset becuase a sin function does not have a finite limit for real numbers)
  
}

