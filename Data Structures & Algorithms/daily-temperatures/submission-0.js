class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = new Array(n).fill(0);
        const stack = []; // [temp, idx]

        for (let i = 0; i < n; ++i) {
            const temp = temperatures[i];

            while (stack.length !== 0 && temp > stack[stack.length - 1][0]) {
                const [_stackTemp, stackIdx] = stack.pop();
                res[stackIdx] = i - stackIdx;
            }

            stack.push([temp, i]);
        }

        return res;
    }
}
