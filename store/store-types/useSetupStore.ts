export const useSetupStore = defineStore("setupStore", () => {
  const count = ref(0);
  const name = ref("Setup Store");

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
