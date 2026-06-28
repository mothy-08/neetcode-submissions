class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;

        let res = 0;

        while (l < r) {
            const valid = Math.min(heights[l], heights[r]);
            res = Math.max(res, (r - l) * valid);
            if (heights[l] > heights[r]) r--;
            else if (heights[l] < heights[r]) l++;
            else {
                l++;
                r--;
            }
        }

        return res;
    }
}
