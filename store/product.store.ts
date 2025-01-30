import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
  }),

  getters: {},

  actions: {
    async getAllProducts() {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        this.products = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        // always executed
      }
    },
  },
});
