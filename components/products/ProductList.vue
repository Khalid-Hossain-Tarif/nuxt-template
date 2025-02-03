<script setup lang="ts">
  import { displayPrice } from "~/utils/Helper";
  import IconsTag from "~/components/icons/Tag.vue";

  const props = defineProps<{
    products: {
      type: Array<any>;
      required: true;
      default: () => [];
    };
  }>();
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div
      v-for="product in products"
      :key="product?.id"
      class="relative border border-gray-200 rounded-lg"
    >
      <img
        :src="product?.images[0]"
        :alt="product?.title"
        class="rounded-t-lg"
      />
      <div class="p-4">
        <h4 class="text-dark text-xl font-medium line-clamp-1 capitalize">
          {{ product?.title }}
        </h4>
        <p class="my-1 text-dark-secondary">
          {{ displayPrice(product?.price) }}
        </p>

        <div class="flex items-center gap-x-1">
          <IconsTag class="lg:w-5 text-secondary" />
          <div class="flex items-center gap-x-1">
            <Button
              variant="link"
              size="sm"
              class="p-0 text-secondary hover:text-primary"
            >
              {{ product?.category?.name }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
