<script setup lang="ts">
  import { computed } from "vue";

  const props = defineProps<{
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
  }>();

  const emit = defineEmits(["update:currentPage"]);

  const totalPages = computed(() =>
    Math.ceil(props.totalItems / props.itemsPerPage)
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      emit("update:currentPage", page);
    }
  };
</script>

<template>
  <div
    v-if="totalPages > 1"
    class="flex items-center gap-2"
  >
    <button
      @click="goToPage(1)"
      :disabled="currentPage === 1"
    >
      First
    </button>
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
    >
      Prev
    </button>

    <span>Page {{ currentPage }} of {{ totalPages }}</span>

    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      Next
    </button>
    <button
      @click="goToPage(totalPages)"
      :disabled="currentPage === totalPages"
    >
      Last
    </button>
  </div>
</template>

<style scoped>
  button {
    padding: 6px 12px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
