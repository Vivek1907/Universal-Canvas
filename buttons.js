class Button{
    constructor(){
    this.red = createButton('Red');
    this.blue = createButton('Blue');
    this.green = createButton('Green');
    this.eraser = createButton('Eraser');
    }
    display(){
       this.red.position(displayWidth/4,20);
       this.blue.position(displayWidth/2,20);
       this.green.position(displayWidth*3/4,20);
       this.eraser.position(displayWidth/2,50);
       this.red.mousePressed(()=>{
          stroke("#ff0000");
       });
       this.blue.mousePressed(()=>{
        stroke("#00ccff");
     });
       this.green.mousePressed(()=>{
        stroke("#00ff00");
     });
    this.eraser.mousePressed(()=>{
        stroke(255);
     });
    }
}