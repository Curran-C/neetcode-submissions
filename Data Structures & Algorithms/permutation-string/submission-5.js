class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const windowSize = s1.length;
        let left = 0;
        let right = windowSize - 1;
        let seq = "";

        while (right < s2.length) {
            for (let i = left; i <= right; i++) {
                if (s1.includes(s2[i])) {
                    seq += s2[i];
                } else {
                    break;
                }
            }
            if (
                s1.toLowerCase().split("").sort().join() ==
                seq.toLowerCase().split("").sort().join()
            ) {
                return true;
            } else {
                left += 1;
                right += 1;
                seq = "";
            }
        }
        return false;
    }
}
