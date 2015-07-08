#!/usr/bin/env python
# -*- coding: utf-8 -*-

def insert_dash(num):
	num_as_string = str(num);
	result = []

	digit = int(num_as_string[0])
	result.append(digit)

	for i in range(1, len(num_as_string)):
		if digit % 2 != 0:
			if int(num_as_string[i]) % 2 != 0:
				result.append('-')

		result.append(digit)
		digit = int(num_as_string[i])

	return ''.join(map(str, result))

print(insert_dash(99946)) # 9-9-946
print(insert_dash(56730)) # 567-30