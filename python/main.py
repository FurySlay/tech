from typing import List

class Solution:
    def answer(self, str1: str, str2: str) -> str:
        totalstr = str1 + str2
        
        minlen, maxlen = (str1, str2) if str1 < str2 else (str2, str1)
            
        for i in range(len(minlen), 0, -1):
            output = ''
            first = False
            second = False
            while(len(output) <= len(maxlen)):
                output += minlen[0: i]
                if output == minlen:
                    second = True
                if second and output == maxlen:
                    first = True
                if first and second:
                    return minlen[0: i]
        return ''

obj = Solution()
list = 'asasasas'
list2 = 'asas'
result = obj.answer(list, list2)
print(result)