const infoWindow = (state, action) => {
    if (state === undefined){
        return {
            visible: false
        }
    }

    switch (action.type) {
        case 'OPEN_INFO':
            return {
                visible: true
            }
        case 'CLOSE_INFO':
            return {
                visible: false
            }
        default:
            return state.infoWindow;
    }
}

export default infoWindow;