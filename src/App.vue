<template>
  <div>
    <tou />
    <router-view></router-view>
    <di />
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import di from '@/views/foot.vue';
import tou from '@/views/head.vue';
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  height: 100%;
}

/* 用于美化滚动条 */
::-webkit-scrollbar {
  width: 12px;
  height: 2em;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #49b1f5, #49b1f5 25%, #92d0f9 25%, #92d0f9 50%, #49b1f5 50%, #49b1f5 75%, #92d0f9 75%);
  border: 3px solid transparent;
  background-clip: content-box;
  border-radius: 6px;
}
</style>