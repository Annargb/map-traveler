<script setup>
import { ref } from 'vue';
// import HomepageView from './views/HomepageView.vue';
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue';
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue';
import LoginForm from './components/Auth/LoginForm/LoginForm.vue';
import IModal from './components/IModal/IModal.vue';

const isOpen = ref(true);

const closeModal = () => {
  isOpen.value = false;
};

const openModal = () => {
  isOpen.value = true;
};
</script>

<template>
  <!-- <HomepageView /> -->
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->
  <button @click="openModal">Click</button>
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
  <IModal v-if="isOpen" @close="closeModal">hello</IModal>
</template>
