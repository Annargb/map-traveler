<script setup>
import { ref } from 'vue';

import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue';
import LoginForm from './components/Auth/LoginForm/LoginForm.vue';
import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue';

const isOpen = ref(true);

const closeModal = () => {
  isOpen.value = false;
};

const openModal = () => {
  isOpen.value = true;
};
</script>

<template>
  <button @click="openModal">Click</button>
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
  <CreateNewPlaceModal
    :is-open="isOpen"
    @close="closeModal"
    @submit="console.log"
  />
</template>
