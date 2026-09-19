import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import cartReducer from "../../features/Cart/CartSlice";
import CartSaga from "../../features/Cart/CartSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(CartSaga);

export default store;