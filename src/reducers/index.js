import content from "./content";
import user from "./user";

const reducer = (state , action) => {
    return{
        user: user(state, action),
        content: content(state, action),
    }
}

export default reducer;