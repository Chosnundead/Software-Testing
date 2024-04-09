# calculator.py


def add(a, b):
    """
    Add two numbers
    """
    return a + b


def subtract(a, b):
    """
    Subtract one number from another
    """
    return a - b


def multiply(a, b):
    """
    Multiply two numbers
    """
    return a * b


def divide(a, b):
    """
    Divide one number by another
    """
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b


def modulo(a, b):
    """
    Get remainder of division
    """
    return a % b


def power(a, b):
    """
    Raise one number to power of another
    """
    return a**b


def root(a, b):
    """
    Get b-th root of a number
    """
    return a ** (1 / b)


def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)


def gcd(a, b):
    if b == 0:
        return a
    else:
        return gcd(b, a % b)


def lcm(a, b):
    return (a * b) // gcd(a, b)
