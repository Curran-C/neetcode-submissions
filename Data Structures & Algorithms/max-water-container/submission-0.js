class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let p1 = 0
        let p2 = heights.length - 1
        let area = 0

        while (p1 <= p2) {
            const left = heights[p1]
            const right = heights[p2]
            let currentArea = left < right ? left * (p2 - p1) : right * (p2 - p1)
            if(currentArea > area) {
                area = currentArea
            }

            if(left < right) {
                p1 += 1
            } else {
                p2 -= 1
            }
        }
        return area
    }
}
