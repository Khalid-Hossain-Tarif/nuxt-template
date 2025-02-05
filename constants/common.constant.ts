import { reactive } from "vue";

export const sortingOptions = reactive([
  { name: "Sort by popularity", code: "popularity" },
  { name: "Sort by latest", code: "latest" },
  { name: "Sort by price: low to high", code: "lowToHigh" },
  { name: "Sort by price: high to low", code: "highToLow" },
]);
