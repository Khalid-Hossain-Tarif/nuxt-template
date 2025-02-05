<script setup lang="ts">
  import { Input } from "@/components/ui/input";
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { sortingOptions } from "~/constants/common.constant";

  const props = defineProps(["filter", "sortingOptions"]);
</script>

<template>
  <div class="grid grid-cols-3 gap-x-3">
    <Input
      v-model="props.filter.title"
      type="text"
      placeholder="Search by product title"
    />

    <Select v-model="props.filter.category">
      <SelectTrigger>
        <SelectValue placeholder="Filter by category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="allCategory"> All category </SelectItem>
          <SelectItem
            v-for="(n, index) in 7"
            :key="`category-${index}`"
            :value="`category-${index}`"
          >
            Category {{ index }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
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
  </div>
</template>
