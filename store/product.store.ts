import axios from "axios";
import { useLoaderStore } from "~/store/loader.store";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
  }),

  getters: {},

  actions: {
    async getAllProducts() {
      const loading = useLoaderStore();
      try {
        loading.true();
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        this.products = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        // always executed
        loading.false();
      }
    },
  },
});
