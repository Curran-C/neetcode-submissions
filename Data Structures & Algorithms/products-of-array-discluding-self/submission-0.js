class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let current = 0
        let prod = 1
        let index = 0
        let arr = []
        while(current < nums?.length) {
            while (index < nums?.length) {
                if(index !== current) {
                    prod *= nums[index]
                }
                index += 1
            }
            arr.push(prod)
            prod = 1
            current += 1
            index = 0
        }
        return arr
    }
}
