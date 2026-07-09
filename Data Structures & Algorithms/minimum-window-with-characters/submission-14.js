class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return '';

        let countT = {};
        let window = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(countT).length;
        let l = 0;
        let best_l = 0;
        let best_r = -1;

        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            window[c] = (window[c] || 0) + 1;

            if (window[c] === countT[c]) {
                have++;
            }

            while (have === need) {
                if (best_r === -1 || best_r - best_l > r - l) {
                    best_l = l;
                    best_r = r;
                }

                window[s[l]]--;
                if (window[s[l]] < countT[s[l]]) {
                    have--;
                }
                l++;
            }
        }

        return best_r === -1 ? "" : s.slice(best_l, best_r + 1);
    }
}