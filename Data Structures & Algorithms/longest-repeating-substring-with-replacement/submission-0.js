class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longestWindow = 0;
        let left = 0;
        let right = 0;
        let freq = {};
        while (right < s.length) {
            for (let i = left; i <= right; i++) {
                freq[s[i]] = freq[s[i]] ? freq[s[i]] + 1 : 1;
            }
            const maxFreq = Math.max(...Object.values(freq));
            const windowLength = right - left + 1;

            if (windowLength - maxFreq <= k) {
                longestWindow = Math.max(longestWindow, windowLength);
                right += 1;
            } else {
                left += 1;
            }
            freq = {};
        }
        return longestWindow;
    }
}
