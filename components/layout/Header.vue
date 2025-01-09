<script setup lang="ts">
</script>

<template>
  <header class="bg-background-shade3 border-b border-borderColor-secondary">
    <div class="container py-5">
      <div class="flex items-center justify-between gap-x-4">
        <nuxt-link to="/" class="shrink-0 text-secondary hover:text-primary font-semibold text-lg">
          Nuxt Template
        </nuxt-link>

        <nav>
          <ul class="flex items-center gap-x-5">
            <li><NuxtLink to="/" class="text-dark hover:text-secondary">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-dark hover:text-secondary">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-dark hover:text-secondary">Contact</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  @apply font-medium text-secondary
}
</style>