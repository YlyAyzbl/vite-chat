import io from 'socket.io-client';
// socket.io-client
const socket = io("http://45.128.220.103:3000");
// 初始化客户端
socket.emit('identify', { username: 'cat' }); // 发送标识请求
socket.emit('message', { from: 'cat', to: 'car', message: '#connect success#' }); // 发送消息给客户端 car

socket.on("connect_error", (error) => {
    console.error("服务器连接失败: ", error);
});


function GetStatus() {
    return socket.connected
}
interface Data {
    type: string;
    msg: string;
}

//发消息函数
function Chat(msg: Data) {
    const json = JSON.stringify(msg);
    socket.emit('message', { from: 'cat', to: 'car', message: json })
}

export { Chat, GetStatus }