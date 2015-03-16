#!/usr/bin/env python
# -*- coding: utf-8 -*-

def count_nth_fib(n):
	a, b = 0, 1
	for _ in range(n):
		a, b = b, a+b
	return a

print count_nth_fib(10)