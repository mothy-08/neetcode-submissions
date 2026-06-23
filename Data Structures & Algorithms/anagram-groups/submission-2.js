class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};
        strs.forEach((s) => {
            const freq = new Array(26).fill(null);
            Object.seal(freq);
            
            s.split('').forEach((c) => {
                freq[c.charCodeAt() - 'a'.charCodeAt()] += 1;
            });
            
            if (!anagrams[freq]) {
               anagrams[freq] = []; 
            }
            anagrams[freq].push(s);
        });

        return Object.values(anagrams);
    }
}
