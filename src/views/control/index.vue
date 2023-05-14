<template>
  <div>
    <h3>图传状态：<nav class="badge" id="peer">{{ carStatus }}</nav>
    </h3>

    <button type="button" class="btn btn-primary" id="btn">开启图传</button>

    <div class="live mt-5">
      <div id="Ldiv" class="yin">
        <video autoplay controls id="live"></video>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { GetCarStatus, GetStream } from '../peer';
import { AddClass, RemoveClass } from '@/utils/simple';
const carStatus = ref('')

const yinStatus = ref(true)









onMounted(() => {
  var live = document.getElementById("live") as HTMLVideoElement
  var peer = document.getElementById("peer")
  var btn = document.getElementById("btn") as HTMLButtonElement
  var Ldiv = document.getElementById("Ldiv") as HTMLElement
  btn.addEventListener("click", function () {
    console.log("点击按钮")
    live.srcObject = GetStream()
    if (yinStatus.value) {
      yinStatus.value = false
      console.log("移除隐藏")

      RemoveClass(Ldiv, "yin")
    } else {
      yinStatus.value = true
      AddClass(Ldiv, "yin")
      console.log("添加隐藏")
    }
  })
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


</script>
<style scoped>
video {
  width: 100%;
}

.yin {
  display: none;
}
</style>