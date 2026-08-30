class Solution {
    func isAnagram(_ s: String, _ t: String) -> Bool {
        func getFreqMap(_ str: String) -> [Character: Int] {
            var seenChars = [Character: Int]()

            for char in str {
                seenChars[char, default: 0] += 1
            }

            return seenChars
        }

        let sSeenChars = getFreqMap(s)
        let tSeenChars = getFreqMap(t)

        return sSeenChars == tSeenChars
    }
}
