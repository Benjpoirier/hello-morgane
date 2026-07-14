import type { APIRoute } from 'astro';
import { INDEXNOW_KEY } from '../data/site';

export const getStaticPaths = () => [{ params: { key: INDEXNOW_KEY } }];

export const GET: APIRoute = () =>
  new Response(INDEXNOW_KEY, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
