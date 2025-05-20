import { defineStore } from "pinia";
import { useAuthStore } from "./auth.store";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [] as any[],
    quantity: 1,
    deliveryCharge: 50,
  }),

  getters: {
    getCartItems: (state) => state.cartItems || [],
    totalCartItems: (state) =>
      state.cartItems.reduce((total, item) => total + item.quantity, 0),
    subtotal: (state) =>
      state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    total: (state) =>
      state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ) + state.deliveryCharge,
  },

  actions: {
    initCart() {
      if (import.meta.client) {
        const savedCartItems = localStorage.getItem("cartItems");
        if (savedCartItems) {
          this.cartItems = JSON.parse(savedCartItems);
        }
      }
    },

    resetQuantity() {
      this.quantity = 1;
    },

    handleQuantity(type: string) {
      if (type === "decrease") {
        if (this.quantity > 1) {
          this.quantity--;
        }
      } else {
        this.quantity++;
      }
    },

    updateQuantity(type: string, itemId: number) {
      const item = this.cartItems.find((cartItem) => cartItem.id === itemId);
      if (!item) return;

      if (type === "decrease") {
        if (item.quantity > 1) {
          item.quantity--;
        }
      } else {
        item.quantity++;
      }

      this.saveCart();
    },

    addToCart(item: any) {
      const authStore = useAuthStore();

      if (!authStore.isAuthenticated) {
        return;
      }

      const existingItem = this.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // existingItem.quantity += item.quantity;
        console.log("already added to the cart!");
        return;
      } else {
        this.cartItems.push({
          ...item,
          quantity: this.quantity,
        });
      }

      this.saveCart();
      this.resetQuantity();
    },

    removeItem(itemId: number) {
      this.cartItems = this.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
      this.saveCart();
    },

    clearCart() {
      this.cartItems = [];
      this.saveCart();
    },

    saveCart() {
      if (import.meta.client) {
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      }
    },
  },
});
