const openInfo = () => {
    return {
        type: 'OPEN_INFO'
    }
}

const closeInfo = () => {
    return{
        type: 'CLOSE_INFO'
    }
}

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
    }
}

export {
    openInfo,
    closeInfo,
    openModalAddItem,
    closeModalAddItem,
    toggleMenuItem
}