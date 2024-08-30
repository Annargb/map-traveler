<script setup>
import { ref } from 'vue';
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapSettings } from './map/settings';
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue';
import MarkerIcon from './components/icons/MarkerIcon.vue';

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
const favoritePlaces = [
  {
    id: 1,
    title: 'New place 1',
    description: 'SUper description 1',
    img: '',
    lngLat: [30.523333, 50.490001],
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'SUper description 2',
    img: '',
    lngLat: [30.523333, 50.450001],
  },
];

const activeId = ref(null);
const map = ref(null);

const changeActiveId = id => {
  activeId.value = id;
};

const changePlace = id => {
  const { lngLat } = favoritePlaces.find(place => place.id === id);
  changeActiveId(id);
  map.value.flyTo({ center: lngLat });
};
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces
        :items="favoritePlaces"
        :activeId="activeId"
        @place-cliked="changePlace"
      />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        :zoom="10"
        :center="[30.523333, 50.450001]"
        @mb-created="mapInstance => (map = mapInstance)"
      >
        <MapboxMarker
          v-for="place in favoritePlaces"
          :key="place.id"
          :lngLat="place.lngLat"
        >
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="h-8 w-8" />
          </button>
        </MapboxMarker>
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
