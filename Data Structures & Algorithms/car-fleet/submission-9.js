class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position
            .map((p, i) => [p, (target - p) / speed[i]])
            .sort((a, b) => b[0] - a[0]);
        

        let maxT = 0;
        let res = 0;

        for (const [_, t] of cars) {
            if (t > maxT) {
                res++;
                maxT = t;
            }
        }

        return res;
    }
}
