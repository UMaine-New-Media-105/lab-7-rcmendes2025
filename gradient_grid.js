
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  
  fill("rgb(120,0,0)")
  let y = 25;
  let x = 25;
  for(let counter = 0; counter < 8; counter++) {
    ellipse(x, y, 45);
    y = y + 50;
    x = x + 0;
  }
  
  fill("rgb(233,0,0)")
  let y2 = 25
  let x2 = 75
  for(let counter = 0; counter < 8; counter++) {
    ellipse(x2, y2, 45);
    y2 = y2 + 50;
    x2 = x2 + 0; 
  } 
  
  fill("orange")
  let y3 = 25
  let x3 = 125
  for(let counter = 0; counter < 8; counter++) {
    ellipse(x3, y3, 45);
    y3 = y3 + 50;
    x3 = x3 + 0; 
  }
  
  fill("gold")
  let y4 = 25
  let x4 = 175
  for(let counter = 0; counter < 8; counter++) {
    ellipse(x4, y4, 45);
    y4 = y4 + 50;
    x4 = x4 + 0; 
  } 
  
  fill("yellow")
  let y5 = 25
  let x5 = 225
  for(let counter = 0; counter < 8; counter++) {
    ellipse(x5, y5, 45);
    y5 = y5 + 50;
    x5 = x5 + 0; 
  }
  
  fill("rgb(255,255,117)")
  let y6 = 25
  let x6 = 275
  for(let counter = 0; counter < 8; counter++) {
    ellipse(x6, y6, 45);
    y6 = y6 + 50;
    x6 = x6 + 0; 
  }
  
  fill("white")
  let y7 = 25
  let x7 = 325
  for(let counter = 0; counter < 8; counter++) {
    ellipse(x7, y7, 45);
    y7 = y7 + 50;
    x7 = x7 + 0; 
  } 
  
  fill("gray")
  let y8 = 25
  let x8 = 375
  for(let counter = 0; counter < 8; counter++) {
    ellipse(x8, y8, 45);
    y8 = y8 + 50;
    x8 = x8 + 0;  
  }
}
