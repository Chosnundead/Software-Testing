import pytest
from selenium import webdriver
from pages.home_page import HomePage


@pytest.fixture(scope="module")
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()


def test_set_belorussian_language(driver):
    home_page = HomePage(driver)
    driver.get("https://10minutemail.net")
    home_page.accept_cookies()
    home_page.select_language("en")

    header_text = home_page.get_header_text()
    assert (
        "Welcome to 10 Minute Mail" in header_text
    ), "Header text does not contain expected text 'Welcome to 10 Minute Mail'"

    footer_text = home_page.get_footer_text()
    assert (
        "All mailboxes are disposed, once your mailbox has been deleted no one will ever be able to access it again."
        in footer_text
    ), "Footer text does not contain expected text 'All mailboxes are disposed, once your mailbox has been deleted no one will ever be able to access it again.'"
