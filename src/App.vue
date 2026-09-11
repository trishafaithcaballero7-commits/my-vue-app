<template>
  <div class="app-layout">
    <Header />
    <main class="page-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Header from "./components/header.vue";
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
}

.page-content {
  padding-top: 30px;
}
</style>