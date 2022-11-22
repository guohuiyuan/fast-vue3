<template>
  <div>
    <p class="pl-4 mt-4 opacity-70"> 热搜榜 </p>
    <div class="h-60"></div>
    <div
      v-for="(item, index) in list"
      :key="item.searchWord"
      class="flex items-center p-5 hover:bg-gray-100 dark:hover:bg-gray-100/20 cursor-pointer"
    >
      <span class="text-base">
        {{ index + 1 }}
      </span>
      <div class="ml-4">
        <span :style="{ fontWeight: index >= 0 && index <= 2 ? 'bold' : 'initial' }"> {{ item.searchWord }}</span>
        <span class="pl-2 text-sm opacity-40">{{ item.score }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { searchHotDetail } from '/@/api/user';
  const reply = await searchHotDetail();
  console.log(reply);
  const list = reply.data;
</script>
