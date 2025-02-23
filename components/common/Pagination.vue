<script setup lang="ts">
  import { computed } from "vue";

  const props = defineProps<{
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
  }>();

  const emit = defineEmits(["changePage"]);

  const totalPages = computed(() =>
    Math.ceil(props.totalItems / props.itemsPerPage)
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      emit("changePage", page);
    }
  };
</script>

<template>
  <div v-if="totalPages > 1">
    <div class="flex items-center justify-center gap-x-2.5">
      <button
        @click="goToPage(1)"
        :disabled="currentPage === 1"
        class="size-10 text-primary border border-primary rounded-md transition-all hover:bg-primary-light2 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <IconsDoubleArrow class="rotate-90 mx-auto" />
      </button>
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="size-10 text-primary border border-primary rounded-md transition-all hover:bg-primary-light2 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <IconsArrow class="rotate-90 mx-auto" />
      </button>

      <div class="space-x-1">
        <button
          v-for="(page, index) in totalPages"
          :key="`page-${index}`"
          @click="goToPage(page)"
          class="size-10 rounded-full border"
          :class="
            page === currentPage
              ? 'bg-primary border-primary text-white'
              : 'bg-white border-borderColor-secondary text-dark'
          "
        >
          {{ page }}
        </button>
      </div>

      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="size-10 text-primary border border-primary rounded-md transition-all hover:bg-primary-light2 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <IconsArrow class="-rotate-90 mx-auto" />
      </button>
      <button
        @click="goToPage(totalPages)"
        :disabled="currentPage === totalPages"
        class="size-10 text-primary border border-primary rounded-md transition-all hover:bg-primary-light2 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <IconsDoubleArrow class="-rotate-90 mx-auto" />
      </button>
    </div>
  </div>
</template>
