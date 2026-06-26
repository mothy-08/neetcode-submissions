class Solution {
    /**
     * @param {number[]} nums
     * @param {number} t
     * @return {number[]}
     */
    twoSum(nums, t) {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const s = nums[l] + nums[r];
            if (s > t) {
                r--;     
            } else if (s < t) {
                l++;
            } else {
                return [l + 1, r + 1];
            }
        }
    }
}
