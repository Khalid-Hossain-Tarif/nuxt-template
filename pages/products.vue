<script setup lang="ts">
  import { onBeforeMount } from "vue";
  import { storeToRefs } from "pinia";
  import { useProductStore } from "~/store/product.store";
  import NoResults from "~/components/common/NoResults.vue";
  import ProductList from "~/components/products/ProductList.vue";

  const store = useProductStore();
  const { products } = storeToRefs(store);

  onBeforeMount(() => {
    store.getAllProducts();
  });
</script>

<template>
  <div>
    <div class="container py-10">
      <div>
        <h1 class="mb-6 text-secondary text-2xl font-semibold">
          {{ $t("BrowseAllProducts") }}
        </h1>
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
