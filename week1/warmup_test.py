#!/usr/bin/env python
# -*- coding: utf-8 -*-

from warmup import factorial
import unittest

class FactorialTests(unittest.TestCase):
    def test_factorial_of_zero_should_be_one(self):
        factorial_result = factorial(0)
        self.assertEqual(factorial_result, 1)

    def test_factorial_of_one_should_be_one(self):
        factorial_result = factorial(1)
        self.assertEqual(factorial_result, 1)

    def test_factorial_of_five_should_be_120(self):
        factorial_result = factorial(5)
        self.assertEqual(factorial_result, 120)

if __name__ == '__main__':
    unittest.main()
