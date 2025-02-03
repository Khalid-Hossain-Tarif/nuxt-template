<script setup lang="ts">
  import { displayPrice } from "~/utils/Helper";

  const props = defineProps({
    products: Array<object>,
  });
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
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
        <h4 class="text-dark text-xl font-medium line-clamp-1 capitalize">
          {{ product.title }}
        </h4>
        <p class="mt-1 text-dark-secondary">
          {{ displayPrice(product.price) }}
        </p>
      </div>
    </div>
  </div>
</template>
