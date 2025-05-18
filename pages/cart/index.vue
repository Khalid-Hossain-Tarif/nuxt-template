<script lang="ts" setup>
  import { useCartStore } from "~/store/cart.store";
  import AddToCart from "~/components/products/AddToCart.vue";

  const cartStore = useCartStore();
  const { cartItems } = storeToRefs(cartStore);
</script>

<template>
  {{ cartItems }}
  <div>
    <div class="container py-10">
      <div class="flex gap-8">
        <ul class="grow space-y-4 divide-y divide-borderColor">
          <li
            v-for="item in cartItems"
            :key="item?.id"
            class="pt-4 flex items-center justify-between gap-x-5"
          >
            <div class="shrink-0">
              <input
                type="checkbox"
                :id="item?.id"
              />
            </div>

            <div class="grow w-[300px] flex items-center gap-x-3">
              <img
                :src="item?.images[0]"
                :alt="item?.title"
                class="shrink-0 size-14"
              />
              <div>
                <h4>{{ item?.title }}</h4>
              </div>
            </div>

            <div class="shrink-0"></div>

            <div class="shrink-0">
              <p>{{ item?.price }} Tk.</p>
            </div>
          </li>
        </ul>

        <div class="shrink-0 w-1/3 p-6 bg-background-shade3 rounded-md">
          <h4 class="font-semibold text-lg">Order summary</h4>
        </div>
      </div>
    </div>
  </div>
</template>
