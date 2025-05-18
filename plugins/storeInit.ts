import { useAuthStore } from "~/store/auth.store";
import { useCartStore } from "~/store/cart.store";

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore();
  const cartStore = useCartStore();
  if (import.meta.client) {
    try {
      await Promise.all([authStore.initializeAuthStore()]);
      await Promise.all([cartStore.initCart()]);
    } catch (e) {
      console.log(e);
      console.log("error from initial store call.");
    }
  }
});
