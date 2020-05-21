const content = (state, action) => {
    if (state === undefined){
        return {
            header: 'Сегодня'
        }
    }

    switch (action.type) {
        case 'TOGGLE_MENU_ITEM':
            return {
                header: action.payload
            }
        default:
            return state.content;
    }
}

export default content;