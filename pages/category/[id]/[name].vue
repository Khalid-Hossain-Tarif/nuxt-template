<script lang="ts" setup>
  import ProductList from "~/components/products/ProductList.vue";
  import { useCategoryStore } from "~/store/category.store";
  import { storeToRefs } from "pinia";
  import Pagination from "~/components/common/Pagination.vue";
  import { computed, ref } from "vue";

  const route = useRoute();
  const categoryStore = useCategoryStore();
  const { categoryWiseProducts } = storeToRefs(categoryStore);

  onBeforeMount(() => {
    categoryStore.getAllCategoryWiseProducts(Number(route.params.id));
  });

  const currentPage = ref(1);
  const itemsPerPage = 9;

  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return categoryWiseProducts.value.slice(start, end);
  });

  const changePage = (page: number) => {
    currentPage.value = page;
  };
</script>

<template>
  <div>
    <div class="container py-10 space-y-7">
      <h2 class="primary-heading capitalize">
        category: {{ route.params.name }}
      </h2>
      <div>
        <ProductList :products="paginatedProducts" />

        <Pagination
          :totalItems="categoryWiseProducts.length"
          :itemsPerPage="itemsPerPage"
          :currentPage="currentPage"
          @changePage="changePage"
          class="mt-8"
        />
      </div>
    </div>
  </div>
</template>
