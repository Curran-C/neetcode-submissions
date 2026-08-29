class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function binarySearch(l, r) {
            if(l > r ) return -1
            let mid = l + Math.floor((r - l) / 2);
            if (target === nums[mid]) {
                return mid;
            }
            return target > nums[mid] ? binarySearch(mid + 1, r) : binarySearch(l, mid - 1);
        }
        return binarySearch(0, nums.length - 1);
    }
}
