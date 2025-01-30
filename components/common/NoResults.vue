<script setup lang="ts">
  import AlertDanger from "~/components/icons/AlertDanger.vue";

  defineProps({
    msg: {
      type: String,
      default: "No data found!",
    },
    description: {
      type: String,
      default: "Something went wrong! Try again later.",
    },
    isIconShow: {
      default: true,
      type: Boolean,
    },
  });
</script>

<template>
  <div class="w-full pt-10 lg:pt-20 space-y-3">
    <slot v-if="isIconShow">
      <AlertDanger class="mx-auto w-8 lg:w-10 text-danger" />
    </slot>
    <div class="text-center space-y-1.5">
      <h3 class="text-xl lg:text-2xl font-semibold text-secondary">
        {{ msg }}
      </h3>
      <p class="text-gray-500 text-sm">{{ description }}</p>
    </div>
  </div>
</template>
