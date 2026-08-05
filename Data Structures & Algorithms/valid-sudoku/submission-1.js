class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // let [currRow, currCol] = [0, 0]
        let [row, col] = [board.length, board[0].length]
        let grid = [3,3]
        const emptyVal = "."

        //checks rows and cols uniqueness
        for(let currRow = 0; currRow < row; currRow++) {
            const uniqueRows = new Set()
            const uniqueCols = new Set()
            for(let currCol = 0; currCol < col; currCol++) {
                const rowVal = board[currRow][currCol];
                const colVal = board[currCol][currRow];

                if (rowVal !== emptyVal) {
                    if (uniqueRows.has(rowVal)) return false;
                    uniqueRows.add(rowVal);
                }

                if (colVal !== emptyVal) {
                    if (uniqueCols.has(colVal)) return false;
                    uniqueCols.add(colVal);
                }
            }
        }
        
        for(let currRow = 0; currRow < row; currRow+=grid[1]) {
            for(let currCol = 0; currCol < col; currCol+=grid[0]) {        
                const uniqueGrid = new Set()
                for(let currGridRow = 0; currGridRow < grid[1]; currGridRow++) {
                    for(let currGridCol = 0; currGridCol < grid[0]; currGridCol++) {
                        const val = board[currGridRow + currRow][currGridCol + currCol]
                        if(val != emptyVal) {
                            if(uniqueGrid.has(val)) return false
                            uniqueGrid.add(val)
                        }
                    }
                }
            }
        }

        return true
    }
}
