import { env } from '@/env';

// Wrapper para facilitar o uso da fetch api sem ter que ficar passando o base url sempre que for necessária!
// Logo o uso ficaria algo como "api('/products')"
export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;

  // Importante para evitar que o método "new URL() remova o /api da requisição causando um erro na tentativa de dar request"
  const apiPrefix = '/api';
  // Concatenador de URL's (pode ser utilizado em qualquer lugar que o javascript funcione)
  const url = new URL(apiPrefix.concat(path), baseUrl);

  return fetch(url, init);
}
