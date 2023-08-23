import { writable } from 'svelte/store';

export const endpoint = writable('https://umami.harinwu.com');
export const recipe = writable([]);
