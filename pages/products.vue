<script setup lang="ts">
  import { reactive, onBeforeMount } from "vue";
  import { storeToRefs } from "pinia";
  import { useProductStore } from "~/store/product.store";
  import { useCategoryStore } from "~/store/category.store";
  import { sortingOptions } from "~/constants/common.constant";
  import NoResults from "~/components/common/NoResults.vue";
  import ProductList from "~/components/products/ProductList.vue";
  import ProductFilter from "~/components/products/ProductFilter.vue";

  const productStore = useProductStore();
  const categoryStore = useCategoryStore();
  const { products } = storeToRefs(productStore);
  const { categories } = storeToRefs(categoryStore);
  const filter = reactive({
    title: "",
    selectedCategory: [],
    sortBy: "Sort by latest",
  });

  onBeforeMount(() => {
    productStore.getAllProducts();
    categoryStore.getAllCategories();
  });

  const filteredProductsHandler = (
    products: Array<any>,
    title: string,
    sortByCategory: Array<string>,
    sortBy: string
  ) => {
    let filteredProduct = [...products];

    //sortByTitle
    if (title) {
      filteredProduct = filteredProduct.filter((product: any) =>
        product?.title.toLowerCase().trim().includes(title.toLowerCase())
      );
    }

    //sortByCategories
    if (sortByCategory && sortByCategory.length > 0) {
      filteredProduct = filteredProduct.filter((product: any) =>
        sortByCategory.includes(product?.category?.id)
      );
    }

    //sortBy
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
    return filteredProductsHandler(
      products.value,
      filter.title,
      filter.selectedCategory,
      filter.sortBy
    );
  });
</script>

<template>
  <div>
    <div class="container py-10">
      <div class="space-y-6">
        <h1 class="text-secondary text-2xl font-semibold">
          {{ $t("BrowseAllProducts") }}
        </h1>

        <div class="flex gap-6">
          <ProductFilter
            :filter="filter"
            :sortingOptions="sortingOptions"
            :categories="categories"
            class="w-[30%] shrink-0"
          />

          <div class="grow">
            <ProductList
              v-if="filteredProductsList.length"
              :products="filteredProductsList"
            />
            <NoResults v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
