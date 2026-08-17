class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # z x y x y z
        #       | 
        #            |
        #       x y  z

        longest_substring = 0
        left_pointer = 0
        char_set = set()

        for right_pointer in s:
            if right_pointer in char_set:
                longest_substring = max(longest_substring, len(char_set))
                while right_pointer in char_set:
                    char_set.remove(s[left_pointer])
                    left_pointer += 1
            char_set.add(right_pointer)
        
        return longest_substring

                    