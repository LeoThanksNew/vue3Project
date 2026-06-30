<template>
  <div class="app-content">
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/sideBar">Go to SideBar</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
