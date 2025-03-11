import axios from "axios";
import Cookies from "js-cookie";
import { useLoaderStore } from "~/store/loader.store";
import { defineStore } from "pinia";

interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string;
  refreshToken: string;
  // users: Record<string, any>;
  //Record<K, V> is a TypeScript utility type that creates an object type where:
  // K (the first parameter) represents the key type.
  // V (the second parameter) represents the value type.
  user: User | null;
  isEmailExist: any;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    isAuthenticated: false,
    token: "",
    refreshToken: "",
    // users: {},
    user: null,
    isEmailExist: false,
  }),

  getters: {},

  actions: {
    async verifyRegisteredEmail(email: string) {
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        const response = await axios.post(
          `${config.public.apiBaseUrl}/users/is-available`,
          {
            email,
          }
        );
        this.isEmailExist = response.data.isAvailable;
      } catch (error) {
        console.log("Error in email verification:", error);
      } finally {
        loading.stopLoading();
      }
    },

    async createUser(user: User) {
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        await axios.post(`${config.public.apiBaseUrl}/users`, user);
        return true;
      } catch (error) {
        console.log("Error creating new user:", error);
        return false;
      } finally {
        loading.stopLoading();
      }
    },

    async setLogin(loginData: LoginData) {
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        const response = await axios.post(
          config.public.apiBaseUrl + "/auth/login",
          loginData
        );
        this.token = response.data.access_token;
        this.refreshToken = response.data.refresh_token;
        this.isAuthenticated = true;

        Cookies.set("authToken", this.token, {
          expires: 5,
          // sameSite: "Strict",
        });
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
      this.user = null;
      Cookies.remove("name");
    },

    async getUserProfile() {
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        const token = Cookies.get("authToken");
        if (!token) {
          console.log("No auth token found, user not authenticated!");
          return;
        }

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
      }
    },

    async updateUser(userData: Partial<User>, id: number) {
      //Partial<T> utility type: in TypeScript makes all properties of T optional. (Ex: role?: string; name?: string;)
      //In the updateUser function, might only update certain fields (e.g., just name or email), so making all properties optional allows flexibility
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        const response = await axios.put(
          config.public.apiBaseUrl + `/users/${id}`,
          {
            name: userData.name,
            email: userData.email,
            password: userData.password,
          }
        );
        this.user = response.data;
      } catch (error) {
        console.log("Error when login:", error);
      } finally {
        loading.stopLoading();
      }
    },
  },
});
