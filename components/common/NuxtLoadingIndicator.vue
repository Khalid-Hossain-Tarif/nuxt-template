<script setup lang="ts">
  const { isLoading, progress } = useLoadingIndicator();
</script>

<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-[99999] bg-white/90 w-full h-full"
  >
    <div class="loader-container">
      <div class="loader">
        <div class="inner-circle"></div>
      </div>
      <div class="progress">
        {{ progress }}<span style="font-size: 12px">%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .loader-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loader {
    height: 100px;
    width: 100px;
    position: relative;
    border-radius: 100%;
    background-image: linear-gradient(
      135deg,
      #1e5799 0%,
      #2989d8 30%,
      #207cca 51%,
      #7db9e8 80%
    );
    animation: rotateAnimation 1s infinite linear;
  }

  @keyframes rotateAnimation {
    100% {
      transform: rotate(360deg);
    }
  }

  .inner-circle {
    width: 80%;
    height: 80%;
    position: absolute;
    left: 10%;
    top: 10%;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 100%;
  }

  .progress {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #48a43f;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
