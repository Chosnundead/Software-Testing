import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import static org.testng.Assert.assertTrue;

/**
 * This test class tests the website https://10minutemail.net
 * to get a new mail on open.
 */
public class TenMinuteMailWebTest {

    /**
     * The web driver object to interact with the browser.
     */
    private WebDriver driver;

    /**
     * Setup method to create a new browser instance.
     */
    @BeforeTest
    public void setup() {
        driver = new ChromeDriver();
    }

    /**
     * Test method to open the website and get a new mail on open.
     */
    @Test
    public void getNewMailOnOpen() {
        driver.get("https://10minutemail.net");

        // Wait until the email input field is visible
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.id("fe_text")));

        // Click on the consent button to accept cookies
        try {
        driver.findElement(By.className("fc-cta-consent")).click();
        } catch(Exception e) {
            System.out.println("Already accepted");
        }

        // Get the email from the email input field
        String email = driver.findElement(By.id("fe_text")).getAttribute("value");

        // Assert that the email matches the required pattern
        assertTrue(email.matches("[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]+"),
                "Email does not match the required pattern.");
    }

    /**
     * Test method to change the language of the website to Belorussian and check
     * if the header and footer texts are in Belorussian.
     */
    @Test
    public void setBelorussianLanguage() {
        // Open the website
        driver.get("https://10minutemail.net");

        // Wait until the email input field is visible
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.id("fe_text")));

        // Click on the consent button to accept cookies
        try {
        driver.findElement(By.className("fc-cta-consent")).click();
        } catch(Exception e) {
            System.out.println("Already accepted");
        }
        // Select Belorussian language from the language selector
        Select languageSelector = new Select(driver.findElement(By.id("lang_select")));
        languageSelector.selectByValue("be");

        // Assert that the header text contains expected text
        WebElement headerText = driver.findElement(By.xpath("//*[@id=\"left\"]/h2"));
        assertTrue(headerText.getText().contains("Запрашаем!"),
                "Header text does not contain expected text 'Запрашаем!'");

        // Assert that the footer text contains expected text
        WebElement footerText = driver.findElement(By.xpath("//*[@id=\"featured\"]/div[1]/div[1]/p"));
        assertTrue(footerText.getText().contains("Усе паштовыя скрыні аднаразовыя, больш ніхто не зможа скарыстацца паштовай скрыняй пасля выдалення."),
                "Header text does not contain expected text 'Усе паштовыя скрыні аднаразовыя, больш ніхто не зможа скарыстацца паштовай скрыняй пасля выдалення.'");
    }


    /**
     * Teardown method to close the browser instance.
     */
    @AfterTest
    public void teardown() {
        driver.quit();
    }
}
