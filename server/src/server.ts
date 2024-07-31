import closeWithGrace from 'close-with-grace';
import app from './app';
import { CONFIG } from './config';
import { publisher } from './services/redis';
import { getConnectedClients } from './controllers/socketController';


async function startServer() {
    try {
        await app.listen({
            port: CONFIG.PORT,
            host: CONFIG.HOST,
        });

        console.log(`Server started at http://${CONFIG.HOST}:${CONFIG.PORT}`);
    } catch (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
}

closeWithGrace({ delay: 2000 }, async () => {
    const connectedClients = getConnectedClients();
    if (connectedClients > 0) {
        const currentCount = parseInt((await publisher.get(CONFIG.CONNECTION_COUNT_KEY)) || '0', 10);
        const newCount = Math.max(currentCount - connectedClients, 0);
        await publisher.set(CONFIG.CONNECTION_COUNT_KEY, newCount);
    }
    await app.close();
});

startServer();