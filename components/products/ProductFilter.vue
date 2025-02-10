<script setup lang="ts">
  import { Input } from "@/components/ui/input";

  const props = defineProps(["filter", "categories"]);
</script>

<template>
  <div class="space-y-4">
    <Input
      v-model="props.filter.title"
      type="text"
      placeholder="Search by product title"
    />

    <h4 class="font-medium text-lg text-dark">Category</h4>
    <ul class="space-y-2 max-h-[250px] overflow-y-auto">
      <li
        v-for="category in categories"
        :key="category?.id"
        class="flex items-center space-x-2"
      >
        <input
          v-model="props.filter.selectedCategory"
          type="checkbox"
          :id="category?.id"
          :value="category?.id"
        />
        <label
          :for="category?.id"
          class="text-dark capitalize"
        >
          {{ category?.name }}
        </label>
      </li>
    </ul>
  </div>
</template>
