<script lang="ts" setup>
  import { useCartStore } from "~/store/cart.store";

  const props = defineProps<{
    item: any;
  }>();

  const cartStore = useCartStore();
</script>

<template>
  <div class="flex items-center">
    <button
      @click="cartStore.updateQuantity('decrease', props.item.id)"
      :disabled="props.item.quantity <= 1"
      class="size-8 rounded-full border border-dark-secondary text-dark font-semibold disabled:opacity-30"
    >
      -
    </button>
    <p class="px-4 text-dark font-semibold">{{ props.item.quantity }}</p>
    <button
      @click="cartStore.updateQuantity('increase', props.item.id)"
      class="size-8 rounded-full border border-dark-secondary text-dark font-semibold"
    >
      +
    </button>
  </div>
</template>
