<script setup lang="ts">
  import ColorModeSwitcher from "~/components/app/ColorModeSwitcher.vue";
  import LanguageSwitcher from "~/components/app/LanguageSwitcher.vue";

  const localePath = useLocalePath();
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
            <li>
              <NuxtLink
                :to="localePath('/custom-layout')"
                class="text-dark-secondary hover:text-secondary"
                >Custom Layout</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localePath('/user/login')"
                class="text-dark-secondary hover:text-secondary"
                >Login</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-x-3">
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
