<script setup lang="ts">
  import { currency } from "~/utils/Helper";
  import IconsTag from "~/components/icons/Tag.vue";
  import moment from "moment";

  const props = defineProps<{
    products: {
      type: Array<any>;
      required: true;
      default: () => [];
    };
  }>();
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <div
      v-for="product in products"
      :key="product?.id"
      class="relative overflow-hidden border border-gray-200 rounded-lg"
    >
      <nuxt-link
        :to="`/product/${product?.id}/${product?.title.toLowerCase().replace(/\s+/g, '-')}`"
      >
        <img
          :src="
            product?.images[20]
              ? product?.images[0]
              : 'https://i.imgur.com/cHddUCu.jpeg'
          "
          :alt="product?.title"
          class="w-full h-[250px] rounded-t-lg bg-gray-200 hover:scale-105 transition-transform"
        />
      </nuxt-link>
      <div class="p-4">
        <h4 class="text-xl line-clamp-1 capitalize">
          <nuxt-link
            :to="`/product/${product?.id}/${product?.title.toLowerCase().replace(/\s+/g, '-')}`"
            class="text-dark hover:text-primary font-medium transition-colors"
            >{{ product?.title }}</nuxt-link
          >
        </h4>
        <p class="my-1 text-dark-secondary">
          {{ currency }} {{ product?.price }}
          <!--{{ moment(product?.creationAt).fromNow() }}-->
        </p>

        <div class="flex items-center gap-x-1">
          <IconsTag class="lg:w-5 text-gray-shade5" />
          <div class="flex items-center gap-x-1">
            <Button
              variant="link"
              size="sm"
              class="p-0 text-gray-shade5 hover:text-primary capitalize"
            >
              {{ product?.category?.name.toLowerCase() }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
