// src/utils/fetchRepos.js
const CACHE_DURATION = 3600000; // 1 hora em milissegundos

let cachedRepos = null;
let lastFetchTime = 0;

export async function fetchRepos() {
    const now = Date.now();
    if (cachedRepos && now - lastFetchTime < CACHE_DURATION) {
        return cachedRepos;
    }

    try {
        const response = await fetch('https://api.github.com/users/Vitor-rs/repos');
        if (!response.ok) {
            throw new Error('Falha ao buscar os repositórios');
        }
        const repos = await response.json();
        cachedRepos = repos;
        lastFetchTime = now;
        return repos;
    } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
        return cachedRepos || []; // Retorna cache antigo ou array vazio em caso de erro
    }
}