<script setup lang="ts">
  import { reactive, onBeforeMount } from "vue";
  import { storeToRefs } from "pinia";
  import { useProductStore } from "~/store/product.store";
  import { sortingOptions } from "~/constants/common.constant";
  import NoResults from "~/components/common/NoResults.vue";
  import ProductList from "~/components/products/ProductList.vue";
  import ProductFilter from "~/components/products/ProductFilter.vue";

  const store = useProductStore();
  const { products } = storeToRefs(store);
  const filter = reactive({
    title: "",
    category: null,
    sortBy: "Sort by latest",
  });

  onBeforeMount(() => {
    store.getAllProducts();
  });

  const filteredProductsHandler = (
    products: any,
    title: string,
    // category: any,
    sortBy: string
  ) => {
    let filteredProduct = [...products];

    if (title) {
      filteredProduct = filteredProduct.filter((product: any) =>
        product?.title.toLowerCase().trim().includes(title.toLowerCase())
      );
    }

    if (sortBy === "Sort by latest") {
      filteredProduct.sort((a, b) => {
        return Date.parse(b.creationAt) - Date.parse(a.creationAt);
      });
    } else if (sortBy === "Sort by price: low to high") {
      filteredProduct.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Sort by price: high to low") {
      filteredProduct.sort((a, b) => b.price - a.price);
    }

    return filteredProduct;
  };

  const filteredProductsList = computed(() => {
    return filteredProductsHandler(products.value, filter.title, filter.sortBy);
  });
</script>

<template>
  <div>
    <div class="container py-10">
      <div class="space-y-6">
        <h1 class="text-secondary text-2xl font-semibold">
          {{ $t("BrowseAllProducts") }}
        </h1>

        <ProductFilter
          :filter="filter"
          :sortingOptions="sortingOptions"
        />

        <div>
          <ProductList
            v-if="filteredProductsList.length"
            :products="filteredProductsList"
          />
          <NoResults v-else />
        </div>
      </div>
    </div>
  </div>
</template>
