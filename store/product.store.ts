import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: null,
  }),

  getters: {},

  actions: {
    getAllProducts() {
      axios
        .get("https://api.escuelajs.co/api/v1/products")
        .then((response) => {
          this.products = response.data;
          // console.log(this.products);
          // return response;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    },
  },
});
