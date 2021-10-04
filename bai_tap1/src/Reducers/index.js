import {combineReducers} from "redux";
import products from "./products";
import item from "./item";

const appReducers = combineReducers({
    products,
    item
});

export default appReducers;