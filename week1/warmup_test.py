#!/usr/bin/env python
# -*- coding: utf-8 -*-

import unittest

#-- 1 --------------------------------------------------------------
from warmup import factorial

class TestFactorialNumbers(unittest.TestCase):
    def test_factorial_result_is_integer(self):
        factorial_result = factorial(1)
        self.assertTrue(isinstance(factorial_result, int))
    
    def test_factorial_of_zero_should_be_one(self):
        factorial_result = factorial(0)
        self.assertEqual(factorial_result, 1)

    def test_factorial_of_five_should_be_120(self):
        factorial_result = factorial(5)
        self.assertEqual(factorial_result, 120)

    def test_factorial_of_negative_number_should_raise_error(self):
        with self.assertRaises(ValueError):
            factorial(-2)

#-- 2 --------------------------------------------------------------
from warmup import fib_members

class TestFibonacciNumist(self):
        fib_members_result = fib_members(1)
        self.assertTrue(isinstance(fib_members_result, list))

    def test_fib_members_result_of_zero_is_empty_list(self):
        fib_members_result = fib_members(0)

        # The pythonic way is to use the fact that empty sequences are false
        # Style guide reference: https://www.python.org/dev/peps/pep-0008/
        
        self.assertFalse(fib_members_result)

    def test_fib_members_result_of_negative_is_empty_list(self):
         with self.assertRaises(ValueError):
            fib_members(-1)

    def test_valid_input_should_return_expected_results(self):
        self.assertEqual(fib_members(2), [1, 1])
        self.assertEqual(fib_members(3), [1, 1, 2])
        self.assertEqual(fib_members(10), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

#-- 3 --------------------------------------------------------------
from warmup import sum_of_digits

class TestSumOfDigits(unittest.TestCase):
    def test_sum_of_digits_result_is_integer(self):
        sum_of_digits_result = sum_of_digits(123)
        self.assertTrue(isinstance(sum_of_digits_result, int))

    def test_valid_input_should_return_expected_results(self):
        self.assertEqual(sum_of_digits(1325132435356), 43)

''' Test examples  '''
# print(sum_of_digits(1325132435356)) # 43
# print(sum_of_digits(123)) # 6
# print(sum_of_digits(6))   # 6
# print(sum_of_digits(-10)) # 1

#-- 4 --------------------------------------------------------------
from warmup import fact_digits

class TestFactorialDigits(unittest.TestCase):
    pass


''' Test examples  '''
# print(fact_digits(111)) # 3
# print(fact_digits(145)) # 145
# print(fact_digits(999)) # 1088640

#-- 5 --------------------------------------------------------------

from warmup import is_palindrome

class TestPalindromes(unittest.TestCase):
    pass

''' Test examples  '''
# print(is_palindrome('121'))   # True
# print(is_palindrome('kapak')) # True
# print(is_palindrome('baba'))  # False
# print(is_palindrome('A dog! A panic in a pagoda!')) # True
# print(is_palindrome('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!')) # True

#-- 6 --------------------------------------------------------------

from warmup import to_digits

class TestNumberToDigits(unittest.TestCase):
    pass

#-- 7 --------------------------------------------------------------

from warmup import to_number

class TestDigitsToNumber(unittest.TestCase):
    pass

''' Test examples  '''
# print(to_number([1,2,3]))       # 123
# print(to_number([9,9,9,9,9]))   # 99999
# print(to_number([1,2,3,0,2,3])) # 123023

#-- 8 --------------------------------------------------------------

from warmup import fib_number

class TestFabonacciNumber(unittest.TestCase):
    pass

''' Test examples  '''
# print(fib_number(3))  # 112
# print(fib_number(10)) # 11235813213455

#-- 9 --------------------------------------------------------------

from warmup import count_vowels

class TestCountVowels(unittest.TestCase):
    pass

''' Test examples  '''
# print(count_vowels('Python')) # 2
# print(count_vowels('Theistareykjarbunga')) # 8 (It's a volcano name!)
# print(count_vowels('grrrrgh!')) # 0
# print(count_vowels('Github is the second best thing that happend to programmers, after the keyboard!')) #22
# print(count_vowels('A nice day to code!')) # 8

#-- 10 -------------------------------------------------------------

from warmup import count_consonants

class TestCountConsonants(unittest.TestCase):
    pass

''' Test examples  '''
# print(count_consonants('Python'))   # 4
# print(count_consonants('Theistareykjarbunga')) # 11
# print(count_consonants('grrrrgh!')) # 7
# print(count_consonants('Github is the second best thing that happend to programmers, after the keyboard!'))   # 44
# print(count_consonants('A nice day to code!')) # 6

#-- 11 -------------------------------------------------------------

from warmup import char_historgram

class TestCharHistogram(unittest.TestCase):
    pass

''' Test examples  '''
# print(char_histogram("Python!"))
# Expected:  { 'P': 1, 'y': 1, 't': 1, 'h': 1, 'o': 1, 'n': 1, '!': 1 }
# print(char_histogram("AAAAaaa!!!"))
# Expected: { 'A': 4, 'a': 3, '!": 3 }

#-- 12 -------------------------------------------------------------

from warmup import p_score

class TestPalindromeScore(unittest.TestCase):
    pass

''' Test examples  '''
# print(p_score(121)) # 1
# print(p_score(48))  # 3
# print(p_score(198)) # 6

#-- 13 -------------------------------------------------------------

from warmup import is_increasing

class TestIncreasingSequence(unittest.TestCase):
    pass

''' Test examples  '''
# print(is_increasing([1,2,3,4,5])) # True
# print(is_increasing([1]))         # True
# print(is_increasing([5,6,-10]))   # False
# print(is_increasing([1,1,1,1]))   # False

#-- 14 -------------------------------------------------------------

from warmup import is_decreasing

class TestDecreasingSequence(unittest.TestCase):
    pass

''' Test examples  '''
# print(is_decreasing([5,4,3,2,1]))   # True
# print(is_decreasing([1,2,3]))       # False
# print(is_decreasing([100, 50, 20])) # True
# print(is_decreasing([1,1,1,1]))     # False

#-- 15 -------------------------------------------------------------

from warmup import is_hack

class TestHackNumbers(unittest.TestCase):
    pass

''' Test examples  '''
# print(next_hack(0))    # 1
# print(next_hack(10))   # 21
# print(next_hack(8031)) # 8191

if __name__ == '__main__':
    unittest.main()
