<script setup>
  import { cn } from "@/lib/utils";
  const props = defineProps(["class"]);
</script>

<template>
  <svg
    :class="cn('w-4 lg:w-6', props.class)"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="m15 5l6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path>
      <path
        d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"
      ></path>
      <circle
        cx="6.5"
        cy="9.5"
        r=".5"
        fill="currentColor"
      ></circle>
    </g>
  </svg>
</template>
