class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
      let p1 = 0
      let p2 = numbers.length - 1

      while(p1 <= p2) {
        let numOne = numbers[p1]
        let numTwo = numbers[p2]
        if(numOne + numTwo > target) p2 -= 1
        else if (numOne + numTwo < target) p1 += 1
        else if (numOne + numTwo === target) return [p1 + 1, p2 + 1]
      }
    }
}
