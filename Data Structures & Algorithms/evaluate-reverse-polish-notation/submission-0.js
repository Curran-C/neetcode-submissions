class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        const val = tokens[i];

        if (!isNaN(Number(val))) {
            stack.push(Number(val));
        } else {
            const right = stack.pop();
            const left = stack.pop();

            if (val === "+") stack.push(left + right);
            else if (val === "-") stack.push(left - right);
            else if (val === "*") stack.push(left * right);
            else if (val === "/") stack.push(left / right);
        }
    }

    return stack.pop();
}
}
