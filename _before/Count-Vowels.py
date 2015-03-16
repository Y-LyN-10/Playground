#!/usr/bin/env python
# -*- coding: utf-8 -*-

def count_vowels(text):
	vowels = 'aeiouy'
	text = text.lower()
	counter = 0

	for char in text:
		for v in vowels:
			if char == v:
				counter+=1

	return counter

print(count_vowels('Python')) # 2
print(count_vowels("grrrrgh!")) # 0
print(count_vowels("Github is the second best thing that happend to programmers, after the keyboard!")) #22
print(count_vowels("A nice day to code!")) # 8