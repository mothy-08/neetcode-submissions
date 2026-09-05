class Solution {
    func longestConsecutive(_ nums: [Int]) -> Int {
        var set = Set(nums)
        var res = 0

        for num in set {
            if !set.contains(num - 1) {
                var length = 0

                while set.contains(num + length) {
                    length += 1
                }

                res = max(res, length)
            }
        }

        return res
    }
}
