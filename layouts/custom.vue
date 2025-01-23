<script setup lang="ts">
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <main class="flex">
      <div class="shrink-0 w-1/4 p-10 bg-info-light2">
        Sidebar
      </div>
      <div class="grow">
        <slot></slot>
      </div>
    </main>
    <Footer />
  </div>
</template>