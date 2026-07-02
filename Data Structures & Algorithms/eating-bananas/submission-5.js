class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = 1000000000;

        while (l < r) {
            let m = Math.floor((l + r) / 2);

            if (this.isValid(piles, h, m))  r = m;
            else l = m + 1;
        }
        return l;
    }

    isValid(piles, targetHour, rate) {
        let totalHours = 0;
        for (const pile of piles) totalHours += Math.ceil(pile / rate);
        return totalHours <= targetHour;
    }
}
