<template>
  <h1>All Occasions</h1>
  <button @click="handleCreate">Add new time</button>
  <ul>
    <li
      @click="handleDelete(occasion.id)"
      v-for="occasion in occasions"
      :key="occasion.id"
    >
      {{ new Date(occasion.timestamp + " UTC").toLocaleString() }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const { data: occasions, refresh } = useFetch("/api/occasion");

const handleCreate = async () => {
  const data = await $fetch("/api/occasion", {
    method: "post",
    body: {},
  });
  console.log(data);
  refresh();
};

const handleDelete = async (id: number) => {
  const data = await $fetch(`/api/occasion/${id}`, { method: "DELETE" });
  console.log(data);
  refresh();
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
}

li {
  cursor: pointer;
  border: 1px solid transparent;
  margin-right: auto;
  padding: 2px;
  border-radius: 5px;
}
li:hover {
  border: 1px solid red;
}
</style>
