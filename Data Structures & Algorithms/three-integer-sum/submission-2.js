class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    const finallArr = [];

    for (let fixedIndex = 0; fixedIndex < nums.length - 2; fixedIndex++) {

      // Skip duplicate fixed values
      if (
        fixedIndex > 0 &&
        sortedNums[fixedIndex] === sortedNums[fixedIndex - 1]
      ) {
        continue;
      }

      let left = fixedIndex + 1;
      let right = nums.length - 1;

      while (left < right) {
        const first = sortedNums[fixedIndex];
        const second = sortedNums[left];
        const third = sortedNums[right];

        const sum = first + second + third;

        if (sum === 0) {
          finallArr.push([first, second, third]);

          left++;
          right--;

          // Skip duplicate left values
          while (
            left < right &&
            sortedNums[left] === sortedNums[left - 1]
          ) {
            left++;
          }

          // Skip duplicate right values
          while (
            left < right &&
            sortedNums[right] === sortedNums[right + 1]
          ) {
            right--;
          }

        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }

    return finallArr;
  }
}