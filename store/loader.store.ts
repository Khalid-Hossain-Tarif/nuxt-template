export const useLoaderStore = defineStore("loader", {
  state: () => ({
    isLoading: false,
  }),

  getters: {},

  actions: {
    true() {
      this.isLoading = true;
    },
    false() {
      this.isLoading = false;
    },
  },
});
