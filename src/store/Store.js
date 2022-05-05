import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/rootReducer";

const Store = createStore(rootReducer, applyMiddleware(thunk));
console.log("store", Store.getState());
export default Store;
