<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue';

import { useCatsStore } from '../stores/cats'

import { useRouter } from 'vue-router'
const router = useRouter()

import TheCat from '../components/TheCat.vue';
import catTears from '../assets/cat-tears.png';
import catHappy from '../assets/cat-happy.png';

const catsStore = useCatsStore();

let imgTears = ref(true);
const headerImg = computed(() => {
  return imgTears.value ? catTears : catHappy;
});

onBeforeMount(() => {
  catsStore.generateTwoRandomCats();
});

const enterCatChoice = () => {
  imgTears.value = false;
}

const leaveCatChoice = () => {
  imgTears.value = true;
}

const incrementVote = async (catId: string, catIndex: number) => {
  document.getElementById(`cat-${catIndex}-incremented`)?.classList.add('fade-up');
  catsStore.incrementVote(catId);
  catsStore.generateTwoRandomCats();
  setTimeout(() => {
    document.getElementById(`cat-${catIndex}-incremented`)?.classList.remove('fade-up');
  }, 700);
}

const goToStatsPage = () => {
  if (catsStore.numberVotes < 1) {
    return;
  }

  router.push('/stats');
}

</script>

<template>
  <div class="vote-page">
    
    <div class="header">
      <div class="title">
        <img :src="headerImg" alt="Cat Tears">
        <span>Cutest cat ?</span>
      </div>

      <span @click="goToStatsPage" class="button" :class="{ 'disabled': catsStore.numberVotes < 1 }">
        <template v-if="catsStore.numberVotes < 1">
          Aucun vote
        </template>

        <template v-else>
          Voir les {{ catsStore.numberVotes }} votes
        </template>
      </span>
    </div>

    <div class="cats">
      <div @mouseenter="enterCatChoice" @mouseleave="leaveCatChoice" class="cat-container">
        <TheCat @vote="incrementVote(catsStore.twoCatsToVote[0].id, 0)" :cat="catsStore.twoCatsToVote[0]"/>
        <div id="cat-0-incremented" class="increment">+1</div>
      </div>

      <div class="versus">VS</div>
      
      <div @mouseenter="enterCatChoice" @mouseleave="leaveCatChoice" class="cat-container">
        <TheCat @vote="incrementVote(catsStore.twoCatsToVote[1].id, 1)" :cat="catsStore.twoCatsToVote[1]"/>
        <div id="cat-1-incremented" class="increment">+1</div>
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
  width: 140px;
  display: flex;
  justify-content: center;
}

.button:hover {
  opacity: 0.7;
}

.button.disabled {
  opacity: 0.4;
  pointer-events: none;
}

.cats {
  display: inline-flex;
  width: 100vw;
  height: calc(100vh - 210px);
  justify-content: center;
  align-items: center;
}

.cat-container {
  position: relative;
}

.increment {
  font-family: 'VanillaDreams';
  position: absolute;
  right: -16px;
  top: 0;
  bottom: 0;
  color: #FFC970;
  font-size: 40px;
  opacity: 0;
}

.increment.fade-up {
  animation: 700ms ease-in fade-up;
}

.versus {
  font-family: 'VanillaDreams';
  font-size: 102px;
  color: #000000;
  margin: 0 4rem;
}

@keyframes fade-up {
  from {
    transform: translate(0);
    opacity: 1;
  }
  to {
    transform: translate(0, -40px); 
    opacity: 0;
 }
}
</style>
