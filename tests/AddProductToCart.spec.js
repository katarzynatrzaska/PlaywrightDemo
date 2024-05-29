import { test, expect } from '@playwright/test';
import { pageURL } from '../utils/pageURL';
import { ProductsPage } from '../pageobjects/ProductsPage';
const dataset = JSON.parse(JSON.stringify(require('../utils/productsTestData.json')));

const productsURL = pageURL.productsURL;

async function searchAddProduct(page) {
    const productsPage = new ProductsPage(page);
    await page.goto(productsURL);
    await productsPage.addProductToCart(dataset.product1);
    await expect(productsPage.purchasePopup).toBeVisible();
}

test('Adding product to cart should trigger confirmation popup', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await searchAddProduct(page);
    await expect(productsPage.purchaseConfirmation).toBeVisible();
});

test('Purchase confirmation popup screenshot', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await searchAddProduct(page);
    await productsPage.purchasePopup.screenshot({ path: 'confirmation-purchase-popup.png' });
    expect(await page.screenshot()).toMatchSnapshot('confirmation-purchase-popup.png', { maxDiffPixels: 400000 });
});