def count_vowels(text):
	vowels = "aeiou"
	for v in vowels:
    	print v, text.lower().count(v)

print(count_vowels('Python'))
print(count_vowels('Theistareykjarbunga')) #It's a volcano name!
