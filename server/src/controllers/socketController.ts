import { Server, Socket } from 'socket.io';

import { randomUUID } from 'crypto';
import { publisher } from '../services/redis';
import { CONFIG } from '../config';

let connectedClients = 0;

export const handleConnection = async (io: Socket) => {
    const incResult = await publisher.incr(CONFIG.CONNECTION_COUNT_KEY);
    connectedClients++;
    await publisher.publish(CONFIG.CONNECTION_COUNT_UPDATED_CHANNEL, String(incResult));

    io.on(CONFIG.NEW_MESSAGE_CHANNEL, async (payload) => {
        const message = payload.message;
        if (!message) return;
        await publisher.publish(CONFIG.NEW_MESSAGE_CHANNEL, message.toString());
    });

    io.on('disconnect', async () => {
        connectedClients--;
        const decrResult = await publisher.decr(CONFIG.CONNECTION_COUNT_KEY);
        await publisher.publish(CONFIG.CONNECTION_COUNT_UPDATED_CHANNEL, String(decrResult));
    });
}

export const handleMessage = (io: Server, channel: string, text: string) => {
    if (channel === CONFIG.CONNECTION_COUNT_UPDATED_CHANNEL) {
        io.emit(CONFIG.CONNECTION_COUNT_UPDATED_CHANNEL, { count: text });
    } else if (channel === CONFIG.NEW_MESSAGE_CHANNEL) {
        io.emit(CONFIG.NEW_MESSAGE_CHANNEL, {
            message: text,
            id: randomUUID(),
            createdAt: new Date(),
            port: CONFIG.PORT,
        });
    }
}

export const getConnectedClients = () => connectedClients;