export const useOptionStore = defineStore("optionStore", {
  state: () => ({ count: 0, name: "Option Store" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
