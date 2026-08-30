class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        
        let l = 0
        let r = matrix.length - 1
        
        while(l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            let middleMatrix = matrix[mid]

            if(middleMatrix.includes(target)) {
                return true
            }
            else if(middleMatrix[0] > target) {
                r = mid - 1
            } else if (middleMatrix[middleMatrix.length - 1] < target) {
                l = mid + 1
            } else {
                return false
            }
        }
        return false
    }
}
