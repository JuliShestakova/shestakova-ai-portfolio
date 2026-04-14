import { createOpenAI } from '@ai-sdk/openai';

/**
 * AI Edge Engine (Showcase)
 * This module demonstrates an advanced multi-agent orchestration pattern
 * used for high-availability AI services.
 */

export interface Agent {
  id: string;
  name: string;
  model: any;
  provider: string;
  rpd: number;
}

// --- YANDEX GPT PROVIDER (Optimized) ---
const yandex = createOpenAI({
  baseURL: 'https://llm.api.cloud.yandex.net/v1',
  apiKey: process.env.YANDEX_API_KEY, 
  headers: {
    'x-folder-id': process.env.YANDEX_FOLDER_ID || '',
  },
  fetch: (url, options) => {
    const originalUrl = url.toString();
    const finalUrl = originalUrl.replace('/responses', '/chat/completions');
    return fetch(finalUrl, options);
  }
});

export const AGENT_POOL: Agent[] = [
  { id: 'yandex', name: 'Yandex GPT 🇷🇺', model: yandex('yandexgpt-lite'), provider: 'yandex', rpd: 10000 },
  { id: 'gigachat', name: 'GigaChat 🇷🇺', model: yandex('gigachat-pro'), provider: 'sber', rpd: 5000 }
];

export function getOptimizedAgent(retryCount = 0): Agent {
    const minute = new Date().getMinutes();
    const index = (minute + retryCount) % AGENT_POOL.length;
    return AGENT_POOL[index];
}
