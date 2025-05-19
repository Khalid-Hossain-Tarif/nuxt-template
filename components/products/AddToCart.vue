<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import { useCartStore } from "~/store/cart.store";
  import { Button } from "~/components/ui/button";

  const props = defineProps<{
    item: any;
  }>();

  const cartStore = useCartStore();
  const { quantity } = storeToRefs(cartStore);

  const addToCartHandler = () => {
    cartStore.addToCart(props.item);
  };
</script>

<template>
  <div class="flex items-center gap-x-4">
    <div class="flex items-center">
      <button
        @click="cartStore.handleQuantity('decrease')"
        :disabled="quantity <= 1"
        class="size-10 rounded-full border border-dark-secondary text-dark font-semibold disabled:opacity-30"
      >
        -
      </button>
      <p class="px-4 text-dark font-semibold">{{ quantity }}</p>
      <button
        @click="cartStore.handleQuantity('increase')"
        class="size-9 rounded-full border border-dark-secondary text-dark font-semibold"
      >
        +
      </button>
    </div>

    <div class="flex items-center gap-x-4">
      <Button
        @click="addToCartHandler"
        variant="secondary"
        >Add to cart</Button
      >
    </div>
  </div>
</template>
