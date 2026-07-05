class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const token of tokens) {
            switch (token) {
                case "+":
                    const a2 = stack.pop();
                    const a1 = stack.pop();
                    stack.push(a1 + a2);
                    break;
                case "-":
                    const m2 = stack.pop();
                    const m1 = stack.pop();
                    stack.push(m1 - m2);
                    break;
                case "*":
                    const mu2 = stack.pop();
                    const mu1 = stack.pop();
                    stack.push(mu1 * mu2);
                    break;
                case "/":
                    const d2 = stack.pop();
                    const d1 = stack.pop();
                    stack.push(Math.trunc(d1 / d2));
                    break;
                default:
                    stack.push(parseInt(token));
                    break;
            }
        }
        return stack[stack.length - 1];
    }
}
