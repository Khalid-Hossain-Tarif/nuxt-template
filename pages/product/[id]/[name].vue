<script lang="ts" setup>
  import { onBeforeMount } from "vue";
  import { storeToRefs } from "pinia";
  import { useSingleProductStore } from "~/store/singleProduct.store";
  import { currency } from "~/utils/Helper";

  const route = useRoute();
  const singleProductStore = useSingleProductStore();
  const { singleProduct } = storeToRefs(singleProductStore);

  onBeforeMount(() => {
    singleProductStore.getSingleProduct(Number(route.params.id));
  });
</script>

<template>
  <div>
    {{ singleProduct }}
    <div class="container py-10">
      <div class="grid grid-cols-3 gap-8">
        <div class="col-span-1">
          <img
            v-for="(img, index) in singleProduct.images"
            :key="index"
            :src="
              img
                ? 'https://i.imgur.com/cHddUCu.jpeg'
                : 'https://i.imgur.com/cHddUCu.jpeg'
            "
            :alt="singleProduct?.title"
            class="rounded"
          />
        </div>
        <div class="col-span-2 space-y-2">
          <h2 class="text-secondary text-2xl font-medium">
            {{ singleProduct?.title }}
          </h2>
          <p class="line-clamp-3 text-sm text-dark-secondary">
            {{ singleProduct?.description }}
          </p>
          <p class="text-sm">
            <span class="font-medium text-dark">Price: </span>
            <span class="text-dark-secondary"
              >{{ currency }}{{ singleProduct?.price }}</span
            >
          </p>
          <p class="text-sm">
            <span class="font-medium text-dark">Category: </span>
            <nuxt-link
              to=""
              class="text-dark-secondary hover:text-primary underline capitalize"
              >{{ singleProduct?.category?.name.toLowerCase() }}</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
