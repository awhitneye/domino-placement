//NAIVE SOLUTION:

// create and export some function that takes in a matrix
const dominoPlacer = (board) => {
  // this is expecting an array of arrays that are ONLY 1s and 0s.
  let matrix = board.slice();
  for(let i = 0; i < matrix.length; i++) {
    let currentRow = matrix[i];
    for(let j = 0; j < currentRow.length; j++) {
      // now am iterating over every position on the board.
      let currentPosition = currentRow[j];
      if (currentPosition === 0) {
          // if next open position is invalid (no valid secondary horizontal or vertical)
              // return false and abandon this matrix
          // else 
            // starting at first valid position of first array, place domino horizontally if valid,
            // feed matrix back into this function
            // return dominoPlacer(matrix)
            // then remove that domino placement, and place domino vertically if valid
            // feed matriz back into this function
            // return dominoPlacer(matrix)
      } else {
        return true; //indicates a valid solution was found, end search
      }
    }
  }
}