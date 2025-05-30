<script lang="ts" setup>
  import { useCartStore } from "~/store/cart.store";
  import { storeToRefs } from "pinia";
  import UpdateCart from "~/components/products/UpdateCart.vue";
  import NoResults from "~/components/common/NoResults.vue";

  definePageMeta({
    middleware: "auth",
  });

  const cartStore = useCartStore();
  const { cartItems } = storeToRefs(cartStore);
</script>

<template>
  <div>
    <div class="container py-10">
      <div
        v-if="cartItems.length"
        class="flex items-start gap-8"
      >
        <ul class="grow space-y-4 divide-y divide-borderColor">
          <li
            v-for="item in cartItems"
            :key="item?.id"
            class="pt-4 flex items-center gap-x-5"
          >
            <div class="shrink-0">
              <input
                type="checkbox"
                :id="item?.id"
                class="size-4"
              />
            </div>

            <div class="grow basis-1/3 space-y-2">
              <div class="flex items-center gap-x-3">
                <img
                  :src="item?.images[0] ?? 'https://i.imgur.com/cHddUCu.jpeg'"
                  :alt="item?.title"
                  class="shrink-0 size-14"
                />
                <div>
                  <h4>{{ item?.title }}</h4>
                </div>
              </div>
              <Button
                @click="cartStore.removeItem(item?.id)"
                variant="link"
                class="p-0"
                >Remove</Button
              >
            </div>

            <div class="shrink-0">
              <UpdateCart :item="item" />
            </div>

            <div class="shrink-0">
              <p>
                <span class="font-semibold"
                  >{{ item?.quantity * item?.price }} Tk. </span
                >({{ item?.quantity }} x {{ item?.price }} tk)
              </p>
            </div>
          </li>
        </ul>

        <div class="shrink-0 w-1/3 p-6 bg-background-shade3 rounded-md">
          <h4 class="mb-3.5 font-semibold text-lg">Order summary</h4>

          <ul class="space-y-3 divide-y divide-dashed divide-borderColor">
            <li class="pt-3 flex items-center justify-between gap-x-2">
              <h5>Subtotal</h5>
              <p>{{ cartStore.subtotal }} Tk.</p>
            </li>
            <li class="pt-3 flex items-center justify-between gap-x-2">
              <h5>Delivery charge</h5>
              <p>{{ cartStore.deliveryCharge }} Tk.</p>
            </li>
            <li class="pt-3 flex items-center justify-between gap-x-2">
              <h5 class="font-bold">Total</h5>
              <p class="font-bold">{{ cartStore.total }} Tk.</p>
            </li>
          </ul>

          <Button
            variant="info"
            class="w-full mt-4"
            >Checkout</Button
          >
        </div>
      </div>

      <div v-else>
        <NoResults
          msg="Your cart is empty!"
          description="Continue shopping to add products to your cart."
        />
      </div>
    </div>
  </div>
</template>
