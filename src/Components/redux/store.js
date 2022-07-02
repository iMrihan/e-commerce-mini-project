import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { productReducer } from "./Products/reducer";
import thunk from "redux-thunk";

const store = createStore(productReducer, applyMiddleware(thunk));

export { store };
