import * as Types from "../Constants/ActionType";

var initialState = [];
var findIndex = (id,products) => {
    var result = -1;
    products.every(function(product, index) {
        if (product.id === id){
            result = index;
            return false
        }else return true
      })
    return result;
}
const products = (state = initialState,action) => {
    var index = -1;
    switch (action.type){
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(action.id,state)
            state.splice(index,1);
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(action.product.id,state);
            state[index] = action.product;
            return [...state];
        default: return [...state];
    }
}
export default products;