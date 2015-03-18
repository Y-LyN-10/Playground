#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math
import re
regex = re.compile(r"^.*interfaceOpDataFile.*$", re.IGNORECASE)

def get_digits(chars):
    return [int(ch) for ch in chars if ch.isdigit()]

# --------------------------------------------------------------
# Task 1 - Sum all divisors of an integer
# --------------------------------------------------------------

def get_divisors(n):
    number = n
    divisors = []

    return [x for x in range(1, n+1) if n % x == 0]
    
   # while n > 0:
   #     if(number % n == 0):
   #         divisors.append(n)

   #     n -= 1

   # return divisors

def sum_of_divisors(n):
    return sum(get_divisors(n))

# Test examples:
# print(sum_of_divisors(8))    # 15
# print(sum_of_divisors(7))    # 8
# print(sum_of_divisors(1))    # 1
# print(sum_of_divisors(1000)) # 2340

# --------------------------------------------------------------
# Task 2 - Check if integer is prime
# --------------------------------------------------------------

def is_prime(number):
    # if number % 2 == 0 and number > 2 or number < 2:
    #    return False
    
    # for i in range(3, int(math.sqrt(number)) + 1, 2):
    #    if number % i == 0:
    #        return False

    return number+1 == sum_of_divisors(number)

# Test examples:
# print(is_prime(1))    # False
# print(is_prime(2))    # True
# print(is_prime(8))    # False
# print(is_prime(11))   # True
# print(is_prime(-10))  # False

# --------------------------------------------------------------
# Task 3 - Check if a number has a prime number of divisors
# --------------------------------------------------------------

def prime_number_of_divisors(n):
    number_of_divisors = len(get_divisors(n))
    return is_prime(number_of_divisors)

# print(prime_number_of_divisors(7)) # True
# print(prime_number_of_divisors(8)) # False
# print(prime_number_of_divisors(9)) # True

# --------------------------------------------------------------
# Task 4 - Number containing a single digit?
# --------------------------------------------------------------

def contains_digit(number, digit):
    return (str(digit) in str(number))

# Test examples:
# print(contains_digit(123, 4))       # False
# print(contains_digit(42, 2))        # True
# print(contains_digit(1000, 0))      # True
# print(contains_digit(12346789, 5))  # False

# --------------------------------------------------------------
# Task 5 - Number containing all digits?
# --------------------------------------------------------------

def contains_digits(number, digits):
    number_as_digits = get_digits(str(number))

    # digits in b but not in a
    if(set(digits) - set(number_as_digits)):
        return False

    return True

# print(contains_digits(402123, [0, 3, 4]))    # True
# print(contains_digits(666, [6,4]))           # False
# print(contains_digits(123456789, [1,2,3,0])) # False
# print(contains_digits(456, []))              # True

# --------------------------------------------------------------
# Task 6 - Is number balanced?
# --------------------------------------------------------------

def is_number_balanced(n, l_sum = 0, r_sum = 0):
    s = str(n)
    
    if (len(s)) <= 1:
        return l_sum == r_sum
    
    l_sum += int(s[:1])
    r_sum += int(s[-1])

    return is_number_balanced(s[1:-1], l_sum, r_sum)

# Test examples
# print(is_number_balanced(9))       # True
# print(is_number_balanced(11))      # True
# print(is_number_balanced(13))      # False
# print(is_number_balanced(121))     # True
# print(is_number_balanced(28471))   # False
# print(is_number_balanced(1238033)) # True

# --------------------------------------------------------------
# Task 7 - Counting substrings
# --------------------------------------------------------------

def count_substrings(haystack, needle):
    haystack = str(heystack).lower()
    s = re.sub('[\W+]', '', s)

# Test examples
# print(count_substrings("This is a test string", "is")) # 2
# print(count_substrings("babababa", "baba"))            # 2
# print(count_substrings("Python is an awesome language to program in!", "o")) # 4
# print(count_substrings("We have nothing in common!", "really?")) # 0
# print(count_substrings("This is this and that is this", "this")) # 2 ("This" != "this"))


# --------------------------------------------------------------
# Task 8 - Zero Insertion
# --------------------------------------------------------------

def zero_insert(num):
    num_as_string = str(num);
    result = []

    for i in range(0, len(num_as_string)-1):
        x = int(num_as_string[i])
        y = int(num_as_string[i+1])

        result.append(x)

        cond1 = ((int(x) + int(y)) % 10 == 0)
        cond2 = (x == y)
        
        if(cond1 or cond2):
            result.append(0)
    
    result.append(int(num_as_string[-1]))
    
    return int(''.join(map(str, result)))

# Test examples
# print(zero_insert(116457))     # 10160457
# print(zero_insert(55555555)) # 505050505050505
# print(zero_insert(1))        # 1
# print(zero_insert(6446))     # 6040406

# --------------------------------------------------------------
# Task 9 - Sum Numbers in Matrix
# --------------------------------------------------------------

def sum_matrix(m):
    return sum([sum(row) for row in m])

# Test examples
m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# print(sum_matrix(m)) # 45
m = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
# print(sum_matrix(m)) # 0
m = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
# print(sum_matrix(m)) # 55

# --------------------------------------------------------------
# Task 10 - Matrix Bombing
# --------------------------------------------------------------

def matrix_bombing_plan(m):
    return 'Boom!'


