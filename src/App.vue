<script setup>
import HomepageView from './views/HomepageView.vue';

const isDesktop = window.innerWidth > 1024;
</script>

<template>
  <HomepageView v-if="isDesktop" />
</template>
