/**
 * Based off Daniel Shiffman's great coding examples:
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/CodingChallenges
 **/
var tree = [];
var slider;
var button;
//var leaves = [];

var count = 0;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(1, 20, 5, 1);
  button = createButton('Grow!');
  button.mousePressed(growTree);
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  var root = new Branch(a, b);

  tree[0] = root;
}

/*
 * Grow the tree to maxBranches
 * If max Branches is hit cull the tree to root
 */
function growTree() {
  var maxBranches = slider.value()
  //Check the maximum number of branches hasn't been exceeded.
  if(count <= maxBranches){
    for (var i = tree.length - 1; i >= 0; i--) {
      if (!tree[i].finished) {
        tree.push(tree[i].branch('l'));
        tree.push(tree[i].branch('r'));
      }
      tree[i].finished = true;
    }
    count++;
  }
  else{
    //cut the tree down to root
    for (var i = tree.length - 1; i >= 1; i--) {
      tree.pop();
    }
    //Set the root to unfinished
    tree[0].finished = false;
    count = 0;
  }


}

function draw() {
  background(51);


  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }

}

/*------------------------------
  Bunch of scrap I'm not using
 ------------------------------*/
 // for (var i = 0; i < leaves.length; i++) {
 //   fill(255, 0, 100, 100);
 //   noStroke();
 //   ellipse(leaves[i].x, leaves[i].y, 8, 8);
 //   leaves[i].y += random(0, 2);
 // }
 // for (var i = tree.length - 1; i >= 0; i--) {
//   if (!tree[i].finished) {
//     tree.push(tree[i].branch('l'));
//     tree.push(tree[i].branch('r'));
//   }
//   tree[i].finished = true;
// }
// if (count === 6) {
//   for (var i = 0; i < tree.length; i++) {
//     if (!tree[i].finished) {
//       var leaf = tree[i].end.copy();
//       leaves.push(leaf);
//     }
//   }
// }
