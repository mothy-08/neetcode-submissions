class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};

        for (const x of nums) {
            freq[x] = (freq[x] ?? 0) + 1;
        }

        const bucket = [];

        for (let i = 0; i <= nums.length; ++i) {
            bucket.push([]);
        }

        for (const [key, value] of Object.entries(freq)) {
            bucket[value].push(key);
        }

        const res = [];

        for (let i = bucket.length; i > 0; --i) {
            if (!bucket[i]) continue;
            for (const x of bucket[i]) {
                res.push(x);
                if (res.length === k) {
                    return res;
                }
            }
        }
        return [];
    }
}
