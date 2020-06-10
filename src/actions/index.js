import DatabaseService from "../services/database-service";
const db = new DatabaseService();

const openModalAddItem = () => {
    return {
        type: 'OPEN_MODAL_ADD_ITEM'
    }
}

const closeModalAddItem = () => {
    return {
        type: 'CLOSE_MODAL_ADD_ITEM'
    }
}

const toggleMenuItem = payload => {
    return {
        type: 'TOGGLE_MENU_ITEM',
        payload
    };
}
const fetchTasks = async (dispatch) => {
    const data = await db.getTasks();
    return await dispatch ({
        type: 'FETCH_TASKS_SUCCESS',
        payload: data
    })
}

export {
    openModalAddItem,
    closeModalAddItem,
    toggleMenuItem,
    fetchTasks
}