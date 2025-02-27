<script lang="ts" setup>
  import { useAuthStore } from "~/store/auth.store";

  const authStore = useAuthStore();
</script>

<template>
  <div class="h-screen flex flex-col justify-center">
    <div class="container">
      <div class="w-1/3 p-10 bg-info-light2 rounded-md mx-auto">
        <h2>Name: {{ authStore?.user?.name }}</h2>
        <p>Email: {{ authStore?.user?.email }}</p>
        <p>Password: {{ authStore?.user?.password }}</p>
        <p>Role: {{ authStore?.user?.name }}</p>
        <img
          :src="authStore?.user?.avatar"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
