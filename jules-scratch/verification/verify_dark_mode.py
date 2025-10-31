
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173")

    # Click the theme toggle button
    page.click('button[aria-label="Toggle theme"]')

    # Wait for the theme to change
    page.wait_for_timeout(500)

    page.screenshot(path="jules-scratch/verification/dark-mode.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
