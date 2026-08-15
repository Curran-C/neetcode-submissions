class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

  isPalindrome(s) {
    let p1 = 0;
    let p2 = s.length - 1;
    const isAlphanumeric = (char) => /^[a-zA-Z0-9]$/.test(char);
    while (p1 < p2) {
      while (p1 < p2 && !isAlphanumeric(s[p1])) {
        p1 += 1;
      }

      while (p1 < p2 && !isAlphanumeric(s[p2])) {
        p2 -= 1;
      }

      if (s[p1].toLowerCase() !== s[p2].toLowerCase()) {
        return false;
      }
      p1 += 1;
      p2 -= 1;
    }
    return true;
  }
}
