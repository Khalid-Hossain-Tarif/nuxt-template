import { useAuthStore } from "~/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const token = useCookie("authToken");
  if (!token.value && !authStore.isAuthenticated) {
    return navigateTo("/user/login");
  }
});
