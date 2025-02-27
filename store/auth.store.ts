import axios from "axios";
import { useLoaderStore } from "~/store/loader.store";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    token: "",
    refreshToken: "",
    users: {},
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

    async setLogin(loginData: any) {
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        const response = await axios.post(
          config.public.apiBaseUrl + "/auth/login",
          {
            email: loginData.email,
            password: loginData.password,
          }
        );
        this.token = response.data.access_token;
        this.refreshToken = response.data.refresh_token;
        this.isAuthenticated = true;
      } catch (error) {
        console.log("Error when login:", error);
      } finally {
        loading.stopLoading();
        // console.log("login successful.", this.isAuthenticated);
        // console.log("token: ", this.token);
        // console.log("refreshToken: ", this.refreshToken);
      }
    },

    async logout() {
      this.isAuthenticated = false;
      this.token = "";
      this.refreshToken = "";
      this.users = {};
    },

    async getUserProfile() {
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        const response = await axios.get(
          config.public.apiBaseUrl + "/auth/profile",
          {
            headers: { Authorization: `Bearer ${this.token}` },
          }
        );
        this.user = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.stopLoading();
        console.log("user profile data: ", this.user);
      }
    },
  },
});
