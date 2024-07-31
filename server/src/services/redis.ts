import { Redis } from 'ioredis';
import { CONFIG } from '../config';

export const publisher = new Redis(CONFIG.UPSTASH_REDIS_REST_URL!);
export const subscriber = new Redis(CONFIG.UPSTASH_REDIS_REST_URL!);