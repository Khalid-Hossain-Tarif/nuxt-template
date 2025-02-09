<script setup lang="ts">
  import { ref } from "vue";
  import { Input } from "@/components/ui/input";
  import { Checkbox } from "@/components/ui/checkbox";
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { sortingOptions } from "~/constants/common.constant";

  const props = defineProps(["filter", "sortingOptions", "categories"]);
</script>

<template>
  <div class="space-y-4">
    <Input
      v-model="props.filter.title"
      type="text"
      placeholder="Search by product title"
    />

    <!--    <Select v-model="props.filter.category">-->
    <!--      <SelectTrigger>-->
    <!--        <SelectValue placeholder="Filter by category" />-->
    <!--      </SelectTrigger>-->
    <!--      <SelectContent>-->
    <!--        <SelectGroup>-->
    <!--          <SelectItem value="allCategory"> All category </SelectItem>-->
    <!--          <SelectItem-->
    <!--            v-for="(n, index) in 7"-->
    <!--            :key="`category-${index}`"-->
    <!--            :value="`category-${index}`"-->
    <!--          >-->
    <!--            Category {{ index }}-->
    <!--          </SelectItem>-->
    <!--        </SelectGroup>-->
    <!--      </SelectContent>-->
    <!--    </Select>-->

    <Select v-model="props.filter.sortBy">
      <SelectTrigger>
        <SelectValue placeholder="Sort by latest" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="option in sortingOptions"
            :key="option.code"
            :value="option.name"
          >
            {{ option.name }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    -> {{ props.filter.selectedCategory }}
    <ul class="space-y-2 max-h-[200px] overflow-y-auto">
      <li
        v-for="category in categories"
        :key="category?.id"
        class="flex items-center space-x-2"
      >
        <Checkbox
          v-model="props.filter.selectedCategory"
          :id="category?.id"
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
