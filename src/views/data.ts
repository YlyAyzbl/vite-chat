import { ref, onMounted, onUnmounted, reactive } from 'vue'

const Point = reactive({ // 原点
    x: 0,
    y: 0
})

// 是否发送标志
const ifSend = ref<boolean>(false)


function Root() {
    const virtual = ref<HTMLElement | null>(null)

    const rocker = ref<HTMLElement | null>(null)

    const size = ref<number>(0)

    const originPoint = reactive({ // 原点
        x: 0,
        y: 0
    })

    const movePoint = reactive({
        x: 0,
        y: 0
    })

    const startPoint = reactive({
        x: 0,
        y: 0
    })

    const delta = reactive({ // 差值
        x: 0,
        y: 0
    })

    const radius = ref<number>(0) // virtual摇杆的半径

    const attribute = reactive({ //
        force: 0,
        x: 0,
        y: 0
    })


    class Vector2 { // 用于计算向量长度
        x: number
        y: number
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        // 归一化
        normalize() {
            const length = this.length();
            if (length === 0) {
                this.x = 0;
                this.y = 0;
            } else {
                this.x /= length;
                this.y /= length;
            }
            return this;
        }

    }


    function InitSize() { // 初始化大小
        if (virtual.value) {
            // 初始化radius
            radius.value = virtual.value.offsetWidth / 2
            virtual.value.style.height = `${virtual.value.offsetWidth}px`
            size.value = virtual.value.offsetWidth
            originPoint.x = window.innerWidth / 2  // 初始化原点x

            originPoint.y = window.innerHeight - (40 + virtual.value.offsetHeight / 2) // 初始化原点y
        }
    }

    function InitEvent() {
        if (virtual.value) {
            virtual.value.addEventListener('touchmove', OnRollTouchMove, false)
            virtual.value.addEventListener('touchstart', OnRollTouchStart, false)
            virtual.value.addEventListener('touchend', OnRollTouchEnd, false)
        }
    }


    function IO255(intensity: number): number {
        let temp = intensity
        if (temp < 0) {
            // 如果输入小于0，则将强度数映射为0-255的负数
            return Math.round(temp * (255 / radius.value));
        } else {
            // 如果输入大于等于0，则将强度数映射为0-255的正数
            return Math.round(temp * (255 / radius.value));
        }
    }



    function OnRollTouchMove(e: TouchEvent) { // 获取位置差
        e.stopPropagation() // 停止冒泡
        e.preventDefault() // 默认事件
        if (rocker.value) {
            movePoint.x = e.touches[0].clientX
            movePoint.y = e.touches[0].clientY
            delta.x = movePoint.x - originPoint.x
            delta.y = originPoint.y - movePoint.y
            Calculate()
        }
    }


    function Calculate() {// 计算位置
        let resultX = 0, resultY = 0

        let direction = new Vector2(delta.x, delta.y)
        let length = direction.length()
        attribute.force = length / (size.value / 2)

        if (length > size.value / 2) {
            // 归一化
            direction.normalize()
            attribute.x = direction.x
            attribute.y = direction.y
            resultX = (size.value / 2) * attribute.x
            resultY = (size.value / 2) * attribute.y
        } else {
            attribute.x = delta.x / (size.value / 2)
            attribute.y = delta.y / (size.value / 2)
            resultX = delta.x
            resultY = delta.y
        }
        Point.x = IO255(resultX)
        Point.y = IO255(resultY)


        setRockerPosition(resultX, -resultY)
    }

    function setRockerPosition(x: number, y: number) {// 设置遥杆位置
        if (rocker.value) {
            rocker.value.style.left = `${size.value * 0.3 + x}px`
            rocker.value.style.top = `${size.value * 0.3 + y}px`
        }
    }

    function OnRollTouchStart(e: TouchEvent) {
        if (rocker.value) {
            startPoint.x = e.touches[0].pageX
            startPoint.y = e.touches[0].pageY
            ifSend.value = true
        }
    }

    function OnRollTouchEnd(e: TouchEvent) {
        if (rocker.value && virtual.value) { // 原点复位
            rocker.value.style.left = virtual.value.offsetWidth * 0.3 + 'px'
            rocker.value.style.top = virtual.value.offsetWidth * 0.3 + 'px'
            Point.x = 0, Point.y = 0
            ifSend.value = false
        }
    }

    onMounted(() => {
        InitSize()
        InitEvent()
    })

    onUnmounted(() => {
        ifSend.value = false
    })
    return { virtual: virtual, rocker: rocker }
}

function GetPoint() {
    return Point
}

function GetIfSend() {
    return ifSend.value
}


export { Root, GetPoint, GetIfSend }