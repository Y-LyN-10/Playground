#!/usr/bin/env python
# -*- coding: utf-8 -*-

def sum_of_digits(n):
	if n < 0: n = -n
	str_number = str(n)
	sum = 0
	for ch in str_number:
		digit = int(ch)
		sum += digit

	return sum

number = raw_input('Enter a number: ')
print sum_of_digits(number)

# Examples:
# print sum_of_digits(1325132435356)
# print sum_of_digits(-10)

