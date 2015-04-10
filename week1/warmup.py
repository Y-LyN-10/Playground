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

# --------------------------------------------------------------
# Task 2 - First Nth members of fibonacci
# --------------------------------------------------------------

def fib_members(n):
    if n < 0:
        raise ValueError('Number can\'t be negative')
    
    a, b = 0, 1
    fib_numbers = []
    
    for _ in range(n):
        a, b = b, a+b
        fib_numbers.append(a)
        
    return fib_numbers

# --------------------------------------------------------------
# Task 3 - Sum all digits of a number
# --------------------------------------------------------------

def sum_of_digits(n):
    num_as_string = str(n)
    digits = getDigits(num_as_string)
    
    return sum(digits)

# --------------------------------------------------------------
# Task 4 - Factorial Digits
# --------------------------------------------------------------

def fact_digits(n):
    digits_list = getDigits(str(n))
    result = []
    
    for d in digits_list:
        result.append(factorial(d))

    return sum(result)

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

# --------------------------------------------------------------
# Task 6 - Turn a number into a list of digits
# --------------------------------------------------------------

def to_digits(n):
    result = getDigits(str(n))
    return result

# --------------------------------------------------------------
# Task 7 - Turn a list of difits into a number
# --------------------------------------------------------------

def to_number(digits):
    str_number = "".join(str(d) for d in digits)
    return int(str_number)

# --------------------------------------------------------------
# Task 8 Fibonacci Number
# --------------------------------------------------------------

def fib_number(n):
    numbers = fib_members(n)
    result = "".join(str(num) for num in numbers)
    return result
      
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

# --------------------------------------------------------------
# Task 12 - Palindrome Score
# --------------------------------------------------------------

def p_score(n):
    if is_palindrome(n):
        return 1
    
    s = n + int(str(n)[::-1])
        
    return 1 + p_score(s)

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
