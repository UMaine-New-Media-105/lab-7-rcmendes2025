function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let y = 25;
  let x = 25;
  for(let counter = 0; counter < 8; counter++) {
    ellipse(x, y, 45);
    y = y + 50;
    x = x + 50;
  }
  
  let y2 = 25
  let x2 = 375
  for(let counter = 0; counter < 8; counter++) {
    ellipse(x2, y2, 45);
    y2 = y2 + 50;
    x2 = x2 - 50; 
  } 
}
