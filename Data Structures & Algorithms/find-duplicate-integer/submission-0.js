class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let set = new Set()

        for(let i of nums) {
            if(set.has(i)) return i
            else set.add(i)
        }
    }
}
