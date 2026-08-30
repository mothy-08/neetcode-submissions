class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var idxToNums: [Int: Int] = [:]

        for (i, num) in nums.enumerated() {
            let diff = target - num
            if let seenIdx = idxToNums[diff] {
                return [seenIdx, i]
            }
            idxToNums[num] = i
        }

        return []
    }
}
