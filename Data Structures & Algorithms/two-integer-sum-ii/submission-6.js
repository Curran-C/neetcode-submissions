class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
      let p1 = 0
      let p2 = numbers.length - 1
      while (p1 < p2) {
        if(numbers[p1] + numbers[p2] < target) p1 += 1
        else if(numbers[p1] + numbers[p2] > target) p2 -= 1
        else return [p1 + 1, p2 + 1]
      }
    }
}
