
import { test, expect } from '@playwright/test';

// import {HomePage} from '../node_modules/pages/HomePage';

test('Test für compeople.de ', async ({ page }) => {

  await page.goto('https://www.compeople.de/');

  await expect.soft(page).toHaveURL('https://www.compeople.de/');


  await expect.soft(page.locator('#CookieBoxSaveButton')).toContainText('Einwilligung speichern');

  
  await expect.soft(page).toHaveTitle('crafting digital solutions with a human touch - compeople');

  
  await page.getByRole('button', { name: 'Einwilligung speichern' }).click();

  await expect.soft(page.locator('#content')).toContainText('we believe in crafting digital solutions with a human touch');


  await expect.soft(page.locator('body')).toContainText('Karriere');

  const karriereButton = await page.getByText('Karriere').first();

  await expect.soft(karriereButton).toBeVisible();

  await karriereButton.click();

  await expect.soft(page.locator('h1')).toContainText('join us in crafting digital solutions with your human touch');

  await expect.soft(page.locator('#content')).toContainText('Offene Stellen');

  await expect.soft(page.locator('#content')).toContainText('Wen wir suchen, wo wir wachsen');

  await expect.soft(page.locator('#content')).toContainText('MEHR');

  //offenenStellenButton
  const offenenStellenButton = await page.getByRole('link', { name: 'Offene Stellen Wen wir suchen' });
  await expect.soft(offenenStellenButton).toBeVisible();
  await offenenStellenButton.click();

  await expect.soft(page.locator('#offenestellen')).toContainText('Unsere offenen Stellen');

  await expect.soft(page.locator('#offenestellen')).toContainText('weitere Stellen');

  // weitereStellenButton
  const weitereStellenButton = await page.getByRole('link', { name: 'weitere Stellen' });
  await expect.soft(weitereStellenButton).toBeVisible();
  await weitereStellenButton.click();

  const pageTitle2 = await page.title();
  await console.log(' Page title 2 is:', pageTitle2);
  await expect.soft(page).toHaveTitle('Offene Stellen - compeople');


  await page.waitForTimeout(4000);

  await page.close;
});