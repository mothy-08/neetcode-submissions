class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // brute force approach can be: get the Math.max for each window
        const res = [];

        for (let i = 0; i <= nums.length - k; ++i) {
            const max = Math.max(...nums.slice(i, i + k));
            res.push(max);
        }

        return res;
    }
}
