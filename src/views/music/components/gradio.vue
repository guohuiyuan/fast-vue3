<template>
  <gradio-app :src="src" />
</template>
<script lang="ts" setup>
  type Props = {
    src: string;
  };
  withDefaults(defineProps<Props>(), {
    src: 'https://mubert-text-to-music.hf.space',
  });
  const s = document.createElement('script');

  s.type = 'module';

  s.src = 'https://gradio.s3-us-west-2.amazonaws.com/3.6/gradio.js';

  document.body.appendChild(s);
</script>
