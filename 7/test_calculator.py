# test_calculator.py

import unittest
import calculator


class TestCalculator(unittest.TestCase):

    def test_add(self):
        self.assertEqual(calculator.add(0, 0), 0)
        self.assertEqual(calculator.add(1, 0), 1)
        self.assertEqual(calculator.add(1, 1), 2)
        self.assertEqual(calculator.add(1, -1), 0)
        self.assertEqual(calculator.add(0, -1), -1)
        self.assertEqual(calculator.add(-1, -1), -2)
        self.assertEqual(calculator.add(-1, 0), -1)
        self.assertEqual(calculator.add(-1, 1), 0)

    def test_subtract(self):
        self.assertEqual(calculator.subtract(0, 0), 0)
        self.assertEqual(calculator.subtract(1, 0), 1)
        self.assertEqual(calculator.subtract(1, 1), 0)
        self.assertEqual(calculator.subtract(1, -1), 2)
        self.assertEqual(calculator.subtract(0, -1), 1)
        self.assertEqual(calculator.subtract(-1, -1), 0)
        self.assertEqual(calculator.subtract(-1, 0), -1)
        self.assertEqual(calculator.subtract(-1, 1), -2)

    def test_multiply(self):
        self.assertEqual(calculator.multiply(0, 0), 0)
        self.assertEqual(calculator.multiply(1, 0), 0)
        self.assertEqual(calculator.multiply(1, 1), 1)
        self.assertEqual(calculator.multiply(1, -1), -1)
        self.assertEqual(calculator.multiply(0, -1), 0)
        self.assertEqual(calculator.multiply(-1, -1), 1)
        self.assertEqual(calculator.multiply(-1, 0), 0)
        self.assertEqual(calculator.multiply(-1, 1), -1)

    def test_divide(self):
        self.assertEqual(calculator.divide(6, 3), 2)
        self.assertEqual(calculator.divide(10, 2), 5)
        with self.assertRaises(ValueError):
            calculator.divide(5, 0)

    def test_modulo(self):
        self.assertEqual(calculator.modulo(5, 3), 2)
        self.assertEqual(calculator.modulo(10, 3), 1)
        self.assertEqual(calculator.modulo(10, 4), 2)

    def test_power(self):
        self.assertEqual(calculator.power(2, 0), 1)
        self.assertEqual(calculator.power(2, 1), 2)
        self.assertEqual(calculator.power(2, 2), 4)
        self.assertEqual(calculator.power(2, 3), 8)
        self.assertEqual(calculator.power(2, -2), 0.25)
        self.assertEqual(calculator.power(2, -3), 0.125)
        self.assertEqual(calculator.power(0, 0), 1)
        self.assertEqual(calculator.power(0, 1), 0)

    def test_root(self):
        self.assertEqual(calculator.root(4, 2), 2)
        self.assertEqual(calculator.root(27, 3), 3)
        self.assertEqual(calculator.root(256, 2), 16)
        self.assertEqual(calculator.root(256, -2), 0.0625)

    def test_factorial(self):
        self.assertEqual(calculator.factorial(0), 1)
        self.assertEqual(calculator.factorial(1), 1)
        self.assertEqual(calculator.factorial(5), 120)

    def test_gcd(self):
        self.assertEqual(calculator.gcd(6, 9), 3)
        self.assertEqual(calculator.gcd(10, 15), 5)
        self.assertEqual(calculator.gcd(12, 18), 6)

    def test_lcm(self):
        self.assertEqual(calculator.lcm(12, 15), 60)
        self.assertEqual(calculator.lcm(15, 12), 60)
        self.assertEqual(calculator.lcm(6, 9), 18)


if __name__ == "__main__":
    unittest.main()
