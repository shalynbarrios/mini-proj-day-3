function setup() {
  createCanvas(600, 600);
    background(100);
}

function draw() {
  // below
  keyPressed()
  noStroke(0);
  fill(200, 0, 100)
  ellipse(mouseX, mouseY, 75, 120)
}

function mousePressed() {
  background(100);
}
 
// key pressed logic


function keyPressed () {
  if (keyPressed == "d") {
    noStroke(0);
    fill(400, 100, 200)
    ellipse(mouseX, mouseY, 75, 120)
  }
}