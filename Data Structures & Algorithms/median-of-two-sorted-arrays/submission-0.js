class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const numss = [...nums1, ...nums2].sort((a, b) => a - b); //1,2,3,4
        let l = 0;
        let r = numss.length - 1;
        let mid = l + Math.floor((r - l) / 2);

        if (r % 2 === 0) {
            return numss[mid];
        } else {
            return (numss[mid] + numss[mid + 1]) / 2;
        }
    }
}
