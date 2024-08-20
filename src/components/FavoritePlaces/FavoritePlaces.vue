<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue';
import IButton from '../IButton/IButton.vue';
import { ref } from 'vue';

const buttonVariant = ref('gradient');

const changeBg = () => {
  buttonVariant.value =
    buttonVariant.value === 'gradient' ? 'outlined' : 'gradient';
};
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери</div>
    <FavoritePlace :key="n" v-for="n in 4" />
    <IButton class="w-full mt-10" :variant="buttonVariant" @click="changeBg"
      >Додати маркер</IButton
    >
  </div>
</template>
