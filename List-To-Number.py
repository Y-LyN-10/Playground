#!/usr/bin/env python
# -*- coding: utf-8 -*-

def list_to_number(digits):
	str_number = "".join(str(d) for d in digits)
	number = int(str_number)

	return number

# Example:
# print list_to_number([1,2,3])