class Solution {
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;

        let l = 0;
        let r = m - 1;

        let candidateRow = -1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (target > matrix[mid][n - 1]) {
                l = mid + 1;
            } else if (target < matrix[mid][0]) {
                r = mid - 1;
            } else {
                candidateRow = mid;
                break;
            }
        }

        if (candidateRow === -1) {
            return false;
        }

        l = 0;
        r = n - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (target > matrix[candidateRow][mid]) {
                l = mid + 1;
            } else if (target < matrix[candidateRow][mid]) {
                r = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}