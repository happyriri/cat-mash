<script setup lang="ts">
import { useCatsStore } from '../stores/cats'

const catsStore = useCatsStore();

import { useRouter } from 'vue-router'
const router = useRouter()

const percentage = (vote: number) => {
  if (vote === 0) {
    return 0;
  }
  return (vote / catsStore.votesOrderedDesc[0].vote * 100).toFixed(2)
}
</script>

<template>
  <div class="stats-page">

    <span @click="router.push('/')" class="button">
        Voter
      </span>

    <div v-for="cat in catsStore.votesOrderedDesc" class="cat-container" :key="cat.id">
      <img :src="cat.url" alt="Cat image">
      <div :style="`width: ${percentage(cat.vote)}%;`" class="percentage-rectangle"></div>
      <div class="percentage-text">{{ cat.vote }}</div>
    </div>
  </div>
</template>

<style scoped>
  .stats-page {
    margin: 24px 40px;
  }

  .button {
    margin: 30px 0;
    width: 140px;
  }

  .cat-container {
    display: flex;
    margin-bottom: 8px;
    width: calc(100% - 32px);
  }

  img {
    width: 30px;
    height: 30px;
  }

  .percentage-rectangle {
    height: 30px;
    background: #FFC970;
  }

  .percentage-text {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 22px;
    color: #FFC970;
    margin-left: 16px;
    align-self: center;
  }
</style>