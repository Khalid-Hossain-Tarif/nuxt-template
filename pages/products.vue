<script setup lang="ts">
  import { onBeforeMount } from "vue";
  import { storeToRefs } from "pinia";
  import { useProductStore } from "~/store/product.store";
  import { displayPrice } from "~/utils/Helper";
  import NoResults from "~/components/common/NoResults.vue";

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
        <h1 class="mb-6 text-secondary text-2xl font-semibold">Product Page</h1>
        <div>
          <div
            v-if="products.length"
            class="grid grid-cols-4 gap-4"
          >
            <div
              v-for="product in products"
              :key="product.id"
              class="border border-gray-200 rounded-lg"
            >
              <img
                :src="product.images[0]"
                :alt="product.title"
                class="rounded-t-lg"
              />
              <div class="p-4">
                <h4 class="text-dark text-xl font-medium line-clamp-1">
                  {{ product.title }}
                </h4>
                <p class="mt-1 text-dark-secondary">
                  {{ displayPrice(product.price) }}
                </p>
              </div>
            </div>
          </div>

          <NoResults v-else />
        </div>
      </div>
    </div>
  </div>
</template>
