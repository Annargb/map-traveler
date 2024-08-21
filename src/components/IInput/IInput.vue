<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
  type: {
    default: 'text',
    type: String,
  },
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="w-full text-[#2C2C2C]">
    <label class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <input
        class="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary"
        v-bind="{ ...$props, ...$attrs }"
      />
    </label>
  </div>
</template>

<!-- <template>
  <div class="w-full text-[#2C2C2C]">
    <label class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <input
        class="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary"
        :type="props.type"
        :placeholder="props.placeholder"
        @input="changeText"
      />
    </label>
  </div>
</template> -->
