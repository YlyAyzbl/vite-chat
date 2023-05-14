import { ref } from 'vue'
import Peer from 'peerjs';
const myPeerid = ref('client01');
const myPeerid2 = ref('client02');
const myPeerid3 = ref('client03');
const myPeerid4 = ref('client04');
// 车
const carPeerid = ref('server01')
const carPeerid2 = ref('server02')
const carPeerid3 = ref('server03')
const carPeerid4 = ref('server04')

const peer = new Peer(myPeerid.value, {
    host: 'peer.miaolme.com',
    port: 8089,
    secure: true,
    path: '/video',
    config: {
        "iceServers": [
            {
                urls: "turn:45.128.220.103:3478",
                username: "xingli",
                credential: "nekopara"
            },
            {
                urls: "stun:stun.l.google.com:19302"
            }
        ]
    }
});

const peer2 = new Peer(myPeerid2.value, {
    host: 'peer.miaolme.com',
    port: 8089,
    secure: true,
    path: '/video',
    config: {
        "iceServers": [
            {
                urls: "turn:45.128.220.103:3478",
                username: "xingli",
                credential: "nekopara"
            },
            {
                urls: "stun:stun.l.google.com:19302"
            }
        ]
    }
});


const peer3 = new Peer(myPeerid3.value, {
    host: 'peer.miaolme.com',
    port: 8089,
    secure: true,
    path: '/video',
    config: {
        "iceServers": [
            {
                urls: "turn:45.128.220.103:3478",
                username: "xingli",
                credential: "nekopara"
            },
            {
                urls: "stun:stun.l.google.com:19302"
            }
        ]
    }
});


const peer4 = new Peer(myPeerid4.value, {
    host: 'peer.miaolme.com',
    port: 8089,
    secure: true,
    path: '/video',
    config: {
        "iceServers": [
            {
                urls: "turn:45.128.220.103:3478",
                username: "xingli",
                credential: "nekopara"
            },
            {
                urls: "stun:stun.l.google.com:19302"
            }
        ]
    }
});














const status = ref(false)
const car = ref(false)
// 创建带有默认视频轨道的空 MediaStream 对象
const emptyVideoStream = new MediaStream();
const canvas = Object.assign(document.createElement('canvas'), {
    width: 640,
    height: 480
});
const ctx = canvas.getContext('2d');
if (ctx != null) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const videoStream = canvas.captureStream();
emptyVideoStream.addTrack(videoStream.getVideoTracks()[0]);

// 建立空视频轨道
const Stream = ref(emptyVideoStream)
const Stream2 = ref(emptyVideoStream)
const Stream3 = ref(emptyVideoStream)
const Stream4 = ref(emptyVideoStream)

peer.on('open', function (id) {

    status.value = true
    console.log('------------peer服务器连接成功')
    // 获取连接对象
    const conn = peer.connect(carPeerid.value);
    var call = null

    // 当连接打开时执行
    conn.on('open', () => {
        car.value = true
        // 向对端发送消息
        conn.send('connect');
        console.log(emptyVideoStream)
        call = peer.call(carPeerid.value, emptyVideoStream);
        console.log('应该发送了')
        call.on('stream', function (remoteStream) {
            Stream.value = remoteStream
            console.log("收到回复")

        });
    }, function (err: any) {
        console.log('无法连接监控1', err);
    });

})


peer.on('open', function (id) {

    status.value = true
    console.log('------------peer服务器连接成功')
    // 获取连接对象
    const conn = peer.connect(carPeerid.value);
    var call = null

    // 当连接打开时执行
    conn.on('open', () => {
        car.value = true
        // 向对端发送消息
        conn.send('connect');
        console.log(emptyVideoStream)
        call = peer.call(carPeerid.value, emptyVideoStream);
        console.log('应该发送了')
        call.on('stream', function (remoteStream) {
            Stream.value = remoteStream
            console.log("收到回复")

        });
    }, function (err: any) {
        console.log('无法连接监控1', err);
    });

})







peer2.on('open', function (id) {

    status.value = true
    console.log('------------peer服务器连接成功')
    // 获取连接对象
    const conn = peer.connect(carPeerid2.value);
    var call = null

    // 当连接打开时执行
    conn.on('open', () => {
        car.value = true
        // 向对端发送消息
        conn.send('connect');
        console.log(emptyVideoStream)
        call = peer.call(carPeerid2.value, emptyVideoStream);
        console.log('应该发送了')
        call.on('stream', function (remoteStream) {
            Stream2.value = remoteStream
            console.log("收到回复2")

        });
    }, function (err: any) {
        console.log('无法连接监控2', err);
    });

})





peer3.on('open', function (id) {

    status.value = true
    console.log('------------peer服务器连接成功')
    // 获取连接对象
    const conn = peer.connect(carPeerid3.value);
    var call = null

    // 当连接打开时执行
    conn.on('open', () => {
        car.value = true
        // 向对端发送消息
        conn.send('connect');
        console.log(emptyVideoStream)
        call = peer.call(carPeerid3.value, emptyVideoStream);
        console.log('应该发送了')
        call.on('stream', function (remoteStream) {
            Stream3.value = remoteStream
            console.log("收到回复3")

        });
    }, function (err: any) {
        console.log('无法连接监控3', err);
    });

})






peer4.on('open', function (id) {

    status.value = true
    console.log('------------peer服务器连接成功')
    // 获取连接对象
    const conn = peer.connect(carPeerid4.value);
    var call = null

    // 当连接打开时执行
    conn.on('open', () => {
        car.value = true
        // 向对端发送消息
        conn.send('connect');
        console.log(emptyVideoStream)
        call = peer.call(carPeerid4.value, emptyVideoStream);
        console.log('应该发送了')
        call.on('stream', function (remoteStream) {
            Stream4.value = remoteStream
            console.log(remoteStream)
            console.log("收到回复4")
        });
    }, function (err: any) {
        console.log('无法连接监控3', err);
    });

})








function GetStream4() {

    return Stream4.value

}



function GetStream() {

    return Stream.value

}
function GetStream2() {

    return Stream2.value

}
function GetStream3() {

    return Stream3.value

}










function GetPeerStatus() {
    return status.value
}
function GetCarStatus() {
    return car.value
}

export { GetStream, GetPeerStatus, GetCarStatus, GetStream2, GetStream3, GetStream4 }
