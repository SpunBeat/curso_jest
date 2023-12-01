class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItemCount() {
        return this.items.length;
    }

    emptyCart() {
        this.items = [];
    }
}

module.exports = { ShoppingCart };