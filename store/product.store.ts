import axios from "axios";
import { useLoaderStore } from "~/store/loader.store";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
  }),

  getters: {},

  actions: {
    async getAllProducts() {
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        const response = await axios.get(
          config.public.apiBaseUrl + "/products"
        );
        this.products = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        // always executed
        loading.stopLoading();
      }
    },
  },
});
