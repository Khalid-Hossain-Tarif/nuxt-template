<script setup lang="ts">
  import axios from "axios";
  import { useOptionStore } from "~/store/store-type/option.store";
  import { useSetupStore } from "~/store/store-type/setup.store";

  const optionStore = useOptionStore();
  const setupStore = useSetupStore();
  const products = ref([]);

  axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then(function (response) {
      products.value = response.data;
      // console.log(products.value);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
</script>

<template>
  <div>
    <div class="container py-10 px-10">
      <div class="space-y-2">
        <div>
          {{ optionStore.name }} - {{ optionStore.count }} -
          {{ optionStore.doubleCount }} -
          <Button
            @click="optionStore.increment"
            variant="secondary"
            >+</Button
          >
        </div>
        <div>
          {{ setupStore.name }} - {{ setupStore.count }} -
          {{ setupStore.doubleCount }} -
          <Button
            @click="setupStore.increment"
            variant="danger"
            >+</Button
          >
        </div>
        <p>Main content</p>
        <Button
          @click=""
          variant="secondary"
          >Click me</Button
        >
        <p>{{ $t("HOME") }}</p>
        <IconsBell class="lg:w-10" />
        <img
          src="@/assets/img/nature.jpg"
          alt=""
        />

        <div v-for="product in products">
          {{ product.title }}
        </div>
      </div>
    </div>
  </div>
</template>
