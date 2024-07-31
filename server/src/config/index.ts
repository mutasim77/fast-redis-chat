import dotenv from 'dotenv';

dotenv.config({ path: process.cwd() + '/.env' });

export const CONFIG = Object.freeze({
    PORT: parseInt(process.env.PORT || '3001', 10),
    HOST: process.env.HOST || '0.0.0.0',
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    CONNECTION_COUNT_KEY: 'chat:connection-count',
    CONNECTION_COUNT_UPDATED_CHANNEL: 'chat:connection-count-updated',
    NEW_MESSAGE_CHANNEL: 'chat:new-message',
});