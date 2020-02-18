var drawing, currentPath;
var button;

function setup(){
  var canvas = createCanvas(displayWidth,displayHeight);
  canvas.mousePressed(Path);
  canvas.mouseReleased(End)
  drawing = [];
  currentPath = [];
  button = new Button();
}

function Path(){
  drawing.push(currentPath);
}

function End(){
  currentPath = [];
}

function draw(){
  background(255);
  button.display();
  text("Press any key for instructions", displayWidth/2, 10);
  if(keyIsPressed){
  textSize(15);
  text("Press the Up or Down arrow keys to adjust the stroke weight.",displayWidth/4,displayHeight/8);
  }
  if(mouseIsPressed){
    var location = {
      x: mouseX,
      y: mouseY,
    };
    currentPath.push(location);
  }
  

   for(var i = 0; i<drawing.length ;i++){
    var path = drawing[i];
    beginShape();
    noFill();
    for(var j = 0; j<path.length ;j++){
      vertex(path[j].x,path[j].y); 
    }  
    endShape();
  }
  
}

function keyPressed(){
  if(keyCode === 38){
    strokeWeight(10);
  }
  else if(keyCode === 40){
    strokeWeight(3)
  }
}

