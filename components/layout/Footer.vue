<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <footer class="bg-background-shade3 border-b border-borderColor-secondary">
    <div class="container py-20">
      <div class="space-y-2.5 text-center">
        <nuxt-link to="/" class="text-primary hover:text-secondary font-semibold text-lg">
          Nuxt
        </nuxt-link>
        <nav>
          <ul class="flex items-center justify-center gap-x-5">
            <li><NuxtLink :to="localePath('/')"  class="text-dark-secondary hover:text-secondary">Home</NuxtLink></li>
            <li><NuxtLink :to="localePath('/about')" class="text-dark-secondary hover:text-secondary">About</NuxtLink></li>
            <li><NuxtLink :to="localePath('/contact')" class="text-dark-secondary hover:text-secondary">Contact</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>