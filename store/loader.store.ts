import { defineStore } from "pinia";

export const useLoaderStore = defineStore("loader", {
  state: () => ({
    isLoading: false,
  }),

  getters: {
    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    startLoading() {
      this.isLoading = true;
    },
    stopLoading() {
      this.isLoading = false;
    },
  },
});
