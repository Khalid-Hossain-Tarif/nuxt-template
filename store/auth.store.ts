import axios from "axios";
import { useLoaderStore } from "~/store/loader.store";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    token: "",
    user: {},
  }),

  getters: {},

  actions: {
    async createUser(user: any) {
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        await axios.post(config.public.apiBaseUrl + "/users", {
          name: user.name,
          email: user.email,
          password: user.password,
          avatar: user.avatar,
        });
      } catch (error) {
        console.log("Error creating new user:", error);
      } finally {
        loading.stopLoading();
      }
    },
  },
});
