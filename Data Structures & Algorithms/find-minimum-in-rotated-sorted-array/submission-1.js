class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        let min = nums[0]
        while (l <= r) {
            // let midEle = nums[mid]
            if (nums[l] <= nums[r]) {
                min = Math.min(min, nums[l]);
                break;
            }

            let mid = l + Math.floor((r - l) / 2)
            min = Math.min(min, nums[mid])
            if(nums[mid] >= nums[l]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return min
    }
}
