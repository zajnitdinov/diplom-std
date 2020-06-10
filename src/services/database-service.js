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
        const res = await this.getResource('/tasks');
        return res.map(this._transformTasks);
    }

    _transformTasks = (task) => {
        const date = new Date(task.date);
        const strDate = date.getDate() + ' мая';
        return{
            key: task.id,
            title: task.title,
            date: strDate,
            creator: task.firstname + ' ' + task.lastname + ' ' + task.middlename,
            executor: 'Аксютин Павел Александрович'
        }
    }
}