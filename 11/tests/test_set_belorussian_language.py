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
    home_page.select_language("be")

    header_text = home_page.get_header_text()
    assert (
        "Запрашаем!" in header_text
    ), "Header text does not contain expected text 'Запрашаем!'"

    footer_text = home_page.get_footer_text()
    assert (
        "Усе паштовыя скрыні аднаразовыя, больш ніхто не зможа скарыстацца паштовай скрыняй пасля выдалення."
        in footer_text
    ), "Footer text does not contain expected text 'Усе паштовыя скрыні аднаразовыя, больш ніхто не зможа скарыстацца паштовай скрыняй пасля выдалення.'"
