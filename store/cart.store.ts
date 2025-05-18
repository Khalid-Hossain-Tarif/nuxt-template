export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [] as any[],
  }),

  getters: {
    getCartItems: (state) => state.cartItems || [],
    totalCartItems: (state) =>
      state.cartItems.reduce((total, item) => total + item.quantity, 0),
  },

  actions: {
    initCart() {
      const savedCartItems = localStorage.getItem("cartItems");
      if (savedCartItems) {
        this.cartItems = JSON.parse(savedCartItems);
      }
    },

    addToCart(item: any) {
      const existingItem = this.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        this.cartItems.push({
          ...item,
          quantity: item.quantity || 1,
        });
      }

      // this.cartItems.push({
      //   ...item,
      //   quantity: item.quantity || 1,
      // });

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
