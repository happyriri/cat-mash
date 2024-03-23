<script setup lang="ts">
import Cat from '../models/cat.models.ts';

import heart from '../assets/heart.svg'

const props = defineProps({
    cat: {
        type: Object as ()=> Cat
    }
})

</script>

<template>
  <div class="container">
    <img class="cat" :src="props.cat.url">
    <img class="heart" :src="heart" alt="Heart Icon">
    <div class="circle"></div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: inline-flex;
}

.cat {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  cursor: pointer;
}

.container:hover .circle {
  transform: scale(1) ;
  transition-duration: 150ms;
}

.circle {
  position: absolute;
  width: 270px;
  height: 270px;
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
  top: calc(125px - 20px);
  left: calc(125px - 20px);
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