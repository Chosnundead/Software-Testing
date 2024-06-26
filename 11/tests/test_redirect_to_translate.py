import pytest
from selenium import webdriver
from pages.home_page import HomePage


@pytest.fixture(scope="module")
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()


def test_get_new_mail_on_open(driver):
    home_page = HomePage(driver)
    driver.get("https://10minutemail.net")
    home_page.accept_cookies()
    home_page.translate_button()
    assert driver.current_url.rfind("10minutemail.net/translate") != -1, "Wrong URL"
