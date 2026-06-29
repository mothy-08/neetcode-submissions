class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        let buy = prices[0];
        for (const price of prices) {
            if (price < buy) {
                buy = price;
            }
            res = Math.max(res, price - buy);
        }
        return res;
    }
}
