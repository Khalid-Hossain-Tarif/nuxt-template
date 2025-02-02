<script setup lang="ts">
  import Header from "~/components/layout/Header.vue";
  import Footer from "~/components/layout/Footer.vue";
  import NuxtLoadingIndicator from "~/components/common/NuxtLoadingIndicator.vue";
  import Loader from "~/components/common/Loader.vue";
</script>

<template>
  <NuxtLoadingIndicator />
  <div>
    <Header />
    <main>
      <Loader />
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
