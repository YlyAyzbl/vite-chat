<template>
    <div>
        <h1>网页控制服务状态:</h1> <br>
        <h1>图传状态:{{ carStatus }}</h1>
        <h1 class="badge text-bg-danger" id="car">Success</h1>
        <h1>通讯状态:{{ socketStatus }}</h1>
        <h1 class="badge text-bg-danger" id="socket">Success</h1>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { GetStatus } from '../chat';

import { RemoveClass, AddClass } from '@/utils/simple'

const socketStatus = ref('与服务器连接失败')
const carStatus = ref('与小车连接失败')


onMounted(() => {
    var peer = document.getElementById("peer")
    var car = document.getElementById("car")
    var socket = document.getElementById("socket")
    // 设置WebSocket服务器的地址
    const serverUrl = 'ws://localhost:8080/ws';

    // 建立WebSocket连接
    const socketC = new WebSocket(serverUrl);
    // 当WebSocket连接打开时
    socketC.addEventListener('open', (event) => {
        console.log('WebSocket连接已打开');

        carStatus.value = '与小车连接成功'
        AddClass(car, "text-bg-success")
        RemoveClass(car, "text-bg-danger")

    });



    function StatusTest() {
        if (GetStatus()) {
            socketStatus.value = '与服务器连接成功'
            AddClass(socket, "text-bg-success")
            RemoveClass(socket, "text-bg-danger")
        }
    }

    setInterval(StatusTest, 1000);
})


</script>
<style scoped></style>