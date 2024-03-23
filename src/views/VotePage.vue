<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

import TheCat from '../components/TheCat.vue';
import catTears from '../assets/cat-tears.png';
import catHappy from '../assets/cat-happy.png';

import Cat from '../models/cat.models.ts';
import catsManager from '../managers/cats-manager' // to put in the store

let cats = ref<Cat[]>(catsManager.getAllCats());

let imgTears = ref(true);
const headerImg = computed(() => {
  return imgTears.value ? catTears : catHappy;
});

const enterCatChoice = () => {
  imgTears.value = false;
}

const leaveCatChoice = () => {
  imgTears.value = true;
}


</script>

<template>
  <div class="vote-page">
    
    <div class="header">
      <div class="title">
        <img :src="headerImg" alt="Cat Tears">
        <span>Cutest cat ?</span>
      </div>

      <span @click="router.push('/stats')" class="button">Voir les X votes</span>
    </div>

    <div class="cats">
      <div @mouseenter="enterCatChoice" @mouseleave="leaveCatChoice">
        <TheCat :cat="cats[0]"/>
      </div>

      <div class="versus">VS</div>
      
      <div @mouseenter="enterCatChoice" @mouseleave="leaveCatChoice">
        <TheCat :cat="cats[1]"/>
      </div>
    </div>
    
    
  </div>
</template>

<style scoped>
.vote-page {
  height: 100vh;
  width: 100vw;
}

.header {
  width: 100vw;
  height: 200px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr repeat(2, auto) 1fr;
  grid-column-gap: 5px;
  justify-items: center;
}

.title {
  grid-column-start: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title span {
  font-family: 'VanillaDreams';
  font-size: 48px;
  color: #FFC970;
  margin-top: 16px;
}

.header img {
  width: 120px;
  height: 120px;
}

.button {
  background: #3787FF;
  font-size: 16px;
  padding: 7px 11px;
  border-radius: 20px;
  color: #FEFEFE;
  cursor: pointer;
  height: fit-content;
  margin: 30px;
  font-family: 'Poppins';
  font-weight: 500;
}

.button:hover {
  opacity: 0.7;
}

.cats {
  display: inline-flex;
  width: 100vw;
  height: calc(100vh - 210px);
  justify-content: center;
  align-items: center;
}

.versus {
  font-family: 'VanillaDreams';
  font-size: 102px;
  color: #000000;
  margin: 0 4rem;
}
</style>
