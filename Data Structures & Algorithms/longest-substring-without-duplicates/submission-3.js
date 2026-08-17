class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //"abcabcbb" - 8
        let p1 = 0;
        let p2 = 1;
        let len = s.length > 0 ? 1 : 0;
        while (p2 < s.length) {
            let tempStr = new Set();
            for (let i = p1; i <= p2; i++) {
                tempStr.add(s[i]);
            }
            if (tempStr.size - 1 === p2 - p1) {
                len = Math.max(len, tempStr.size);
                p2 += 1;
            } else {
                p1 += 1;
                p2 = p1 + 1;
            }
        }
        return len;
    }
}
