const content = (state, action) => {
    if (state === undefined){
        return {
            header: 'Сегодня',
            data: [],
            events: []
        }
    }
    console.log(state, action);
    switch (action.type) {
        case 'TOGGLE_MENU_ITEM':
            return {
                ...state.content,
                header: action.payload,
            }
        case 'FETCH_TASKS_SUCCESS':
            return {
                ...state.content,
                data: action.payload
            }
        default:
            return state.content;
    }
}

export default content;