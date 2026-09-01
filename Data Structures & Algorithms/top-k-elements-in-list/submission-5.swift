class Solution {
    func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
        var freqMap: [Int: Int] = [:]

        for num in nums {
            freqMap[num, default: 0] += 1
        }

        var buckets = Array(repeating: Array(repeating: 0, count: 0), count: nums.count + 1)

        for (num, freq) in freqMap {
            buckets[freq].append(num)
        }

        var res: [Int] = []
        for bucket in buckets.reversed() {
            for num in bucket {
                res.append(num)
                if res.count == k {
                    return res
                }
            }
        } 

        return res
    }
}
