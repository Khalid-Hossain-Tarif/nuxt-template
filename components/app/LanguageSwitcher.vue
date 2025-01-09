<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath();
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";

const selectedLocale = computed(() => {
  return locales.value.find(i => i.code == locale.value)
})
</script>

<template>
  <client-only>
    <DropdownMenu>
      <DropdownMenuTrigger class="w-[80px] py-2 px-3 rounded bg-secondary-light text-secondary text-sm font-medium">
        {{ selectedLocale?.name }}
      </DropdownMenuTrigger>
      <DropdownMenuContent class="z-[999] bg-white">
        <DropdownMenuSeparator />
        <DropdownMenuItem as-child v-for="locale in locales" :key="locale?.code">
          <nuxt-link :to="switchLocalePath(locale?.code)">{{ locale?.name }}</nuxt-link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </client-only>
</template>