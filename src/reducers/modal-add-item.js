const modalAddItem = (state, action) => {
    if (state === undefined){
        return {
            visible: false
        }
    }

    switch (action.type) {
        case 'OPEN_MODAL_ADD_ITEM':
            return {
                visible: true
            }
        case 'CLOSE_MODAL_ADD_ITEM':
            return {
                visible: false
            }
        default:
            return state.infoWindow;
    }
}

export default modalAddItem;