import re
regex = re.compile(r"^.*interfaceOpDataFile.*$", re.IGNORECASE)

def is_palindrome(s):
	s = str(s).lower()
	s = re.sub('[\W+]', '', s)

	if len(s) <= 1:
		return True
	elif s[:1] != s[len(s)-1:]:
		return False
	else:
		return is_palindrome(s[1:len(s)-1])

word = raw_input()
print(is_palindrome(word))

# Some examples
# print(is_palindrome('Anna'))
# print(is_palindrome(11455411))
# print(is_palindrome('A dog! A panic in a pagoda!'))
# print(is_palindrome('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'))