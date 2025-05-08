<script setup lang="ts">
  import { computed, ref, reactive, watch } from "vue";
  import { sortingOptions } from "~/constants/common.constant";
  import NoResults from "~/components/common/NoResults.vue";
  import ProductList from "~/components/products/ProductList.vue";
  import ProductFilter from "~/components/products/ProductFilter.vue";

  const route = useRoute();
  const router = useRouter();
  const products = ref([]);
  const categories = ref([]);

  const filter = reactive({
    title: (route.query.title as string) || "",
    selectedCategory: route.query.categoryId
      ? [parseInt(route.query.categoryId as string)]
      : ([] as number[]),
  });

  // Watch for filter changes to update URL
  watch(
    filter,
    (newFilter) => {
      const query = {} as Record<string, string>;

      if (newFilter.title) {
        query.title = newFilter.title;
      }

      if (newFilter.selectedCategory.length > 0) {
        query.categoryId = newFilter.selectedCategory[0].toString();
      }

      router.push({ query });
    },
    { deep: true }
  );

  // Function to fetch products with current filters
  const fetchProducts = async () => {
    try {
      let url = "https://api.escuelajs.co/api/v1/products";
      const params = new URLSearchParams();

      if (filter.title) {
        params.append("title", filter.title);
      }

      if (filter.selectedCategory.length > 0) {
        params.append("categoryId", filter.selectedCategory[0].toString());
      }

      if (params.toString()) {
        url += "?" + params.toString();
      }

      const response = await $fetch(url);
      products.value = response || [];
    } catch (error) {
      console.error("Error fetching products:", error);
      products.value = [];
    }
  };

  // Initial fetch
  fetchProducts();

  // Watch for filter changes to refetch data
  watch(
    filter,
    () => {
      fetchProducts();
    },
    { deep: true }
  );

  // Fetch categories
  const { data: categoriesData } = await useAsyncData("categories", () =>
    $fetch("https://api.escuelajs.co/api/v1/categories")
  );

  categories.value = categoriesData.value || [];
</script>

<template>
  {{ filter }}
  <div>
    <div class="container py-10">
      <div class="space-y-6">
        <div class="flex justify-between items-center gap-2">
          <h1 class="text-secondary text-2xl font-semibold shrink-0">
            Browse Products (SSR)
          </h1>
        </div>

        <div class="flex gap-8">
          <ProductFilter
            :filter="filter"
            :categories="categories"
            class="w-[25%] shrink-0"
          />

          <div class="grow">
            <ProductList
              v-if="products.length"
              :products="products"
            />
            <NoResults v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
