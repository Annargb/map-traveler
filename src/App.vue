<script setup>
import { MapboxMap } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapSettings } from './map/settings';
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue';
// import { ref } from 'vue';

// import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue';
// import LoginForm from './components/Auth/LoginForm/LoginForm.vue';
// import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue';

// const isOpen = ref(true);

// const closeModal = () => {
//   isOpen.value = false;
// };

// const openModal = () => {
//   isOpen.value = true;
// };
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        :zoom="10"
        class="w-full h-full"
      >
      </MapboxMap>
    </div>
  </main>
</template>

<!-- <template>
  <button @click="openModal">Click</button>
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
  <CreateNewPlaceModal
    :is-open="isOpen"
    @close="closeModal"
    @submit="console.log"
  />
</template> -->
