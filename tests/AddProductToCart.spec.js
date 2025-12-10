import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pageobjects/ProductsPage';
const dataset = JSON.parse(JSON.stringify(require('../utils/productsTestData.json')));

async function searchAddProduct(page) {
    const productsPage = new ProductsPage(page);
    await productsPage.addProductToCart(dataset.product1);
    await expect(productsPage.purchasePopup).toBeVisible();
}

test('Adding product to cart should trigger confirmation popup', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await searchAddProduct(page);
    await expect(productsPage.purchaseConfirmation).toBeVisible();
});

