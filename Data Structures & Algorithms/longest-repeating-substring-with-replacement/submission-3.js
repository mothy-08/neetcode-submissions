class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let l = 0;
        const freq = new Array(26).fill(0);

        for (let r = 0; r < s.length; ++r) {
            freq[s[r].charCodeAt(0) - 65]++;
            console.log(freq);
            while ((r - l + 1) - Math.max(...freq) > k) {
                freq[s[l].charCodeAt(0) - 65]--;
                l++;
            } 
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
