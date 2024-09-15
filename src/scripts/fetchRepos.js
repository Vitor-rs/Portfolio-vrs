// src/utils/fetchRepos.js
export async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/Vitor-rs/repos');
    if (!response.ok) {
        throw new Error('Falha ao buscar os repositórios');
    }
    return await response.json();
}