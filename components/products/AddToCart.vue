<script lang="ts" setup></script>

<template>
  <div class="flex items-center">
    <button>-</button>

    <p>3</p>

    <button>+</button>
  </div>
</template>

<style scoped>
  button {
    @apply size-9 rounded-full border border-borderColor text-dark font-semibold;
  }
  p {
    @apply px-4 text-dark font-semibold;
  }
</style>