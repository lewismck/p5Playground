//Make a knight class
class Knight{
  //Current position
  //Store previous visited positions
  constructor(currPos){
    this.currPos = currPos;
    this.visited = [];
    this.visitedPosOnScreen = [];
    this.stuck = false;
  }

  //Move function
  move(arr, currPos){
    //Move based on rules
    let availMoves = this.gatherMoves(arr, currPos);

    //Remove visited values...
    let filteredMoves = availMoves.filter((arr)=>  !this.visited.includes(arr.value));
    // console.log(filteredMoves);
    // console.log(availMoves);

    //Declare end if stuck
    if(filteredMoves.length == 0){
      //Check array of legal moves isn't empty!
      this.stuck = true;
      console.log('STUCK!');

    } else{
      //Smallest available legal move
      let nextMove = filteredMoves.reduce(
        (min, mvs) => mvs.value < min.value ? mvs : min
      );
      // console.log('Next Move: ' + nextMove.value);
      // console.log('Next Move Index: ' + nextMove.pos);
      //update current position
      this.currPos = nextMove.pos;
      this.visited.push(nextMove.value);

    }
  }

  gatherMoves(arr, currPos){
    let availMoves = [];

    //rules
    //Gather L shaped moves
    //currPos[0] = ROW
    let row = currPos[0];
    //currPos[1] = COL
    let col = currPos[1];
    //down 1 right 2
    if(this.isLegalMove(arr, [row+1, col+2])){
      availMoves.push({value: arr[row+1][col+2], pos: [row+1, col+2]});
      // console.log('d1 r2: ' + arr[row+1][col+2]);
    }
    //down 2 right 1
    if(this.isLegalMove(arr, [row+2, col+1])){
      availMoves.push({value: arr[row+2][col+1], pos: [row+2, col+1]});
      // console.log('d1 r2: ' + arr[row+1][col+2]);
    }

    //up 1 left 2
    if(this.isLegalMove(arr, [row-1, col-2])){
      availMoves.push({value: arr[row-1][col-2], pos: [row-1, col-2]});
      // console.log('u1 l2: ' + arr[row-1][col-2]);
    }
    //up 2 left 1
    if(this.isLegalMove(arr, [row-2, col-1])){
      availMoves.push({value: arr[row-2][col-1], pos: [row-2, col-1]});
      // console.log('u1 l2: ' + arr[row-1][col-2]);
    }

    //up 1 right 2
    if(this.isLegalMove(arr, [row-1, col+2])){
      availMoves.push({value: arr[row-1][col+2], pos:[row-1, col+2]});
      // console.log('u1 r2: ' + arr[row-1][col+2]);
    }
    //up 2 right 1
    if(this.isLegalMove(arr, [row-2, col+1])){
      availMoves.push({value: arr[row-2][col+1], pos:[row-2, col+1]});
      // console.log('u1 r2: ' + arr[row-1][col+2]);
    }

    //down 1 left 2
    if(this.isLegalMove(arr, [row+1, col-2])){
      availMoves.push({value: arr[row+1][col-2], pos: [row+1, col-2]});
      // console.log('d1 l2: ' + arr[row+1][col-2]);
    }
    //down 2 left 1
    if(this.isLegalMove(arr, [row+2, col-1])){
      availMoves.push({value: arr[row+2][col-1], pos: [row+2, col-1]});
      // console.log('d1 l2: ' + arr[row+1][col-2]);
    }
    // console.log(availMoves);
    return availMoves;
  }

  isLegalMove(arr, mv){
    //if mv returns undefined not valid
    return arr[mv[0]][mv[1]] != undefined;
  }


}
