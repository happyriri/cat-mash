<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useCatsStore } from './stores/cats'

const catsStore = useCatsStore();

onBeforeMount(() => {
  catsStore.getAllCats();
});
</script>

<template>
  <RouterView />
</template>
