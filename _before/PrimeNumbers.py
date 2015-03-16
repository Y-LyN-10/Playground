#!/usr/bin/env python
# -*- coding: utf-8 -*-
import math

def is_prime(number):
	if number % 2 == 0 and number > 2 or number < 0:
		return False
	for i in range(3, int(math.sqrt(number)) + 1, 2):
		if number % i == 0:
			return False
	return True

print is_prime(1) # True
print is_prime(2) # True
print is_prime(8) # False
print is_prime(11) # True
print is_prime(-10) # False