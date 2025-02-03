import { defineStore } from "pinia";

export const useLoaderStore = defineStore("loader", {
  state: () => ({
    isLoading: false,
  }),

  getters: {},

  actions: {
    startLoading() {
      this.isLoading = true;
    },
    stopLoading() {
      this.isLoading = false;
    },
  },
});
