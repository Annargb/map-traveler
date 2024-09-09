<script setup>
import { computed, reactive } from 'vue';
import IModal from '../IModal/IModal.vue';
import IInput from '../IInput/IInput.vue';
import InputImage from '../InputImage/InputImage.vue';
import IButton from '../IButton/IButton.vue';
import MarkerIcon from '../icons/MarkerIcon.vue';

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
  isLoading: {
    default: false,
    type: Boolean,
  },
  hasError: {
    default: false,
    type: Boolean || Object,
  },
});

const emit = defineEmits(['close', 'submit']);
const formData = reactive({
  title: '',
  description: '',
  img: '',
});

const uploadText = computed(() => {
  return formData.img
    ? 'Натисніть тут, щоб змінити фото'
    : 'Натисніть тут, щоб додати фото';
});

const handleUpload = url => {
  formData.img = url;
};

const resetForm = () => {
  formData.title = '';
  formData.description = '';
  formData.img = '';
};
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form
      @submit.prevent="emit('submit', formData, resetForm)"
      class="min-w-[420px]"
    >
      <div class="flex gap-1 justify-center font-bold mb-10">
        <MarkerIcon />
        Додати маркер
      </div>
      <IInput label="Локація" class="mb-4" v-model="formData.title" />
      <IInput
        label="Опис"
        type="textarea"
        class="mb-3"
        v-model="formData.description"
      />
      <div class="flex gap-2 items-center mb-10">
        <img
          v-if="formData.img"
          :src="formData.img"
          :alt="formData.title"
          class="w-10 h-10 object-cover"
        />
        <InputImage @uploaded="handleUpload">{{ uploadText }}</InputImage>
      </div>

      <IButton class="w-full" variant="gradient" :is-loading="props.isLoading">
        Додати
      </IButton>
      <div v-if="props.hasError" class="text-red-500">Щось пішло не так</div>
    </form>
  </IModal>
</template>
