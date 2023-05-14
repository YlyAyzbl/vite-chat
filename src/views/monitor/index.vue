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

const jk1S = ref(true)
const jk2S = ref(true)
const jk3S = ref(true)
const jk4S = ref(true)



function createVideoPlayer(id: string) {
    // 创建video元素
    const videoElement = document.createElement('video');
    videoElement.controls = true;
    videoElement.id = id
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
        if (jk1S.value) {
            AddClass(jk1, "bg-success")
            jk1S.value = false
            createVideoPlayer("v1")
        } else {
            RemoveClass(jk1, "bg-success")
            destroyVideoPlayer("v1")
            jk1S.value = true
            console.log("执行移除")
        }

    })
    jk2?.addEventListener("click", () => {
        if (jk2S.value) {
            AddClass(jk2, "bg-success")
            jk2S.value = false
            createVideoPlayer("v2")
        } else {
            RemoveClass(jk2, "bg-success")
            jk2S.value = true
            destroyVideoPlayer("v2")
        }
    })
    jk3?.addEventListener("click", () => {
        if (jk3S.value) {
            AddClass(jk3, "bg-success")
            jk3S.value = false
            createVideoPlayer("v3")
        } else {
            RemoveClass(jk3, "bg-success")
            jk3S.value = true
            destroyVideoPlayer("v3")
        }
    })
    jk4?.addEventListener("click", () => {
        if (jk4S.value) {
            AddClass(jk4, "bg-success")
            jk4S.value = false
            createVideoPlayer("v4")
        } else {
            RemoveClass(jk4, "bg-success")
            jk4S.value = true
            destroyVideoPlayer("v4")
        }
    })

})


</script>
<style scoped>
video {
    width: 100%;
}
</style>