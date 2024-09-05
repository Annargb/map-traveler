<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue';
import { registerUser } from '../api/users';

const router = useRouter();
const isLoading = ref(false);

const handleRegisterUser = async userData => {
  isLoading.value = true;
  try {
    await registerUser(userData);
    router.replace('/map');
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
</template>
