class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1 //2
        while(l <= r) {
            let mid = l + Math.floor((r-l) / 2) //1
            let midEle = nums[mid] //1
            if(target === nums[l]) return l
            if(target === midEle) return mid //false
            if(target >= nums[l] && target < midEle) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return -1
    }
}
