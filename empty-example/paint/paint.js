function setup() {
	createCanvas(480, 420);
	
}

function draw() {
	background(204)
	if
	(mouseIsPressed) {
    	fill(30, 40, 0);
	} else {
    	fill(200);
	}
	ellipse(mouseX,mouseY,80);
}

function drawline() {
	if (mouseIsPressed) {
    	fill(10, 10, 90)
    	stroke(255,204,100)
	}
	else (fill)
    
}
draw = function() {
	background(204);
	ellipse(mouseX, mouseY, 1, 1);
	var label = float(mouseX) +" , "+ float(mouseY);
	text(label, mouseX +10, mouseY +10);
 };
 
