export class ProductsPage {

    constructor(page) {
        this.page = page;
        this.searchProductInput = page.locator('#search_product');
        this.submitSearchButton = page.locator('#submit_search');
        this.addToCartButton = page.locator('.btn.btn-default.add-to-cart');
        this.confirmationPurchase = page.locator('.modal-content');
        this.purchasePopup = page.locator('.modal-content');
        this.purchaseConfirmation = page.getByText('Your product has been added to cart.');
    }

    async addProductToCart(product) {
        await this.searchProductInput.fill(product);
        await this.submitSearchButton.click();
        await this.addToCartButton.first().click();
    }
}