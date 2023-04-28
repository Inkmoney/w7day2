# https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/python

# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


def evenodd(number):
      if number % 2 == 0:
            return "Even"
      else:
            return "Odd"

print(evenodd(4)) 


# https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/python

# We need a function that can transform a number (integer) into a string.

# What ways of achieving this do you know?

# Examples (input --> output):
# 123  --> "123"
# 999  --> "999"
# -100 --> "-100"

def numberstring(num):
      return f"{num}"

print(numberstring(123)) 




