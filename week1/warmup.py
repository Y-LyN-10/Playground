#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math
import re
regex = re.compile(r"^.*interfaceOpDataFile.*$", re.IGNORECASE)
    
def to_list(string):
    elem_list = []

    for i in string:
       elem_list.append(i)

    return elem_list
    
def getDigits(chars):
    return [int(ch) for ch in chars if ch.isdigit()]

''' Another solution '''

   # digits = []
    
   # for ch in chars:
   #     if(ch.isdigit()):e
   #         current_number = int(ch)
   #         digits.append(current_number)

   # return digits

def is_even(n):
    return n % 2 == 0

# --------------------------------------------------------------
# Task 1 - Factorial
# --------------------------------------------------------------

def factorial(n):
    result = math.factorial(n)
    return result

''' Test examples  '''
# print(factorial(0)) # 1
# print(factorial(1)) # 1
# print(factorial(5)) # 120

# --------------------------------------------------------------
# Task 2 - First Nth members of fibonacci
# --------------------------------------------------------------

def fib_members(n):
    a, b = 0, 1
    fib_numbers = []
    
    for _ in range(n):
        a, b = b, a+b
        fib_numbers.append(a)
        
    return fib_numbers

''' Test examples  '''
# print(fib_members(1))  # [1]
# print(fib_members(2))  # [1, 1]
# print(fib_members(3))  # [1, 1, 2]
# print(fib_members(10)) # [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

# --------------------------------------------------------------
# Task 3 - Sum all digits of a number
# --------------------------------------------------------------

def sum_of_digits(n):
    num_as_string = str(n)
    digits = getDigits(num_as_string)
    
    return sum(digits)

''' Test examples  '''
# print(sum_of_digits(1325132435356)) # 43
# print(sum_of_digits(123)) # 6
# print(sum_of_digits(6))   # 6
# print(sum_of_digits(-10)) # 1

# --------------------------------------------------------------
# Task 4 - Factorial Digits
# --------------------------------------------------------------

def fact_digits(n):
    digits_list = getDigits(str(n))
    result = []
    
    for d in digits_list:
        result.append(factorial(d))

    return sum(result)

''' Test examples  '''
# print(fact_digits(111)) # 3
# print(fact_digits(145)) # 145
# print(fact_digits(999)) # 1088640

# --------------------------------------------------------------
# Task 5 - Palindromes (Recursive solution)
# --------------------------------------------------------------

def is_palindrome(s):
    s = str(s).lower()
    s = re.sub('[\W+]', '', s)

    if len(s) <= 1:
        return True
    elif s[:1] != s[-1]:
        return False

    return is_palindrome(s[1:-1])

''' Test examples  '''
# print(is_palindrome('121'))   # True
# print(is_palindrome('kapak')) # True
# print(is_palindrome('baba'))  # False
# print(is_palindrome('A dog! A panic in a pagoda!')) # True
# print(is_palindrome('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!')) # True

# --------------------------------------------------------------
# Task 6 - Turn a number into a list of digits
# --------------------------------------------------------------

def to_digits(n):
    result = getDigits(str(n))
    return result

''' Test examples  '''
# print(to_digits(123))    # [1, 2, 3]
# print(to_digits(99999))  # [9, 9, 9, 9, 9]
# print(to_digits(123023)) # [1, 2, 3, 0, 2, 3]

# --------------------------------------------------------------
# Task 7 - Turn a list of difits into a number
# --------------------------------------------------------------

def to_number(digits):
    str_number = "".join(str(d) for d in digits)
    return int(str_number)

''' Test examples  '''
# print(to_number([1,2,3]))       # 123
# print(to_number([9,9,9,9,9]))   # 99999
# print(to_number([1,2,3,0,2,3])) # 123023

# --------------------------------------------------------------
# Task 8 Fibonacci Number
# --------------------------------------------------------------

def fib_number(n):
    numbers = fib_members(n)
    result = "".join(str(num) for num in numbers)
    return result

''' Test examples  '''
# print(fib_number(3))  # 112
# print(fib_number(10)) # 11235813213455
      
# --------------------------------------------------------------
# Task 9 - Vowels in a string
# --------------------------------------------------------------
def count_vowels(text):
    vowels = 'aeiouy'
    text = text.lower()
    counter = 0

    for char in text:
        if char in vowels:
            counter += 1

    return counter

''' Test examples  '''
# print(count_vowels('Python')) # 2
# print(count_vowels('Theistareykjarbunga')) # 8 (It's a volcano name!)
# print(count_vowels('grrrrgh!')) # 0
# print(count_vowels('Github is the second best thing that happend to programmers, after the keyboard!')) #22
# print(count_vowels('A nice day to code!')) # 8

# --------------------------------------------------------------
# Task 10 - Consonants in a string
# --------------------------------------------------------------
def count_consonants(text):
    vowels = 'aeiouy'
    counter = 0
    text = str(text).lower()
    text = re.sub('[\W+]', '', text)

    for char in text:
        if char not in vowels:
            counter += 1

    return counter

''' Test examples  '''
# print(count_consonants('Python'))   # 4
# print(count_consonants('Theistareykjarbunga')) # 11
# print(count_consonants('grrrrgh!')) # 7
# print(count_consonants('Github is the second best thing that happend to programmers, after the keyboard!'))   # 44
# print(count_consonants('A nice day to code!')) # 6

# --------------------------------------------------------------
# Task 11 - Char histogram
# --------------------------------------------------------------

def char_histogram(string):
    result = {}

    # {key: ch.count(key) for key in string}

    for ch in string:
        if ch in result:
            result[ch] += 1
        else:
            result[ch] = 1
    
    return result

''' Test examples  '''
# print(char_histogram("Python!"))
# Expected:  { 'P': 1, 'y': 1, 't': 1, 'h': 1, 'o': 1, 'n': 1, '!': 1 }
# print(char_histogram("AAAAaaa!!!"))
# Expected: { 'A': 4, 'a': 3, '!": 3 }

# --------------------------------------------------------------
# Task 12 - Palindrome Score
# --------------------------------------------------------------

def p_score(n):
    if is_palindrome(n):
        return 1
    
    s = n + int(str(n)[::-1])
        
    return 1 + p_score(s)

''' Test examples  '''
# print(p_score(121)) # 1
# print(p_score(48))  # 3
# print(p_score(198)) # 6

# --------------------------------------------------------------
# Task 13 - Increasing Sequence
# --------------------------------------------------------------

def is_increasing(seq):
    for i in range(len(seq)-1):
        current_n = seq[i]
        next_n = seq[i+1]

        if(current_n >= next_n):
            return False
    
    return True

''' Test examples  '''
# print(is_increasing([1,2,3,4,5])) # True
# print(is_increasing([1]))         # True
# print(is_increasing([5,6,-10]))   # False
# print(is_increasing([1,1,1,1]))   # False

# --------------------------------------------------------------
# Task 14 - Decreasing Sequence
# --------------------------------------------------------------

def is_decreasing(seq):
    for i in range(len(seq)-1):
        current_n = seq[i]
        next_n = seq[i+1]

        if(current_n <= next_n):
            return False

    return True

''' Test examples  '''
# print(is_decreasing([5,4,3,2,1]))   # True
# print(is_decreasing([1,2,3]))       # False
# print(is_decreasing([100, 50, 20])) # True
# print(is_decreasing([1,1,1,1]))     # False

# --------------------------------------------------------------
# Task 15 - Hack Numbers
# --------------------------------------------------------------

def is_hack(n):
    binary_n = bin(n)[2:]
    has_odd_ones = not is_even(binary_n.count('1'))

    return is_palindrome(binary_n) and has_odd_ones

def next_hack(n):
    n += 1

    while not is_hack(n):
        n +=1

    return n

''' Test examples  '''
# print(next_hack(0))    # 1
# print(next_hack(10))   # 21
# print(next_hack(8031)) # 8191
