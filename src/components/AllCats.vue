<script setup lang="ts">
import { ref } from 'vue'
import Cat from '../models/cat.models.ts';
import catsManager from '../managers/cats-manager' // to put in the store

import heart from '../assets/heart.svg'

let cats = ref<Cat[]>(catsManager.getAllCats());

</script>

<template>
  <div v-for="cat in cats" :key="cat.id" class="container">
    
    <img class="cat" :src="cat.url">
    <img class="heart" :src="heart" alt="Heart Icon">
    <div class="circle"></div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  margin-bottom: 40px;
}

.cat {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  cursor: pointer;
}

.container:hover .circle {
  transform: scale(1) ;
  transition-duration: 150ms;
}

.circle {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 0;
  background: #FFC970;
  border-radius: 50%;
  z-index: -10;
  cursor: pointer;
  margin-left: -10px;
  margin-top: -10px;
  transform: scale(0);
  transition-duration: 1000ms;
}

.container:hover .heart {
  transform: scale(1) ;
  transition-duration: 150ms;
}

.heart {
  position: absolute;
  cursor: pointer;
  width: 40px;
  top: calc(90px - 20px);
  left: calc(90px - 20px);
  transform: scale(0);
  transition-duration: 500ms;
}

.text {
  padding: 0px 11px;
  font-size: 18px;
  font-weight: 600;
  color: white;
}
</style>