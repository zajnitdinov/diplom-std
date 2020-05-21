export default class DatabaseService {
    _apiBase = 'http://localhost:8000';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, receiver ${res.status}`);
        }
        return await res.json();
    };

    getTasks = async () => {
        return await this.getResource('/tasks');
    }
}