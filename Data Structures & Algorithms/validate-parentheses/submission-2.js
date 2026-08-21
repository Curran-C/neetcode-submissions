class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = { "(": ")", "{": "}", "[": "]" };
        const openings = "({["
        const closings = ")]}"
        const stack = []
        if(s.length <= 1) return false
        for(let i = 0; i < s.length; i++) {
            if(openings.includes(s[i])) {
                stack.push(s[i])
            } else if (closings.includes(s[i])) {
                if(pairs[stack.pop()] !== s[i]) {
                    return false
                }
            }
        }
        if(stack.length > 0) return false
        return true
    }
}
