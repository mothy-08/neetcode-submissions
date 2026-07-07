class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n1 = s1.length;
        const n2 = s2.length;

        if (n1 > n2) {
            return false;
        }

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        const aAscii = 97;
        for (let i = 0; i < n1; ++i) {
            s1Count[s1[i].charCodeAt(0) - aAscii]++;
            s2Count[s2[i].charCodeAt(0) - aAscii]++;
        } 

        if (this.isArrayEqual(s1Count, s2Count)) {
            return true;
        }

        for (let r = n1; r < n2; ++r) {
            s2Count[s2[r].charCodeAt(0) - aAscii]++;
            s2Count[s2[r - n1].charCodeAt(0) - aAscii]--;

            if (this.isArrayEqual(s1Count, s2Count)) {
                return true;
            }
        }

        return false;
    }

    isArrayEqual(a, b) {
        for (let i = 0; i < 26; ++i) {
            if (a[i] !== b[i]) {
                return false;
            }
        }

        return true;
    }
}
