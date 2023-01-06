const CANVAS = document.getElementById('myCanvas');
const CANVAS_CONTEXT = CANVAS.getContext("2d");

class HundredBlock{
    
}

class TenBlock{
    
}

class UnitBlock{
    constructor(posX, posY, scale){
        this.posX = posX;
        this.posY = posY;
        this.scale = scale;
        if(scale > 1 || scale < 0){
            throw "The size should be between 0 and 1 (inclusive). The size you have inputted is" + this.size + ". "
        }
        this.sideLength = Math.min(CANVAS.width, CANVAS.height)*this.scale;
    }

    /* Draws a unit block (square) on the canvas at given (x, y) coordinates.
       The unit block's side length is scaled relative to the canvas height or width - whichever is shorter. */
    draw(){
        CANVAS_CONTEXT.rect(this.posX, this.posY, this.sideLength, this.sideLength);
        CANVAS_CONTEXT.fillStyle = "#D1C0A8";
        CANVAS_CONTEXT.fill();
        CANVAS_CONTEXT.lineWidth = this.sideLength*0.05;
        CANVAS_CONTEXT.strokeStyle = "#000000";
        CANVAS_CONTEXT.stroke();
    }

}


function fix_dpi() {
    let dpi = window.devicePixelRatio;
    /* Get CSS height. 
       The + prefix casts it to an integer. 
       The slice method gets rid of "px". */
    let style_height = +getComputedStyle(CANVAS).getPropertyValue("height").slice(0, -2);
    /* Get CSS width. */
    let style_width = +getComputedStyle(CANVAS).getPropertyValue("width").slice(0, -2);
    /* Scale the canvas. Note: times DPI by 5 so that the image is crisp when zooming in up to 500% on the browser.*/
    CANVAS.setAttribute('height', style_height * dpi*5);
    CANVAS.setAttribute('width', style_width * dpi*5);
}


 /*******************************************************************/
fix_dpi();
var testBlock = new UnitBlock(20, 20, 0.05);
testBlock.draw();
console.log(+window.devicePixelRatio + ", " + CANVAS.height + ", " + CANVAS.width);
