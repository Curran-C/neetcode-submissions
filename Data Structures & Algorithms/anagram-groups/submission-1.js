class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
    const res = new Map()

    for (const s of strs) {
        const fq = new Array(26).fill(0)
        for (const ch of s) {
            fq[ch.charCodeAt(0) - 97]++
        }
        const key = fq.join(',')

        if (res.has(key)) {
            res.get(key).push(s)
        } else {
            res.set(key, [s])
        }
    }

    return [...res.values()]
}
}
