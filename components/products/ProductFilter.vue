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
</script>

<template>
  <div class="grid grid-cols-3 gap-x-3">
    <Input
      type="text"
      placeholder="Search by name"
    />

    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Sort by category" />
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

    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Sort by latest" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="popularity"> Sort by popularity </SelectItem>
          <SelectItem value="latest"> Sort by latest </SelectItem>
          <SelectItem value="lowToHigh">Sort by price: low to high</SelectItem>
          <SelectItem value="highToLow">
            Sort by price: high to low
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
