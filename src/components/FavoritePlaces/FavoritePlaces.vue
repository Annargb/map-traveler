<script setup>
import { computed, ref } from 'vue';
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue';
import IButton from '../IButton/IButton.vue';
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal.vue';
import { useModal } from '../../composables/useModal';
import { useMutation } from '../../composables/useMutation';
import {
  updateFavoritePlace,
  deleteFavoritePlace,
} from '../../api/favorite-places';

const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    required: true,
    type: [String, null],
  },
  isPlacesLoading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['place-cliked', 'create', 'updated']);
const idOfDeletedItem = ref(null);

const {
  isOpen: isEditOpen,
  openModal: openEditModal,
  closeModal: closeEditModal,
} = useModal();

const {
  isOpen: isConfirmationModalOpen,
  openModal: openConfirmationModal,
  closeModal: closeConfirmationModal,
} = useModal();

const { mutation: updatePlace, isLoading } = useMutation({
  mutationFn: formData => updateFavoritePlace(formData),
  onSuccess: () => {
    closeEditModal();
    emit('updated');
  },
});

const {
  mutation: deletePlace,
  isLoading: isDeleting,
  error: deleteError,
} = useMutation({
  mutationFn: id => deleteFavoritePlace(id),
  onSuccess: () => {
    closeConfirmationModal();
    idOfDeletedItem.value = null;
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

const handleOpenConfirmationModal = id => {
  idOfDeletedItem.value = id;
  openConfirmationModal();
};

const handleDeletePlace = () => {
  deletePlace(idOfDeletedItem.value);
};
</script>

<template>
  <div class="px-6 text-black">
    <div class="text-gray mb-4">Додані маркери</div>
    <slot name="list">
      <div v-if="!items.length && !isPlacesLoading">Список порожній</div>
      <FavoritePlace
        :key="place.id"
        v-for="place in props.items"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :isActive="place.id === props.activeId"
        @click="emit('place-cliked', place.id)"
        @edit="handleEditPlace(place.id)"
        @delete="handleOpenConfirmationModal(place.id)"
      />

      <EditPlaceModal
        :is-open="isEditOpen"
        :place="selectedItem"
        :is-loading="isLoading"
        @close="closeEditModal"
        @submit="handleSubmit"
      />

      <ConfirmationModal
        :is-open="isConfirmationModalOpen"
        :is-loading="isDeleting"
        :has-error="deleteError"
        title="Ви дійсно хочете видалити улюблене місце?"
        @cancel="closeConfirmationModal"
        @confirm="handleDeletePlace"
      />
    </slot>
    <IButton class="w-full mt-10" variant="gradient" @click="emit('create')"
      >Додати маркер</IButton
    >
  </div>
</template>
