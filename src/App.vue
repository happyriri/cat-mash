<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useCatsStore } from './stores/cats'

const catsStore = useCatsStore();

onBeforeMount(() => {
  catsStore.getAllCats();
});
</script>

<template>
 <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>