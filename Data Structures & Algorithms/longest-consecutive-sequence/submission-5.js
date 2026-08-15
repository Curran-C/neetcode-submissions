class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0

        const numsSorted = nums.sort((a, b) => a - b)

        let p1 = 0
        let p2 = 1
        let count = 1
        let maxCount = 1

        while (p2 < numsSorted.length) {
            const difference = numsSorted[p2] - numsSorted[p1]

            if (difference === 1) {
                count += 1
                maxCount = Math.max(maxCount, count)
            } else if (difference > 1) {
                count = 1
            }

            p1 += 1
            p2 += 1
        }

        return maxCount
    }
}