import axios from "axios";
import { useLoaderStore } from "~/store/loader.store";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
  }),

  getters: {},

  actions: {
    async getAllCategories() {
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        const response = await axios.get(
          config.public.apiBaseUrl + "/categories"
        );
        this.categories = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        // always executed
        loading.stopLoading();
      }
    },
  },
});
