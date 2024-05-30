from selenium.webdriver.common.by import By
from core.base_page import BasePage
from selenium.webdriver.support.ui import Select


class HomePage(BasePage):
    consent_button = (By.CLASS_NAME, "fc-cta-consent")
    email_input = (By.ID, "fe_text")
    header_text = (By.XPATH, "//*[@id='left']/h2")
    footer_text = (By.XPATH, "//*[@id='featured']/div[1]/div[1]/p")
    language_selector = (By.ID, "lang_select")
    about_link = (By.XPATH, '//*[@id="menu"]/ul/li[1]/a')
    support_link = (By.XPATH, '//*[@id="support-table"]/div[1]/a')
    translate_link = (By.XPATH, '//*[@id="menu"]/ul/li[2]/a')

    def translate_button(self):
        translate_button = self.driver.find_element(*self.translate_link)
        href = translate_button.get_attribute("href")
        self.driver.get(href)

    def support_button(self):
        support_button = self.driver.find_element(*self.support_link)
        href = support_button.get_attribute("href")
        self.driver.get(href)

    def about_button(self):
        about_button = self.driver.find_element(*self.about_link)
        href = about_button.get_attribute("href")
        self.driver.get(href)

    def accept_cookies(self):
        try:
            self.click_element(self.consent_button)
        except:
            print("Already accepted")

    def get_email(self):
        return self.get_attribute(self.email_input, "value")

    def select_language(self, language):
        language_selector = Select(self.driver.find_element(*self.language_selector))
        language_selector.select_by_value(language)

    def get_header_text(self):
        return self.get_text(self.header_text)

    def get_footer_text(self):
        return self.get_text(self.footer_text)
