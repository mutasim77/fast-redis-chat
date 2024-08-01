import { SOCKET_URL } from "@/utils/constants";
import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

export function useSocket() {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const socketIo = io(SOCKET_URL, {
            reconnection: true,
            upgrade: true,
            transports: ["websocket", "polling"],
        });

        setSocket(socketIo);

        return () => {
            socketIo.disconnect();
        }
    }, []);

    return socket;
}