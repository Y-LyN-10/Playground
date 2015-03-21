#!/usr/bin/env python
# -*- coding: utf-8 -*-

# -------------------------------------------------------------
# Task 1 - Count words
# -------------------------------------------------------------

def count_words(words):
    return {word: words.count(word) for word in words}

# Test examples
'''
words = ["apple", "banana", "apple", "pie"]
print(count_words(words))
words = ["python", "python", "python", "ruby"]
print(count_words(words))
'''

# -------------------------------------------------------------
# Task 2 - Unique words
# -------------------------------------------------------------

def unique_words_count(arr):
    return len(set(words))

# Test examples
'''
words = ["apple", "banana", "apple", "pie"]
print(unique_words_count(words))
words = ["python", "python", "python", "ruby"]
print(unique_words_count(words))
words = ["HELLO!"] * 10
print(unique_words_count(words))
'''
# -------------------------------------------------------------
# Task 3 - NaN Expand
# -------------------------------------------------------------

def nan_expand(n):
    pass

# Test examples
'''
print(nan_expand(0)) # ""
print(nan_expand(1)) # "Not a NaN"
print(nan_expand(2)) # "Not a Not a NaN"
print(nan_expand(3)) # "Not a Not a Not a NaN"
'''
# -------------------------------------------------------------
# Task 4 - Iterations of NaN Expand
# -------------------------------------------------------------

def iterations_of_nan_expand(string):
    pass

# Test examples
'''
print(iterations_of_nan_expand('')) # 0
print(iterations_of_nan_expand('Not a NaN')) # 1
print(iterations_of_nan_expand('Not a Not a Not a Not a Not a Not a Not a Not a Not a Not a NaN')) # 10
print(iterations_of_nan_expand('Show these people!')) # False
'''
# -------------------------------------------------------------
# Task 5 - Integer prime factorization
# -------------------------------------------------------------

def prime_factorization(n):
    pass

# Test examples
'''
print(prime_factorization(10)) # [(2, 1), (5, 1)] # This is 2^1 * 5^1
print(prime_factorization(14)) # [(2, 1), (7, 1)]
print(prime_factorization(356))# [(2, 2), (89, 1)]
print(prime_factorization(89)) # [(89, 1)] # 89 is a prime number
print(prime_factorization(1000)) # [(2, 3), (5, 3)]
'''
# -------------------------------------------------------------
# Task 6 - The group function
# -------------------------------------------------------------

def group(arr):
    pass

# Test examples
'''
print(group([1, 1, 1, 2, 3, 1, 1]) == [[1, 1, 1], [2], [3], [1, 1]])
print(group([1, 2, 1, 2, 3, 3]) == [[1], [2], [1], [2], [3, 3]])
'''

# -------------------------------------------------------------
# Task 7 - Longest subsequence of equal consecutive elements
# -------------------------------------------------------------

def max_consecutive(items):
    pass

# Test examples
'''
print(max_consecutive([1, 2, 3, 3, 3, 3, 4, 3, 3]))       # 4
print(max_consecutive([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5])) # 3
'''

# -------------------------------------------------------------
# Task 8 - Group By
# -------------------------------------------------------------

def groupby(func, seq):
    pass

# Test examples
'''
print(groupby(lambda x: x % 2, [0,1,2,3,4,5,6,7])) # {0: [0, 2, 4, 6], 1: [1, 3, 5, 7]}
print(groupby(lambda x: 'odd' if x % 2 else 'even', [1, 2, 3, 5, 8, 9, 10, 12])) # {'even': [2, 8, 10, 12], 'odd': [1, 3, 5, 9]}
print(groupby(lambda x: x % 3, [0, 1, 2, 3, 4, 5, 6, 7])) # {0: [0, 3, 6], 1: [1, 4, 7], 2: [2, 5]}
'''

# -------------------------------------------------------------
# Task 9 - Spam and Eggs
# -------------------------------------------------------------

def prepare_meal(n):
    pass
    
# Test examples
'''
print(prepare_meal(5))  # 'eggs'
print(prepare_meal(3))  # 'spam'
print(prepare_meal(27)) # 'spam spam spam'
print(prepare_meal(15)) # 'spam and eggs'
print(prepare_meal(45)) # 'spam spam and eggs
print(prepare_meal(7))  # ''
'''

# -------------------------------------------------------------
# Task 10 - Reduce file path
# -------------------------------------------------------------

def reduce_file_path(path):
    pass

# Test examples
'''
print(reduce_file_path('/')) # '/' 
print(reduce_file_path('/srv/../')) # '/'
print(reduce_file_path('/srv/www/htdocs/wtf/')) # '/srv/www/htdocs/wtf'
print(reduce_file_path('/srv/www/htdocs/wtf')) # '/srv/www/htdocs/wtf'
print(reduce_file_path('/srv/./././././')) # '/srv'
print(reduce_file_path('/etc//wtf/')) # '/etc/wtf'
print(reduce_file_path('/etc/../etc/../etc/../')) # '/'
print(reduce_file_path('//////////////')) # '/'
print(reduce_file_path('/../')) # '/'
'''

# -------------------------------------------------------------
# Task 11 - Word from a^nb^n
# -------------------------------------------------------------

def is_an_bn(word):
    pass

# Test examples
'''
print(is_an_bn(''))           # True
print(is_an_bn('rado'))       # False
print(is_an_bn('aaabb'))      # False
print(is_an_bn('aaabbb'))     # True
print(is_an_bn("aabbaabb"))   # False
print(is_an_bn("bbbaaa"))     # False
print(is_an_bn("aaaaabbbbb")) # True
'''

# -------------------------------------------------------------
# Task 12 - Credit card validation
# -------------------------------------------------------------

def is_credit_card_valid(number):
    pass

# Test examples
'''
print(is_credit_card_valid(79927398713)) # True
print(is_credit_card_valid(79927398715)) # True
'''

# -------------------------------------------------------------
# Task 13 - Goldbach Conjecture
# -------------------------------------------------------------

def goldbach(n):
    pass

# Test examples
'''
print(goldbach(4))   # [(2,2)]
print(goldbach(6))   # [(3,3)]
print(goldbach(8))   # [(3,5)]
print(goldbach(10))  # [(3,7), (5,5)]
print(goldbach(100)) # [(3, 97), (11, 89), (17, 83), (29, 71), (41, 59), (47, 53)]
'''

# -------------------------------------------------------------
# Task 14 - Magic Square
# -------------------------------------------------------------

def magic_square(matrix):
    pass

# Test examples
'''
print(magic_square([[1,2,3], [4,5,6], [7,8,9]])) # False
print(magic_square([[4,9,2], [3,5,7], [8,1,6]])) # True
print(magic_square([[7,12,1,14], [2,13,8,11], [16,3,10,5], [9,6,15,4]])) # True
print(magic_square([[23, 28, 21], [22, 24, 26], [27, 20, 25]])) # True
print(magic_square([[16, 23, 17], [78, 32, 21], [17, 16, 15]])) # False
'''

# -------------------------------------------------------------
# Task 15 - Friday Years
# -------------------------------------------------------------

def friday_years(start, end):
    pass

# Test examples
'''
print(friday_years(1000, 2000)) # 178
print(friday_years(1753, 2000)) # 44
print(friday_years(1990, 2015)) # 4
'''
