function Pokeball(size_, col_, posx_, posy_) {
  this.size = size_;//pokeball
  this.col = col_;//color
  this.posy = posy_;//position of y
  this.posx = posx_;//position of x

  this.draw = function() {

    if (this.col == 'red') {
      fill(255, 0, 0) // draws red circle
    } else {
      fill(0, 0, 255);
    }
    stroke(0); // draws an outline of black for the ellipse
    ellipse(this.posx, this.posy, 300, 300);

    fill(255); // draws white arc
    arc(this.posx, this.posy, 300, 300, 0, radians(180));

    fill(0); // draws black rectangle
    rect(this.posx - 150, this.posy - 30, 300, 50)

    fill(0); // draws black circle
    ellipse(this.posx, this.posy, 80, 80);

    fill(255); // draws white circle and when pressed changes the background from black to white
    ellipse(this.posx, this.posy, 50, 50);
  }
  this.move = function() {
    this.posx += 1; // moves the pokeballs from left to right
    this.posy += 10 * cos(frameCount / 10); // bounces the pokeballs up and down as it moves from left to right and exists the screen


  }
}