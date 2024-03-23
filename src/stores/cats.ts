import { ref, computed } from 'vue'
import { defineStore } from 'pinia';

import Cat from '../models/cat.models.ts';

import catsManager from '../managers/cats-manager'

export const useCatsStore = defineStore('cats', () => {
    const cats = ref<Cat[]>([]);
    const catIndexOne = ref(-1);
    const catIndexTwo = ref(-1);

    const twoCatsToVote = computed(() => {
        if (catIndexOne.value === -1 || catIndexTwo.value === -1) {
            return [];
        }
        return [cats.value[catIndexOne.value], cats.value[catIndexTwo.value]];
    });

    const numberVotes = computed(() => {
        return cats.value.reduce((accumulator, currentCat) => {
            return accumulator + currentCat.vote
          },0);
    });

    function getAllCats() {
        cats.value = catsManager.getAllCats();
    }

    function generateTwoRandomCats() {
        if (cats.value.length < 2) {
            catIndexOne.value = -1;
        }

        catIndexOne.value = Math.floor(Math.random() * cats.value.length);
        catIndexTwo.value = -1;

        do {
            catIndexTwo.value = Math.floor(Math.random() * cats.value.length);
        } while (catIndexOne.value === catIndexTwo.value);
    }

    function incrementVote(catId: string) {
        const cat = cats.value.find(cat => cat.id === catId);

        if (cat) {
            cat.vote++;
        }
    }

    return { cats, twoCatsToVote, numberVotes, getAllCats, generateTwoRandomCats, incrementVote };
});