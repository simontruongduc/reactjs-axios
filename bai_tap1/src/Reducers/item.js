import * as Types from "../Constants/ActionType";

var initialState = {};
const item = (state = initialState,action) => {
    switch (action.type){
        case Types.EDIT_PRODUCT:
            state = action.product;
            return state;
        default: return state;
    }
}
export default item;