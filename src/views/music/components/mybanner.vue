<script setup lang="ts">
  import { ref } from 'vue';
  const currentIndex = ref(0);
  type Props = {
    list: string[];
  };

  // withDefaults 的第二个参数便是默认参数设置，会被编译为运行时 props 的 default 选项
  withDefaults(defineProps<Props>(), {
    list: () => [
      'https://www.eveningwater.com/my-web-projects/js/26/img/1.jpg',
      'https://www.eveningwater.com/my-web-projects/js/26/img/2.jpg',
      'https://www.eveningwater.com/my-web-projects/js/26/img/3.jpg',
    ],
  });
</script>

<template>
  <div
    class="ec-panel"
    v-for="(item, index) in list"
    :key="index + item"
    :class="index === currentIndex ? 'active' : ''"
    :style="{ backgroundImage: `url(${item})` }"
    @click="currentIndex = index"
  >
    girl{{ item.slice(0, 1) }}
  </div>
</template>

<style lang="less">
  .base-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    margin: 0;
    height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #b5d5ee 10%, #4096ef 90%);
    .base-flex;

    .app {
      margin: 0;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 90vw;
      .base-flex;

      .ec-panel {
        .base-flex;
        color: #fff;
        margin: 10px;
        padding: 10px;
        font-size: 1.2rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        border-radius: 20px;
        position: relative;
        height: 90vh;
        flex: 0.5 1;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

        &.active {
          flex: 5 1;
        }
      }
    }
  }
</style>
