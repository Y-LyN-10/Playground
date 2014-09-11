#!/usr/bin/env python
# -*- coding: utf-8 -*-

def number_to_list(n):
	str_number = str(n)
	digits = []
	for ch in str_number:
		digit = int(ch)
		digits.append(digit)

	return digits

number = raw_input('Enter a number: ')
print(number_to_list(number))

# Examples:
# print(number_to_list(123))
# print(number_to_list(99999))
# print(number_to_list(123023))