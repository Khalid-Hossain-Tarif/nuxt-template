<script setup lang="ts">
  import { watch } from "vue";
  import { useAuthStore } from "~/store/auth.store";
  import { useCartStore } from "~/store/cart.store";

  const authStore = useAuthStore();
  const cartStore = useCartStore();

  if (import.meta.client) {
    watch(
      () => authStore.user?.id,
      (userId) => {
        if (userId) {
          cartStore.initCart();
        }
      },
      { immediate: true }
    );
  }
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
