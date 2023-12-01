const {ShoppingCart} = require('./anatomy');

describe('ShoppingCart', () => {
    let cart;

    beforeEach(() => {
        cart = new ShoppingCart()
    });

    afterEach(() => {
        cart.emptyCart();
    });

    it('call addItem in cart', () => {
        cart.addItem('Product 1');
        expect(cart.getItemCount()).toBe(1);
    });

    it('call addItem in cart with 2 items', () => {
        cart.addItem('Product 1');
        cart.addItem('Product 2');
        expect(cart.getItemCount()).toBe(2);
    });

    it('call addItem in cart and empty after that', () => {
        cart.addItem('Product 1');
        cart.emptyCart();
        expect(cart.getItemCount()).toBe(0);
    });
});