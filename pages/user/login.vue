<script lang="ts" setup>
  import { reactive } from "vue";
  import { useAuthStore } from "~/store/auth.store";

  const authStore = useAuthStore();

  const loginData = reactive({
    email: "",
    password: "",
  });

  const doLogin = async () => {
    await authStore.setLogin(loginData);
    if (authStore.isAuthenticated) {
      authStore.getUserProfile();
      navigateTo("/dashboard");
    }
  };
</script>

<template>
  <div class="h-screen flex flex-col justify-center">
    <div class="container">
      <div class="w-1/3 p-10 bg-info-light2 rounded-md mx-auto">
        <h1 class="mb-5 text-secondary text-xl font-semibold">User login</h1>
        <div class="space-y-3">
          <div>
            <Label class="mb-1.5">Email</Label>
            <Input
              v-model="loginData.email"
              type="email"
            />
          </div>

          <div>
            <Label class="mb-1.5">Password</Label>
            <Input
              v-model="loginData.password"
              type="password"
            />
          </div>

          <div>
            <Button
              @click="doLogin"
              variant="secondary"
              size="sm"
              :disabled="!(loginData.email && loginData.password)"
              class="disabled:cursor-not-allowed"
              >Login</Button
            >
          </div>

          <div class="text-sm">
            Don't have an account?
            <nuxt-link
              to="/user/registration"
              class="text-primary"
              >Register here</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
