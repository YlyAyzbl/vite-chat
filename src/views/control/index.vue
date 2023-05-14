<template>
  <div>
    <h3>图传状态：<nav class="badge" id="peer">{{ carStatus }}</nav>
    </h3>

    <button type="button" class="btn btn-primary" @click="tuChuan">开启图传</button>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { GetCarStatus, GetStream } from '../peer';
import { AddClass, RemoveClass } from '@/utils/simple';

const carStatus = ref('')


onMounted(() => {

  var peer = document.getElementById("peer")
  function StatusTest() {
    if (!GetCarStatus()) {
      AddClass(peer, "text-bg-danger")
      RemoveClass(peer, "text-bg-success")
      carStatus.value = '无法连接'
    } else {
      AddClass(peer, "text-bg-success")
      RemoveClass(peer, "text-bg-danger")
      carStatus.value = '连接成功'
    }

  }

  setInterval(StatusTest, 1000);
})

function tuChuan() {
  var stream = GetStream();
  if (stream == null)
    console.log('无法获取图传视频')
}
</script>
<style scoped></style>