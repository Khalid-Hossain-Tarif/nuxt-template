<script lang="ts" setup>
  import { useAuthStore } from "~/store/auth.store";
  import { reactive } from "vue";

  const authStore = useAuthStore();

  const userData = reactive({
    name: "",
    email: "",
    password: "",
  });

  const updateUserHandler = () => {
    if (authStore.isAuthenticated && authStore.token) {
      authStore.updateUser(userData, authStore?.user?.id);
      console.log("Token being sent:", authStore.token);
    }
    console.log("updateUserHandler: ", userData);
  };
</script>

<template>
  <div class="py-12">
    <div class="container">
      {{ userData }}
      <div class="flex gap-10">
        <div class="shrink-0 w-1/4">
          <img
            :src="authStore?.user?.avatar"
            :alt="authStore?.user?.name"
            class="rounded-full object-cover"
          />
        </div>

        <div class="grow space-y-6 divide-y divide-borderColor-light">
          <h2 class="text-dark-secondary font-bold text-2xl">
            Personal Information
          </h2>

          <div class="pt-6 grid grid-cols-2 gap-2">
            <p class="capitalize">
              <strong>Name:</strong> {{ authStore?.user?.name }}
              <sup class="py-0.5 px-1.5 bg-info-light3 rounded-full">{{
                authStore?.user?.role
              }}</sup>
            </p>
            <p><strong>Email:</strong> {{ authStore?.user?.email }}</p>
          </div>

          <div class="pt-6 space-y-4">
            <h3 class="font-semibold text-secondary">
              Update profile information
            </h3>
            <div class="space-y-3">
              <!--              <div>-->
              <!--                <Label class="mb-2">Profile photo</Label>-->
              <!--                <img-->
              <!--                  :src="authStore?.user?.avatar"-->
              <!--                  alt="image"-->
              <!--                  class="rounded-full object-cover"-->
              <!--                />-->
              <!--              </div>-->
              <div>
                <Label class="mb-2">Name</Label>
                <Input
                  v-model="userData.name"
                  type="text"
                />
              </div>
              <div>
                <Label class="mb-2">Email</Label>
                <Input
                  v-model="userData.email"
                  type="email"
                />
              </div>
              <div>
                <Label class="mb-2">Password</Label>
                <Input
                  v-model="userData.password"
                  type="password"
                />
              </div>
              <div>
                <Button
                  @click="updateUserHandler"
                  variant="secondary"
                  >Update profile</Button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
