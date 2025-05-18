export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),

  getters: {
    getCartItems: (state) => state.cartItems || [],
  },

  actions: {
    initCart() {
      const savedCartItems = localStorage.getItem("cartItems");
      if (savedCartItems) {
        this.cartItems = JSON.parse(savedCartItems);
      }
    },

    addToCart(item: any) {
      const existingItem = this.cartItems.find((cartItem: any) => {
        return cartItem.id === item.id;
      });

      this.cartItems.push({
        ...item,
        quantity: item.quantity || 1,
      });

      this.saveCart();
    },

    clearCart() {
      this.cartItems = [];
      this.saveCart();
    },

    saveCart() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
  },
});
