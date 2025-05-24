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

  const visiblePages = computed(() => {
    const pages = [];
    const total = totalPages.value;
    const current = props.currentPage;

    if (total <= 7) {
      // Show all if total pages <= 7
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);

      if (current > 4) pages.push("...");

      const start = Math.max(2, current - 2);
      const end = Math.min(total - 1, current + 2);

      for (let i = start; i <= end; i++) pages.push(i);

      if (current < total - 3) pages.push("...");

      pages.push(total);
    }

    return pages;
  });
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
        <template
          v-for="(page, index) in visiblePages"
          :key="`page-${index}`"
        >
          <span v-if="page !== '...'">
            <button
              @click="goToPage(page as number)"
              class="size-10 rounded-full border"
              :class="
                page === currentPage
                  ? 'bg-primary border-primary text-white'
                  : 'bg-white border-borderColor-secondary text-dark'
              "
            >
              {{ page }}
            </button>
          </span>
          <span
            v-else
            :key="`dots-${index}`"
            class="px-2 text-gray-500"
          >
            ...
          </span>
        </template>
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
