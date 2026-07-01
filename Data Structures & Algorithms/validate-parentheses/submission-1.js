class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {")": "(", "]": "[", "}": "{"};

        for (const c of s) {
            if (!Object.hasOwn(map, c)) {
                stack.push(c);
                continue;
            }
            if (stack.length === 0 || stack[stack.length - 1] != map[c]) return false;
            stack.pop();
        }

        return stack.length === 0;
    }
}
