#!/usr/bin/env python
# -*- coding: utf-8 -*-

def ex_oh(str):
	x_counter = 0
	o_counter = 0

	for i in str:
		if i == 'x':
			x_counter+=1
		elif i == 'o':
			o_counter+=1
		else:
			continue

	return True if x_counter == o_counter else False

print(ex_oh('xoxoox')) # true
print(ex_oh('oooxoo')) # false