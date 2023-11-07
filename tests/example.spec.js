// @ts-check
const { test, expect } = require('@playwright/test');

test('check that "Projects" text is present', async ({ page }) => {
  await page.goto('/');
  
  // Using the expect method with a page locator
  // This will check if the text "Projects" is present anywhere on the page
  // Using a locator to get the text content of the h1 element
  const heading = page.locator('.hero-text h1');
  await expect(heading).toHaveText('Projects');

});



/* This test checks that the sidebar area is present on the page */
test('Check Sidebar Area', async ({ page }) => {
  await page.goto('/portfolio.html');
  await expect(page.locator('.side-bar')).toBeVisible();
});

/* This test checks that the profile image is visible on the page */
test('Check Profile Image On About Page', async ({ page }) => {
  await page.goto('/aboutme.html');
  await expect(page.locator('.title-img img')).toBeVisible();
});

/* This test checks that the About me text is visible on the page */
test('Check About Me Text', async ({ page }) => {
  await page.goto('/aboutme.html');
  await expect(page.locator('.column p')).toBeVisible();
});
/* This test checks that the About me title is visible on the page */
test('Check About Me Title', async ({ page }) => {
  await page.goto('/aboutme.html');
  await expect(page.locator('.title-text h1')).toBeVisible();
});

/* This test checks that the Portfolio title is visible on the page */
test('Check Portfolio title', async ({ page }) => {
  await page.goto('/portfolio.html');
  await expect(page.locator('.title-text h1')).toBeVisible();
});


/* This test checks that the Portfolio project text is visible on the page */
test('Check Portfolio Site Descrption Text', async ({ page }) => {
  await page.goto('/portfolio.html');
  await expect(page.locator('.project-text ul')).toBeVisible();
});

/* This test checks that the project cards are visible on the page */
test('Check Project cards', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.project-cards')).toBeVisible();
});

/* This test checks that the project cards buttons are visible on the page */
test('Check Project cards button', async ({ page }) => {
  await page.goto('/');
  const buttoncount = await page.locator('.card a').count();
  await expect(buttoncount).toBeGreaterThan(0);
});

/* This test checks that the Portfolio links are visible on the page */
test('Check Portfolio link', async ({ page }) => {
  await page.goto('/portfolio.html');
  const linksCount = await page.locator('.side-bar ul li').count();
  await expect(linksCount).toBe(4);
});

//Checks to see if newsletter form was set up right
test('Check Newsletter Form Elements', async ({ page }) => {
  await page.goto('/');
  const newsletterForm = await page.locator('.newsletter-form');
  const inputField = await newsletterForm.locator('input[type="email"]');
  const submitButton = await newsletterForm.locator('input[type="submit"]');
  expect(await inputField.isVisible()).toBe(true);
  expect(await submitButton.isVisible()).toBe(true);
  expect(await submitButton.getAttribute('value')).toBe('Submit');
});

//Checks for logo in header
test('Check Logo in Header', async ({ page }) => {
  await page.goto('/');
  const logoText = await page.locator('.logo').textContent();
  expect(logoText).toBe('Yaman Hannineh');
});

//Check for amount of links in nav bar
test('Check Navigation Menu in Header', async ({ page }) => {
  await page.goto('/');
  const menuItemCount = await page.locator('.menu .menu-item').count();
  expect(menuItemCount).toBe(2);
});

//Check hero content
test('Check Hero Section', async ({ page }) => {
  await page.goto('/');
  expect(await page.locator('.hero h1').textContent()).toBe('Projects');
  expect(await page.locator('.hero h2').textContent()).toBe('Innovation and Creativity.Click Below to Dive into My Diverse Portfolio of Inspiring Projects.');
});

//Check footer
test('Check Footer', async ({ page }) => {
  await page.goto('/');
  expect(await page.locator('.footer-name h4').textContent()).toBe('Yaman Hannineh');
});
test('check that UTF-8 meta tag is present', async ({ page }) => {
  //Arrange: Go to the site homepage
  await page.goto('/');

  //Act: Get the content attribute of the meta charset tag
  const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));

  //Assert: Check if the charset is set to UTF-8
  await expect(metaCharset).toBe('UTF-8');
});

//Checks description attributes
test('Check SEO Meta Description', async ({ page }) => {
  await page.goto('/');
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  await expect(metaDescription).not.toBe('');
});

/* This test checks that the meta keywords for SEO are not empty */
test('Check SEO Meta Keywords', async ({ page }) => {
  await page.goto('/');
  const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
  await expect(metaKeywords).not.toBe('');
});

/* This test checks that the responsive meta tag is present */
test('Check Responsive Meta Tag', async ({ page }) => {
  await page.goto('/');
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content');
  await expect(viewportMeta).toBe('width=device-width, initial-scale=1');
});

/* This test checks that the page title is not empty */
test('Check Page Title', async ({ page }) => {
  await page.goto('/');
  const title = await page.title();
  await expect(title).not.toBe('');
});