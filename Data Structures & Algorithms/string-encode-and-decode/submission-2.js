class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";

        for (const str of strs) { 
            encodedStr += String(str.length) + "#" + str;
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStrs = [];
        let i = 0;

        while (i < str.length) {
            let j = i

            while (str[j] != "#")  j += 1
            
            const n = Number(str.slice(i, j));
            i = j + 1;
            j = i + n;

            decodedStrs.push(str.slice(i, j));
            i = j;
        }

        return decodedStrs;
    }
}
