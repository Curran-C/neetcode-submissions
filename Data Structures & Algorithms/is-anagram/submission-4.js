class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        let fq = {}

        for(let i = 0; i < s.length; i++) {
            if(fq[s[i]]) fq[s[i]] += 1
            else fq[s[i]] = 1
        }

        for(let j = 0; j < t.length; j++) {
            if(fq[t[j]] > 0) fq[t[j]] -= 1
            else return false
        }

        return true
    
    }
}
