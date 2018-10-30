fill(255, 0, 255);

draw = function() {
    background(255, 255, 255);
    ellipse(mouseX, mouseY, 1, 1); 
    var label = mouseX +" , "+ mouseY;
    text(label, mouseX +10, mouseY +10);
};