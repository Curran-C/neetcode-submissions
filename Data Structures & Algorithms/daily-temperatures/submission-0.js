class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) { //[30,38,30,36,35,40,28]
        const stack = []; //temp stack on indices to maintain stuff
        const finalStack = new Array(temperatures.length).fill(0); //final stack with distances

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const previousIndex = stack.pop();

                finalStack[previousIndex] = i - previousIndex;
            }

            stack.push(i);
        }

        return finalStack;
    }
}
