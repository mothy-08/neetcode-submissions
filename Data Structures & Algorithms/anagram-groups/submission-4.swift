class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var anagramMap: [String: [String]] = [:]

        for str in strs {
            let sortedWord = String(str.sorted())
            anagramMap[sortedWord, default: []].append(str)
        }

        return Array(anagramMap.values)
    }
}
