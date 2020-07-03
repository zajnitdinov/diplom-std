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


export {
    openModalAddItem,
    closeModalAddItem,
    toggleMenuItem,
}