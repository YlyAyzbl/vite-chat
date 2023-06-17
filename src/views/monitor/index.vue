<template>
    <div class="container-fluid">
        <h1 class="text-center">监控</h1>
        <!--  <video autoplay controls id="1"></video>
        <video autoplay controls id="2"></video>
        <video autoplay controls id="3"></video>
        <video autoplay controls id="4"></video> -->
        <div class="row bg-secondary" id="jk">
            <div class="col-3 text-center text-light" id="jk1">监控1</div>
            <div class="col-3 text-center text-light" id="jk2">监控2</div>
            <div class="col-3 text-center text-light" id="jk3">监控3</div>
            <div class="col-3 text-center text-light" id="jk4">监控4</div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { RemoveClass, AddClass, RemoveAllChildClass } from '@/utils/simple'
import flvjs from 'flv.js'
const jk1S = ref(true)
const jk2S = ref(true)
const jk3S = ref(true)
const jk4S = ref(true)

const setVideo = (wsUrl: string, videoElement: HTMLMediaElement) => {
    const flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: wsUrl,
        isLive: true,
    });
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


function createVideoPlayer(id: string) {
    // 创建video元素
    const videoElement = document.createElement('video');
    videoElement.controls = true;
    videoElement.id = id
    // videoElement.srcObject = object;
    // 将video元素添加到id为"jk"的父元素上
    const container = document.getElementById('jk');
    container?.appendChild(videoElement);
}


function destroyVideoPlayer(id: string) {
    // 找到要销毁的video元素
    const videoElement = document.getElementById(id) as HTMLVideoElement
    console.log(videoElement)
    // 销毁video元素
    videoElement?.remove()

}




onMounted(() => {
    var jk1 = document.getElementById('jk1')
    var jk2 = document.getElementById('jk2')
    var jk3 = document.getElementById('jk3')
    var jk4 = document.getElementById('jk4')

    jk1?.addEventListener("click", () => {
        let stopVideo = () => { };  // 初始化 stopVideo 变量
        if (jk1S.value) {
            AddClass(jk1, "bg-success")
            jk1S.value = false
            createVideoPlayer('camera1')
            let video = document.getElementById("camera1") as HTMLMediaElement

            stopVideo = setVideo("ws://localhost:8080/ws", video)

        } else {
            RemoveClass(jk1, "bg-success")
            jk1S.value = true
            stopVideo()
            destroyVideoPlayer("camera1")
            console.log("执行移除")
        }

    })
    jk2?.addEventListener("click", () => {
        let stopVideo = () => { };  // 初始化 stopVideo 变量
        if (jk2S.value) {
            AddClass(jk2, "bg-success")
            jk2S.value = false
            createVideoPlayer('camera2')
            let video = document.getElementById("camera2") as HTMLMediaElement

            stopVideo = setVideo("ws://localhost:8080/ws2", video)
        } else {
            RemoveClass(jk2, "bg-success")
            jk2S.value = true
            stopVideo()
            destroyVideoPlayer("camera2")
        }
    })
    jk3?.addEventListener("click", () => {
        let stopVideo = () => { };  // 初始化 stopVideo 变量
        if (jk3S.value) {
            AddClass(jk3, "bg-success")
            jk3S.value = false
            createVideoPlayer('camera3')
            let video = document.getElementById("camera3") as HTMLMediaElement

            stopVideo = setVideo("ws://localhost:8080/ws3", video)
        } else {
            RemoveClass(jk3, "bg-success")
            jk3S.value = true
            stopVideo()
            destroyVideoPlayer("camera3")
        }
    })
    jk4?.addEventListener("click", () => {
        let stopVideo = () => { };  // 初始化 stopVideo 变量
        if (jk4S.value) {
            AddClass(jk4, "bg-success")
            jk4S.value = false
            createVideoPlayer('camera4')
            let video = document.getElementById("camera4") as HTMLMediaElement

            stopVideo = setVideo("ws://localhost:8080/ws4", video)
        } else {
            RemoveClass(jk4, "bg-success")
            jk4S.value = true
            stopVideo()
            destroyVideoPlayer("camera4")
        }
    })

})


</script>
<style scoped>
video {
    width: 100%;
}
</style>