<template>
  <!-- <gradio src="https://mubert-text-to-music.hf.space" /> -->
  <search-hot-detail />
  <mybanner :list="list" />
</template>
<script setup lang="ts">
  // import gradio from './components/gradio.vue';
  // import searchHotDetail from './components/search-hot-detail.vue';
  import mybanner from './components/mybanner.vue';
  const list = reactive<string[]>([
    'https://www.eveningwater.com/my-web-projects/js/26/img/1.jpg',
    'https://www.eveningwater.com/my-web-projects/js/26/img/2.jpg',
    'https://www.eveningwater.com/my-web-projects/js/26/img/3.jpg',
    'https://www.eveningwater.com/my-web-projects/js/26/img/6.jpg',
    'https://www.eveningwater.com/my-web-projects/js/26/img/7.jpg',
    'https://www.eveningwater.com/my-web-projects/js/26/img/8.jpg',
  ]);
</script>
