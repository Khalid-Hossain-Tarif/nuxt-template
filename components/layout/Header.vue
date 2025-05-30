<script setup lang="ts">
  import ColorModeSwitcher from "~/components/app/ColorModeSwitcher.vue";
  import LanguageSwitcher from "~/components/app/LanguageSwitcher.vue";
  import { Button } from "@/components/ui/button";
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { useAuthStore } from "~/store/auth.store";
  import { useCartStore } from "~/store/cart.store";

  const localePath = useLocalePath();
  const authStore = useAuthStore();
  const cartStore = useCartStore();

  const doLogout = async () => {
    await authStore.logout();
    await navigateTo("/user/login");
  };

  const goToCart = () => {
    navigateTo("/cart");
  };
</script>

<template>
  <header class="bg-background-shade3 border-b border-borderColor-secondary">
    <div class="container py-5">
      <div class="flex items-center justify-between gap-x-4">
        <nuxt-link
          :to="localePath('/')"
          class="shrink-0 text-secondary hover:text-primary font-semibold text-lg"
        >
          Nuxt
        </nuxt-link>

        <nav>
          <ul class="flex items-center gap-x-5">
            <li>
              <NuxtLink
                :to="localePath('/dashboard')"
                class="text-dark-secondary hover:text-secondary"
                >Dashboard</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localePath('/')"
                class="text-dark-secondary hover:text-secondary"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localePath('/products')"
                class="text-dark-secondary hover:text-secondary"
                >Products</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localePath('/ssr-filter-products')"
                class="text-dark-secondary hover:text-secondary"
                >Products (SSR Filter)</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localePath('/about')"
                class="text-dark-secondary hover:text-secondary"
                >About</NuxtLink
              >
            </li>

            <li>
              <NuxtLink
                :to="localePath('/contact')"
                class="text-dark-secondary hover:text-secondary"
                >Contact</NuxtLink
              >
            </li>

            <li v-if="!authStore.isAuthenticated">
              <NuxtLink
                :to="localePath('/user/login')"
                class="text-dark-secondary hover:text-secondary"
                >Login</NuxtLink
              >
            </li>

            <li v-if="authStore.isAuthenticated">
              <Popover>
                <PopoverTrigger as-child>
                  <img
                    :src="authStore?.user?.avatar"
                    :alt="authStore?.user?.name"
                    class="size-12 p-0.5 border border-secondary-light rounded-full object-cover cursor-pointer"
                  />
                </PopoverTrigger>
                <PopoverContent class="max-w-80">
                  <div>
                    <h4
                      class="pb-2 mb-2 border-b border-borderColor-light text-secondary text-xl font-semibold"
                    >
                      My Account
                    </h4>
                    <div class="space-y-2">
                      <NuxtLink
                        :to="localePath('/user/profile')"
                        class="block text-dark-secondary hover:text-secondary"
                        >Profile</NuxtLink
                      >
                      <button
                        @click="doLogout"
                        class="text-primary font-semibold"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-x-3">
          <Button
            variant="link"
            class="p-0"
            @click="goToCart"
          >
            cart({{ cartStore.cartItems.length }} -
            {{ cartStore.totalCartItems }})
          </Button>
          <LanguageSwitcher />
          <ColorModeSwitcher class="shrink-0" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .router-link-exact-active {
    @apply text-secondary;
  }
</style>
