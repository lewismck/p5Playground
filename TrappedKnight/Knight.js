//Make a knight class
class Knight{

  constructor(currPos, smallJump, bigJump){
    this.currPos = currPos;
    this.smallJump = smallJump;
    this.bigJump = bigJump;
    //Store previous visited positions - always starts at 1
    this.visited = [1];
    this.visitedPosOnScreen = [];
    this.stuck = false;
  }

  //Move function
  move(arr, currPos){
    //Move based on rules
    let availMoves = this.gatherMoves(arr, currPos);

    //Remove already visited values...
    let filteredMoves = availMoves.filter((arr)=>  !this.visited.includes(arr.value));

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
    if(this.isLegalMove(arr, [row+this.smallJump, col+this.bigJump])){
      availMoves.push({value: arr[row+this.smallJump][col+this.bigJump], pos: [row+this.smallJump, col+this.bigJump]});
    }
    //down 2 right 1
    if(this.isLegalMove(arr, [row+this.bigJump, col+this.smallJump])){
      availMoves.push({value: arr[row+this.bigJump][col+this.smallJump], pos: [row+this.bigJump, col+this.smallJump]});
    }

    //up 1 left 2
    if(this.isLegalMove(arr, [row-this.smallJump, col-this.bigJump])){
      availMoves.push({value: arr[row-this.smallJump][col-this.bigJump], pos: [row-this.smallJump, col-this.bigJump]});
    }
    //up 2 left 1
    if(this.isLegalMove(arr, [row-this.bigJump, col-this.smallJump])){
      availMoves.push({value: arr[row-this.bigJump][col-this.smallJump], pos: [row-this.bigJump, col-this.smallJump]});
    }

    //up 1 right 2
    if(this.isLegalMove(arr, [row-this.smallJump, col+this.bigJump])){
      availMoves.push({value: arr[row-this.smallJump][col+this.bigJump], pos:[row-this.smallJump, col+this.bigJump]});
    }
    //up 2 right 1
    if(this.isLegalMove(arr, [row-this.bigJump, col+this.smallJump])){
      availMoves.push({value: arr[row-this.bigJump][col+this.smallJump], pos:[row-this.bigJump, col+this.smallJump]});
    }

    //down 1 left 2
    if(this.isLegalMove(arr, [row+this.smallJump, col-this.bigJump])){
      availMoves.push({value: arr[row+this.smallJump][col-this.bigJump], pos: [row+this.smallJump, col-this.bigJump]});
    }
    //down 2 left 1
    if(this.isLegalMove(arr, [row+this.bigJump, col-this.smallJump])){
      availMoves.push({value: arr[row+this.bigJump][col-this.smallJump], pos: [row+this.bigJump, col-this.smallJump]});
    }

    // console.log(availMoves);
    return availMoves;
  }

  isLegalMove(arr, mv){
    //if mv returns undefined not valid
    return typeof arr[mv[0]][mv[1]] !== 'undefined';
    // return (arr.length-1 >= mv[0]) && (arr[0].length-1 >= mv[1]);
    // return arr[mv[0]][mv[1]] != undefined;
  }


}
