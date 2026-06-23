class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const buckets = Array.from({length: nums.length + 1}, () => []);

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (const [num, freq] of map.entries()) {
            buckets[freq].push(num);
        }

        const res = [];

        for (let i = buckets.length; i > 0; --i) {
            if (!buckets[i]) {
                continue;
            }
            for (const num of buckets[i]) {
                res.push(num);
                if (res.length == k) {
                    return res;
                }
            }
        }
        return [];
    }
}
