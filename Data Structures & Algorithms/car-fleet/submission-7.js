class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        const cars = [];

        for (let i = 0; i < n; ++i) {
            cars[i] = [position[i], ((target - position[i])/ speed[i])];
        }

        cars.sort((a, b) => b[0] - a[0]);

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
