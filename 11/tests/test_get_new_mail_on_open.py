import pytest
from selenium import webdriver
from pages.home_page import HomePage
import re


@pytest.fixture(scope="module")
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()


def test_get_new_mail_on_open(driver):
    home_page = HomePage(driver)
    driver.get("https://10minutemail.net")
    home_page.accept_cookies()
    email = home_page.get_email()

    assert re.match(
        r"[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+", email
    ), "Email does not match the required pattern."
