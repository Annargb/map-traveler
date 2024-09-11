<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue';
import IButton from '../IButton/IButton.vue';
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue';
import { useModal } from '../../composables/useModal';

const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    required: true,
    type: [String, null],
  },
});

const emit = defineEmits(['place-cliked', 'create']);

const {
  isOpen: isEditOpen,
  openModal: openEditModal,
  closeModal: closeEditModal,
} = useModal();
</script>

<template>
  <div class="px-6 text-black">
    <div class="text-gray mb-4">Додані маркери</div>
    <slot name="list">
      <div v-if="!items.length">Список порожній</div>
      <FavoritePlace
        :key="place.id"
        v-for="place in props.items"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :isActive="place.id === props.activeId"
        @click="emit('place-cliked', place.id)"
        @edit="openEditModal"
      />

      <EditPlaceModal :is-open="isEditOpen" @close="closeEditModal" />
    </slot>
    <IButton class="w-full mt-10" variant="gradient" @click="emit('create')"
      >Додати маркер</IButton
    >
  </div>
</template>
