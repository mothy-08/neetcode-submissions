class Solution {
    func isValidSudoku(_ board: [[Character]]) -> Bool {
        var rows = Array(repeating: Set<Character>(), count: 9)
        var columns = Array(repeating: Set<Character>(), count: 9)
        var squares = Array(repeating: Set<Character>(), count: 9)

        for r in 0..<9 {
            for c in 0..<9 {
                let char = board[r][c]
                if char == "." { continue }

                let square = (r / 3) * 3 + (c / 3)

                if rows[r].contains(char) ||
                   columns[c].contains(char) ||
                   squares[square].contains(char) {
                    return false
                }

                rows[r].insert(char)
                columns[c].insert(char)
                squares[square].insert(char)
            }
        }
        return true
    }
}