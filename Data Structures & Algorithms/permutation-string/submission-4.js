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

        const s1Map = new Array(26).fill(0);
        const s2Map = new Array(26).fill(0);

        const aAscii = 97;
        for (let i = 0; i < n1; ++i) {
            s1Map[s1[i].charCodeAt(0) - aAscii]++;
            s2Map[s2[i].charCodeAt(0) - aAscii]++;
        }

        let matches = 0;

        for (let i = 0; i < 26; ++i) {
            if (s1Map[i] === s2Map[i]) {
                matches++;
            }
        }

        let l = 0;
        for (let r = n1; r < n2; ++r) {
            if (matches === 26) {
                return true;
            }

            let idx = s2[r].charCodeAt(0) - aAscii;
            s2Map[idx]++;

            if (s1Map[idx] == s2Map[idx]) {
                matches++;
            } else if (s1Map[idx] + 1 == s2Map[idx]) {
                matches--;
            }

            idx = s2[l].charCodeAt(0) - aAscii;
            s2Map[idx]--;
            if (s1Map[idx] == s2Map[idx]) {
                matches++;
            } else if (s1Map[idx] - 1 == s2Map[idx]) {
                matches--;
            }
            l++;
        }

        return matches === 26;
    }
}
