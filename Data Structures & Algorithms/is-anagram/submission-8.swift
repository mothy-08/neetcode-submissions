class Solution {
    func isAnagram(_ s: String, _ t: String) -> Bool {
        var chars = Array(repeating: 0, count: 26)
        let aAscii: UInt8 = 97

        for c in s {
            if let charAcii = c.asciiValue {
                chars[Int(charAcii - aAscii)] += 1
            }
        }

        for c in t {
            if let charAcii = c.asciiValue {
                chars[Int(charAcii - aAscii)] -= 1
            }
        }

        return chars.allSatisfy {$0 == 0}
    }
}
