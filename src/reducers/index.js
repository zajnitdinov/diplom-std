import infoWindow from "./info-window";
import modalAddItem from "./modal-add-item";
import content from "./content";

const reducer = (state , action) => {
    return{
        infoWindow: infoWindow(state, action),
        modalAddItem: modalAddItem(state, action),
        content: content(state, action)
    }
}

export default reducer;