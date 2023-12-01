import { io } from "socket.io-client";

const socket = io("ws://127.0.0.1:6001", {});

let index;
for (index = 0; index <100; index++) {
    for (let index2 = 0; index2 <5; index2++) {
        setTimeout(() => {
            console.log('click up', index)
            socket.emit("click_up", 1)
        }, 5000 * (index+1) + ((index2+1)*50))
        setTimeout(() => {
            console.log('click a', index)
            socket.emit("click_a", 1)
        }, 10000 * (index+1) + ((index2+1)*50))
    }
    
    setTimeout(() => {
      console.log('click s', index)
      socket.emit("click_s", 1)
    }, 5000 * (index+1))
}