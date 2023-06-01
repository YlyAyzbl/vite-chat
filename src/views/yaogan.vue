<template>
    <div>
        <div class="JoyStick" ref="virtual">
            <span class="Rocker" ref="rocker"></span>
        </div>
    </div>
</template>
  
<script setup lang='ts'>
import { onMounted, reactive, ref } from "vue";
import { Root, GetPoint, GetIfSend } from "./data"
import { Chat } from "./chat";
const { virtual, rocker } = Root()
interface Data {
    type: string;
    msg: string;
}
const shang = reactive({ // 原点
    x: 0,
    y: 1
})
const xia = reactive({ // 原点
    x: 0,
    y: -1
})
const zuo = reactive({ // 原点
    x: -1,
    y: 0
})
const you = reactive({ // 原点
    x: 1,
    y: 0
})

const time = ref<number>(0)

onMounted(() => {



    function sendMsg() { // 主要改动这段代码，这里把传入的0-255转换为了-1到1之间的值发送，想恢复的话删除ifSend的判断就好
        const msg: Data = { type: 'move', msg: JSON.stringify({ x: 0, y: 0 }) }
        const ifSend = GetIfSend()
        const point = GetPoint()
        if (ifSend) {
            if (point.x > 150) {
                msg.msg = JSON.stringify(you)
            } else if (point.x < -150) {
                msg.msg = JSON.stringify(zuo)
            } else if (point.y > 150) {
                msg.msg = JSON.stringify(shang)
            } else if (point.y < -150) {
                msg.msg = JSON.stringify(xia)
            }

            Chat(msg)
            console.log('发送', JSON.stringify(msg.msg))
            time.value = 0
        } else {
            if (time.value < 10) {
                const msg: Data = { type: 'move', msg: "not move" }
                Chat(msg)
                console.log('发送', msg)
                time.value++
            }
        }



    }
    setInterval(sendMsg, 100)
})



</script>
<style lang="scss" scoped>
.JoyStick {
    position: absolute;
    width: 40%;
    left: 0;
    right: 0;
    margin: auto;
    /*设置距离底部高度*/
    bottom: calc(50vh / 4);

    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;

    .Rocker {
        position: absolute;
        width: 40%;
        height: 40%;
        left: 30%;
        top: 30%;
        border-radius: 50%;
        background: rgb(23, 23, 23, 0.8);
        pointer-events: none;
        /*忽略鼠标事件*/
    }
}
</style>