class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let frequencyMap = nums.reduce((acc, each) => {
            acc[each] ? acc[each] += 1 : acc[each] = 1
            return acc
        }, {})

        // {1: 1, 2: 2, 3: 3}
        return Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]).slice(0,k).map(([num]) => Number(num))

    }
}
