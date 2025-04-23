import axios from "axios";
import { useLoaderStore } from "~/store/loader.store";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
    categoryWiseProducts: [],
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
        loading.stopLoading();
      }
    },

    async getAllCategoryWiseProducts(id: number) {
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        const response = await axios.get(
          config.public.apiBaseUrl + `/categories/${id}/products`
        );
        this.categoryWiseProducts = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.stopLoading();
      }
    },
  },
});
