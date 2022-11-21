import {useRef} from 'react';

export default function WebSock(id){
    const socket = useRef()
    socket.current = new WebSocket('ws://localhost:5000')
    console.log(socket)
    socket.current.onopen = () =>{
        const message = {
            event: 'connection',
            username: 'test',
            id: id
        }
        socket.current.send(JSON.stringify(message))
    }
    socket.current.onmessage = (e) =>{
        const message = JSON.parse(e.data)
        console.log(message)
    }
    socket.current.onclose = () =>{
        console.log(123)
    }
    socket.current.onerror = () =>{
        console.log(123)
    }
}