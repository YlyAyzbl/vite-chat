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
import flvjs from 'flv.js'
import { AddClass, RemoveClass } from '@/utils/simple';
const carStatus = ref('')

const yinStatus = ref(true)

const setVideo = (wsUrl: string, videoElement: HTMLMediaElement) => {
  const flvPlayer = flvjs.createPlayer({
    type: 'flv',
    url: wsUrl,
    isLive: true,


  }, {
    enableStashBuffer: false,
  }
  );
  flvPlayer.attachMediaElement(videoElement)
  // 启动 flv.js 实例
  flvPlayer.load();
  flvPlayer.play();
  const stopVideo = () => {
    flvPlayer.pause();
    flvPlayer.unload();
    flvPlayer.detachMediaElement();
  };

  return stopVideo;
}



onMounted(() => {
  var live = document.getElementById("live") as HTMLVideoElement
  let stopVideo = () => { }
  var btn = document.getElementById("btn") as HTMLButtonElement
  var Ldiv = document.getElementById("Ldiv") as HTMLElement
  btn.addEventListener("click", function () {
    console.log("点击按钮")
    stopVideo = setVideo("ws://localhost:8080/ws2", live)

    if (yinStatus.value) {
      yinStatus.value = false
      console.log("移除隐藏")
      live.play()
      RemoveClass(Ldiv, "yin")
    } else {
      yinStatus.value = true
      AddClass(Ldiv, "yin")
      console.log("添加隐藏")
      live.pause()
      stopVideo()
    }
  })

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