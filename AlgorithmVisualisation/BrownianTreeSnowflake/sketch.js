/**
 * Based off of the lovely coding train challenges:
 * https://github.com/CodingTrain/website/tree/master/CodingChallenges
 *https://www.youtube.com/watch?v=XUA8UREROYE&index=21&list=WL&t=0s&frags=pl%2Cwn
 **/
let snowflake = [];
let current;
function setup(){
   createCanvas(800,800);
   current = new Particle(width/2, 0);
}


function draw(){
  translate(width/2, height/2);
  rotate(PI/6);
  background(0);

  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)){
    current.update();
    count++;
  }

  // If a particle doesn't move at all we're done
  // This is an exit condition not implemented in the video
  if (count == 0){
    noLoop();
    console.log('snowflake completed');
  }

  snowflake.push(current);
  current = new Particle(width/2, 0);

  for (let i = 0; i < 6; i++){
    rotate(PI/3);
    current.show();
    for (let p of snowflake){
      p.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (let p of snowflake){
      p.show();
    }
    pop();
  }
}
   // if(current.finished()){
   //    //snowflake[random(1000)] = current;
   //    snowflake.push(current);
   //    current = new Particle(width/2, 0);
   // }
   // push();
   // //TODO make snowflake an object and use for in syntax??
   // for(let s of snowflake){
   //   s.show();
   // }
   // pop();
