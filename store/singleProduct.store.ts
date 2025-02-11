import axios from "axios";
import { useLoaderStore } from "~/store/loader.store";
import { defineStore } from "pinia";

export const useSingleProductStore = defineStore("singleProduct", {
  state: () => ({
    singleProduct: {},
  }),

  getters: {},

  actions: {
    async getSingleProduct(id: number) {
      const config = useRuntimeConfig();
      const loading = useLoaderStore();
      loading.startLoading();
      try {
        const response = await axios.get(
          config.public.apiBaseUrl + `/products/${id}`
        );
        this.singleProduct = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.stopLoading();
      }
    },
  },
});
