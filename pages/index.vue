<template>
  <h1>All Occasions</h1>
  <button @click="addPoint">Add new time</button>
  <ul>
    <li v-for="occasion in occasions" :key="occasion.id">
      {{ new Date(occasion.timestamp).toLocaleString() }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const { data: occasions, refresh } = useFetch("/api/occasion");

const addPoint = async () => {
  const data = await $fetch("/api/occasion", {
    method: "post",
    body: {},
  });
  console.log(data);
  refresh();
};
</script>

<style scoped></style>
