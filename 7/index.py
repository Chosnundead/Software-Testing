import os
import time

os.system("coverage run --source=calculator test_calculator.py")
time.sleep(1)
os.system("coverage report")
