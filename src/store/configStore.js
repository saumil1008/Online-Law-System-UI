import { applyMiddleware, createStore } from "redux";
import reducers from "../reducer";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
export default function configStore() {
  const store = createStore(
    reducers,applyMiddleware(thunk, promise)
  );

  return store;
}