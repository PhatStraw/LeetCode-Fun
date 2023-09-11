const board = [
    ["-","-","-"],
    ["-","-","-"],
    ["-","-","-"]
  ]
  
  let verticalWin = []
  let counter = 0
  
  function printBoard(){
    for(var i=0; i< board.length; i++){
      console.log(board[i])
    }
    console.log("=========")
  }
  //check to see if there is a winner
  //if true return winning piece if false return false
  function winner(){
    const allEqual = arr => arr.every(val => val === arr[0])
    for(var i=0; i<= board.length -1; i++){
      if(allEqual(board[i]) && board[i][0] !== "-"){
        console.log(`${board[i][0]} is the winner`)
        return 
      }
      for(var e=0; e<= board.length -1; e++){
        verticalWin.push(board[e][i])
      }
      // console.log("vwin", verticalWin)
      if(allEqual(verticalWin) && verticalWin[0] !== "-"){
        console.log(`${verticalWin[0]} is the winner`)
        return 
      }
      verticalWin = []
    }
  }
  
  //insert a piece given a "x", "y" coordinate.
  function insertPiece(x,y,value){
    board[x][y] = value
    winner()
    printBoard()
  }
  
  insertPiece(0,0, "x")
  insertPiece(1,0, "x")
  insertPiece(2,0, "x")