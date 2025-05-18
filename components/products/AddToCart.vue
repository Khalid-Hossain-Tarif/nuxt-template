<script lang="ts" setup>
  import { ref } from "vue";
  import { useCartStore } from "~/store/cart.store";
  import { Button } from "~/components/ui/button";

  const props = defineProps<{
    item: any;
  }>();

  const cartStore = useCartStore();
  const quantity = ref(1);

  const decreaseQuantity = () => {
    if (quantity.value > 1) {
      quantity.value--;
    }
  };

  const increaseQuantity = () => {
    quantity.value++;
  };

  const addToCart = () => {
    const cartWithQuantity = {
      ...props.item,
      quantity: quantity.value,
    };
    cartStore.addToCart(cartWithQuantity);
    quantity.value = 1;
  };
</script>

<template>
  <div class="flex items-center gap-x-4">
    <div class="flex items-center">
      <button
        @click="decreaseQuantity"
        class="size-10 rounded-full border border-borderColor text-dark font-semibold"
      >
        -
      </button>
      <p class="px-4 text-dark font-semibold">{{ quantity }}</p>
      <button
        @click="increaseQuantity"
        class="size-9 rounded-full border border-borderColor text-dark font-semibold"
      >
        +
      </button>
    </div>

    <div class="flex items-center gap-x-4">
      <Button
        @click="addToCart"
        variant="secondary"
        >Add to cart</Button
      >
    </div>
  </div>
</template>
