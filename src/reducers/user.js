const user = (state, action) => {
    if (state === undefined){
        return {
            id: 1,
            firstName: '',
            lastName: '',
            middleName: '',
            admin: ''
        }
    }

    switch (action.type) {
        default:
            return state.infoWindow;
    }
}

export default user;