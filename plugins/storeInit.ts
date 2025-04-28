import { useAuthStore } from "~/store/auth.store";

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore();
  if (process.client) {
    try {
      await Promise.all([authStore.initializeAuthStore()]);
    } catch (e) {
      console.log(e);
      console.log("error from initial store call.");
    }
  }
});
