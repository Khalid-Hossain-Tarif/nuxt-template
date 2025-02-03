<script setup lang="ts">
  import { ref, reactive, onBeforeMount } from "vue";
  import { storeToRefs } from "pinia";
  import { useProductStore } from "~/store/product.store";
  import NoResults from "~/components/common/NoResults.vue";
  import ProductList from "~/components/products/ProductList.vue";
  import ProductFilter from "~/components/products/ProductFilter.vue";

  const store = useProductStore();
  const { products } = storeToRefs(store);
  const filter = reactive({
    title: null,
    category: null,
    sortBy: null,
  });

  onBeforeMount(() => {
    store.getAllProducts();
  });
</script>

<template>
  <div>
    <div class="container py-10">
      <div class="space-y-6">
        <h1 class="text-secondary text-2xl font-semibold">
          {{ $t("BrowseAllProducts") }}
        </h1>

        <ProductFilter :filter="filter" />

        <div>
          <ProductList
            v-if="products.length"
            :products="products"
          />
          <NoResults v-else />
        </div>
      </div>
    </div>
  </div>
</template>
