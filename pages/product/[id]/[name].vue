<script lang="ts" setup>
  import { onBeforeMount } from "vue";
  import { storeToRefs } from "pinia";
  import { useSingleProductStore } from "~/store/singleProduct.store";

  const route = useRoute();
  const singleProductStore = useSingleProductStore();
  const { singleProduct } = storeToRefs(singleProductStore);

  onBeforeMount(() => {
    singleProductStore.getSingleProduct(Number(route.params.id));
  });
</script>

<template>
  <div>
    {{ singleProduct }}
    <div class="container py-10">
      <div>product page - {{ $route.params }}</div>
    </div>
  </div>
</template>
