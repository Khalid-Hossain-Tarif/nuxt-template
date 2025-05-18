<script lang="ts" setup>
  import { onBeforeMount } from "vue";
  import { storeToRefs } from "pinia";
  import { useProductStore } from "~/store/product.store";
  import { currency } from "~/utils/Helper";
  import AddToCart from "~/components/products/AddToCart.vue";

  const route = useRoute();
  const productStore = useProductStore();
  const { singleProduct } = storeToRefs(productStore);

  onBeforeMount(() => {
    productStore.getSingleProduct(Number(route.params.id));
  });
</script>

<template>
  <div>
    <div class="container py-10">
      <div class="grid grid-cols-3 gap-8">
        <div class="col-span-1 pb-3 overflow-x-auto flex gap-8">
          <img
            v-for="(img, index) in singleProduct.images"
            :key="index"
            :src="img ? img : 'https://i.imgur.com/cHddUCu.jpeg'"
            :alt="singleProduct?.title"
            class="rounded w-full h-[300px] object-contain"
          />
        </div>

        <div class="col-span-2 space-y-5">
          <div class="space-y-3">
            <h2 class="text-secondary text-2xl font-medium">
              {{ singleProduct?.title }}
            </h2>

            <p class="line-clamp-3 text-sm text-dark-secondary">
              {{ singleProduct?.description }}
            </p>

            <p>
              <span class="font-medium text-dark">Price: </span>
              <span class="text-dark-secondary"
                >{{ currency }}{{ singleProduct?.price }}</span
              >
            </p>
          </div>

          <div>
            <AddToCart :item="singleProduct" />
          </div>

          <p class="text-sm">
            <span class="font-medium text-dark">Category: </span>
            <nuxt-link
              :to="`/category/${singleProduct?.category?.id}/${singleProduct?.category?.name.toLowerCase().replace(/[\s/]+/g, '-')}`"
              class="text-dark-secondary hover:text-primary underline capitalize"
              >{{ singleProduct?.category?.name.toLowerCase() }}</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
