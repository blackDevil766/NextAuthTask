import { legacy_createStore as createStore } from "redux";
import { ProductReducer } from "./reducer/productReducer";

export const store = createStore(ProductReducer);
