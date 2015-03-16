#!/usr/bin/env python
# -*- coding: utf-8 -*-

def check_ab_separation(str):
	counter = 0

	for i in str:
		if i == 'a':
			counter = 0
		elif i == 'b':
			if counter == 3:
				return True
		else:
			counter+=1

	return False

print(check_ab_separation('after badly')) # false
print(check_ab_separation('Laura sobs'))  # true