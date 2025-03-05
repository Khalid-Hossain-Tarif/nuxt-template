<script lang="ts" setup>
  import { reactive } from "vue";
  import { useAuthStore } from "~/store/auth.store";
  import { navigateTo } from "#app";

  const authStore = useAuthStore();

  const user = reactive({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  // const handleFileUpload = (e: any) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     user.avatar = URL.createObjectURL(file);
  //     console.log("avatar", user.avatar);
  //   }
  // };

  const handleFileUpload = () => {
    user.avatar = "https://picsum.photos/200";
  };

  const clearStateData = () => {
    user.name = "";
    user.email = "";
    user.password = "";
    user.avatar = "";
  };

  const submitCreateUser = async () => {
    await authStore.verifyRegisteredEmail(user.email);
    if (authStore.isEmailExist) {
      return;
    }

    const isUserCreated = await authStore.createUser(user);

    if (isUserCreated) {
      clearStateData();
      await navigateTo("/user/login");
    }
  };
</script>

<template>
  <div class="h-screen flex flex-col justify-center">
    <div class="container">
      <div class="w-1/2 p-10 bg-info-light2 rounded-md mx-auto">
        <h1 class="mb-5 text-secondary text-xl font-semibold">
          User registration
        </h1>

        <div class="space-y-3">
          <div>
            <Label class="mb-1.5">Name</Label>
            <Input
              v-model="user.name"
              type="text"
            />
          </div>

          <div>
            <Label class="mb-1.5">Email</Label>
            <Input
              v-model="user.email"
              type="email"
            />
          </div>

          <div>
            <Label class="mb-1.5">Password</Label>
            <Input
              v-model="user.password"
              type="password"
            />
          </div>

          <div>
            <Label class="mb-1.5">Profile image</Label>
            <Input
              @change="handleFileUpload"
              type="file"
            />
          </div>

          <div>
            <Button
              @click="submitCreateUser"
              variant="secondary"
              size="sm"
              >Registration</Button
            >
          </div>

          <div class="text-sm">
            Already have an account?
            <nuxt-link
              to="/user/login"
              class="text-primary"
              >Login here</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
