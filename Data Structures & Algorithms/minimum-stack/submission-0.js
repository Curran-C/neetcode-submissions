class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length >= 1) {
            return this.stack[this.stack.length - 1]
        } else {
            return undefined
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.stack)
    }
}
