class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let fixedIndex = 0;
        let p1 = fixedIndex + 1;
        let p2 = nums.length - 1;
        const sortedNums = nums.sort((a, b) => a - b); //[-4,-1,-1,0,1,2]
        const finalArr = new Set();

        while (fixedIndex < sortedNums.length) {
            while (p1 < p2) {
                const first = sortedNums[fixedIndex];
                const second = sortedNums[p1];
                const third = sortedNums[p2];
                if (first + second + third === 0) {
                    finalArr.add(JSON.stringify([first, second, third]));
                    p1 += 1
                    p2 -= 1
                } else if (first + second + third < 0) {
                    p1 += 1;
                } else if (first + second + third > 0) {
                    p2 -= 1;
                }
            }
            fixedIndex += 1;
            p1 = fixedIndex + 1
            p2 = sortedNums.length - 1
        }
        return Array.from(finalArr).map(each => JSON.parse(each));
    }
}
