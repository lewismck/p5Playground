/**
 * Based off Daniel Shiffman's great coding examples:
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/CodingChallenges
 **/
function Branch(begin, end) {
  //Line begin/end points are p5 vector objects.
  this.begin = begin;
  this.end = end;
  this.finished = false;


  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  this.branch = function(leftOrRight) {
    var dir = p5.Vector.sub(this.end, this.begin);
    if(leftOrRight == 'r'){
      dir.rotate(PI / 3);
    }
    else{
      dir.rotate(-PI / 4);
    }
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd);
    return b;
  }

}
