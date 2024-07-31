import fastify from 'fastify';
import fastifyIO from 'fastify-socket.io';
import fastifyCors from '@fastify/cors';
import { CONFIG } from './config';
import { registerRoutes } from './routes';
import { handleConnection, handleMessage } from './controllers/socketController';
import { subscriber } from './services/redis';

const app = fastify();

app.register(fastifyCors, {
    origin: CONFIG.CORS_ORIGIN,
});

app.register(fastifyIO);
registerRoutes(app);

app.ready(err => {
    if (err) throw err;

    app.io.on('connection', handleConnection);

    subscriber.subscribe(CONFIG.CONNECTION_COUNT_UPDATED_CHANNEL, (err, count) => {
        if (err) {
            console.error(`Error subscribing to ${CONFIG.CONNECTION_COUNT_UPDATED_CHANNEL}`, err);
            return;
        }
        console.log(`${count} clients subscribe to ${CONFIG.CONNECTION_COUNT_UPDATED_CHANNEL} channel!`);
    });

    subscriber.subscribe(CONFIG.NEW_MESSAGE_CHANNEL, (err, count) => {
        if (err) {
            console.error(`Error subscribing to ${CONFIG.NEW_MESSAGE_CHANNEL}`);
            return;
        }
        console.log(`${count} clients subscribes to ${CONFIG.NEW_MESSAGE_CHANNEL} channel`);
    });

    subscriber.on('message', (channel, text) => {
        handleMessage(app.io, channel, text);
    });
});


export default app;