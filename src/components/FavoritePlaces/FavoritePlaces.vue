<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue';
import IButton from '../IButton/IButton.vue';
// import { ref } from 'vue';

// const buttonVariant = ref('gradient');

// const changeBg = () => {
//   buttonVariant.value =
//     buttonVariant.value === 'gradient' ? 'outlined' : 'gradient';
// };
const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    required: true,
    type: [Number, null],
  },
});

const emit = defineEmits(['place-cliked']);
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери</div>
    <FavoritePlace
      :key="place.id"
      v-for="place in props.items"
      :title="place.title"
      :description="place.description"
      :img="place.img"
      :isActive="place.id === props.activeId"
      @click="emit('place-cliked', place.id)"
    />
    <IButton class="w-full mt-10" variant="gradient">Додати маркер</IButton>
  </div>
</template>
