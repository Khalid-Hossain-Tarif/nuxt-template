<script setup lang="ts">
</script>

<template>
  <header class="bg-background-shade3 border-b border-borderColor-secondary">
    <div class="container py-5">
      <div class="flex items-center justify-between gap-x-4">
        <a class="text-secondary font-semibold text-lg">
          Nuxt Template
        </a>

        <nav>
          <ul>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
            <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>