<script setup lang="ts">
  import { computed, ref, reactive, onBeforeMount } from "vue";
  import { storeToRefs } from "pinia";
  import { useProductStore } from "~/store/product.store";
  import { useCategoryStore } from "~/store/category.store";
  import { sortingOptions } from "~/constants/common.constant";
  import NoResults from "~/components/common/NoResults.vue";
  import ProductList from "~/components/products/ProductList.vue";
  import ProductFilter from "~/components/products/ProductFilter.vue";
  import Pagination from "~/components/common/Pagination.vue";
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "~/components/ui/select";

  const productStore = useProductStore();
  const categoryStore = useCategoryStore();
  const { products } = storeToRefs(productStore);
  const { categories } = storeToRefs(categoryStore);
  const filter = reactive({
    title: "",
    selectedCategory: [],
    sortBy: "",
  });

  onBeforeMount(() => {
    productStore.getAllProducts();
    categoryStore.getAllCategories();
  });

  const filteredProductsHandler = (
    products: Array<any>,
    title: string,
    sortByCategory: Array<string>,
    sortBy: string
  ) => {
    let filteredProduct = [...products];

    //sortByTitle
    if (title) {
      filteredProduct = filteredProduct.filter((product: any) =>
        product?.title.toLowerCase().trim().includes(title.toLowerCase().trim())
      );
    }

    //sortByCategories
    if (sortByCategory && sortByCategory.length > 0) {
      filteredProduct = filteredProduct.filter((product: any) =>
        sortByCategory.includes(product?.category?.id)
      );
    }

    //sortBy
    if (sortBy === "" || sortBy === "Default" || sortBy === "Sort by latest") {
      filteredProduct.sort((a, b) => {
        return Date.parse(b.creationAt) - Date.parse(a.creationAt);
      });
    } else if (sortBy === "Sort by price: low to high") {
      filteredProduct.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Sort by price: high to low") {
      filteredProduct.sort((a, b) => b.price - a.price);
    }

    return filteredProduct;
  };

  const filteredProductsList = computed(() => {
    return filteredProductsHandler(
      products.value,
      filter.title,
      filter.selectedCategory,
      filter.sortBy
    );
  });

  const currentPage = ref(1);
  const itemsPerPage = 9;

  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredProductsList.value.slice(start, end);
  });

  const changePage = (page: number) => {
    currentPage.value = page;
  };
</script>

<template>
  <div>
    <div class="container py-10">
      <div class="space-y-6">
        <div class="flex justify-between items-center gap-2">
          <h1 class="text-secondary text-2xl font-semibold shrink-0">
            {{ $t("BrowseAllProducts") }}
          </h1>
          <div class="md:w-[250px]">
            <Select v-model="filter.sortBy">
              <SelectTrigger>
                <SelectValue placeholder="Default" />
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
        </div>

        <div class="flex gap-8">
          <ProductFilter
            :filter="filter"
            :sortingOptions="sortingOptions"
            :categories="categories"
            class="w-[25%] shrink-0"
          />

          <div class="grow">
            <ProductList
              v-if="paginatedProducts.length"
              :products="paginatedProducts"
            />
            <NoResults v-else />

            <Pagination
              :totalItems="filteredProductsList.length"
              :itemsPerPage="itemsPerPage"
              :currentPage="currentPage"
              @changePage="changePage"
              class="mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
