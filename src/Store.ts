  
import { createStore } from "redux";
import reducers from "./Reducers/rootReducer";

const Store = createStore(
  reducers,
  {},
   (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    // tslint:disable-next-line:no-any
    // (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;

);

export default Store;