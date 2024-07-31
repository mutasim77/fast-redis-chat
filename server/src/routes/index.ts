import { FastifyInstance } from 'fastify';
import { CONFIG } from '../config';

export const registerRoutes = (app: FastifyInstance) => {
    app.get('/', () => ({
        status: 'OK',
        message: 'Default Page for testing!',
        port: CONFIG.PORT,
    }));
    app.get('/healthcheck', () => ({
        status: 'OK',
        port: CONFIG.PORT,
    }));
}