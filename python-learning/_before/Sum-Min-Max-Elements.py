#!/usr/bin/env python
# -*- coding: utf-8 -*-

def sum_of_min_and_max(arr):
	arr = sorted(arr)
	total_sum = arr[0] + arr[-1]

	return total_sum

# Examples:
print sum_of_min_and_max([1,2,3,4,5,6,8,9])
# print sum_of_min_and_max([-10,5,10,100])