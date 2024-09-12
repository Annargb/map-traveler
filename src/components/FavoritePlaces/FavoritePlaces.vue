<script setup>
import { computed, ref } from 'vue';
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue';
import IButton from '../IButton/IButton.vue';
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue';
import { useModal } from '../../composables/useModal';
import { useMutation } from '../../composables/useMutation';
import { updateFavoritePlace } from '../../api/favorite-places';

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

const emit = defineEmits(['place-cliked', 'create', 'updated']);

const {
  isOpen: isEditOpen,
  openModal: openEditModal,
  closeModal: closeEditModal,
} = useModal();

const { mutation: updatePlace, isLoading } = useMutation({
  mutationFn: formData => updateFavoritePlace(formData),
  onSuccess: () => {
    closeEditModal();
    emit('updated');
  },
});

const selectedId = ref(null);
const selectedItem = computed(() =>
  props.items.find(place => place.id === selectedId.value)
);

const handleEditPlace = id => {
  selectedId.value = id;
  openEditModal();
};

const handleSubmit = formData => {
  updatePlace(formData);
};
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
        @edit="handleEditPlace(place.id)"
      />

      <EditPlaceModal
        :is-open="isEditOpen"
        :place="selectedItem"
        :is-loading="isLoading"
        @close="closeEditModal"
        @submit="handleSubmit"
      />
    </slot>
    <IButton class="w-full mt-10" variant="gradient" @click="emit('create')"
      >Додати маркер</IButton
    >
  </div>
</template>
