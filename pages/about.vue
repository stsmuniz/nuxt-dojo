<template>
  <div>
    <h2>About</h2>
    <p>lorem ipsum dolor sit amet consectum</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped></style>
