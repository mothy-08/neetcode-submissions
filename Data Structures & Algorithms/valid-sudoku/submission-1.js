class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {};
        const cols = {};
        const sqrs = {};

        for (let i = 0; i < 9; ++i) {
            for (let j = 0; j < 9; ++j) {
                if (board[i][j] == ".") continue;

                const sqr = ((i / 3) | 0) * 3 + ((j / 3) | 0); 

                if (!rows[i]) rows[i] = new Set();
                if (!cols[j]) cols[j] = new Set();
                if (!sqrs[sqr]) sqrs[sqr] = new Set();

                if (
                    rows[i].has(board[i][j]) ||
                    cols[j].has(board[i][j]) ||
                    sqrs[sqr].has(board[i][j])
                )
                    return false;

                rows[i].add(board[i][j]);
                cols[j].add(board[i][j]);
                sqrs[sqr].add(board[i][j]);
            }
        }

        return true;
    }
}
