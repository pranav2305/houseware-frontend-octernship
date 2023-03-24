import { useState } from "react";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "../store/reducer";

const store: Store<TextState, TextAction> & {
  dispatch: DispatchType;
} = createStore(reducer);

export default ({ children }: ContextProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
