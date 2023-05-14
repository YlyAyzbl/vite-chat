<template>
    <div>
        <h1>网页控制服务状态:</h1>
        <h1>图传状态:{{ peerStatus }}</h1>
        <h1 class="badge text-bg-danger" id="peer">Success</h1>
        <h1>图传状态:{{ carStatus }}</h1>
        <h1 class="badge text-bg-danger" id="car">Success</h1>
        <h1>通讯状态:{{ socketStatus }}</h1>
        <h1 class="badge text-bg-danger" id="socket">Success</h1>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { GetStatus } from '../chat';
import { GetPeerStatus, GetCarStatus } from '../peer';
import { RemoveClass, AddClass } from '@/utils/simple'
const peerStatus = ref('与服务器连接失败')
const socketStatus = ref('与服务器连接失败')
const carStatus = ref('与小车连接失败')


onMounted(() => {
    var peer = document.getElementById("peer")
    var car = document.getElementById("car")
    var socket = document.getElementById("socket")

    function StatusTest() {
        if (GetStatus()) {
            socketStatus.value = '与服务器连接成功'
            AddClass(socket, "text-bg-success")
            RemoveClass(socket, "text-bg-danger")
        }
        if (GetPeerStatus()) {
            peerStatus.value = '与服务器连接成功'
            AddClass(peer, "text-bg-success")
            RemoveClass(peer, "text-bg-danger")
        }
        if (GetCarStatus()) {
            carStatus.value = '与小车连接成功'
            AddClass(car, "text-bg-success")
            RemoveClass(car, "text-bg-danger")
        }
    }

    setInterval(StatusTest, 1000);
})


</script>
<style scoped></style>