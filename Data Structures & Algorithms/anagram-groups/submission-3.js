class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};
        strs.forEach((s) => {
            const sorted = s.split("").toSorted().join("");

            if (!anagrams[sorted]) {
                anagrams[sorted] = [];
            }
            anagrams[sorted].push(s);
        });

        return Object.values(anagrams);
    }
}
