class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    delimiter = "~"
    encode(strs) {
        return strs.reduce((acc, each) => {
            acc = acc + each.length + this.delimiter + each
            return acc 
        }, "")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== this.delimiter) {
                j++;
            }

            const len = parseInt(str.slice(i, j));

            res.push(str.slice(j + 1, j + 1 + len));

            i = j + 1 + len;
        }

        return res;
    }
}
