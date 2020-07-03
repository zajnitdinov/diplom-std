import infoWindow from "./info-window";
import modalAddItem from "./modal-add-item";
import content from "./content";
import user from "./user";

const reducer = (state , action) => {
    return{
        user: user(state, action),
        infoWindow: infoWindow(state, action),
        modalAddItem: modalAddItem(state, action),
        content: content(state, action),
    }
}

export default reducer;