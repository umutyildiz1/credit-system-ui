import { createStore } from "redux";
import tokenReducer from "./StateReducer";

const configStore = () => {
    const store = createStore(tokenReducer)
    return store;
}
export default configStore;