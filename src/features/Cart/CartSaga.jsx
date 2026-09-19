
import { takeEvery } from "redux-saga/effects";

function* addToCartSaga(action) {
  console.log("Product added to cart:", action.payload);
}

function* increaseQuantitySaga(action) {
  console.log("Quantity increased:", action.payload);
}

function* decreaseQuantitySaga(action) {
  console.log("Quantity decreased:", action.payload);
}

function* removeFromCartSaga(action) {
  console.log("Product removed from cart:", action.payload);
}

function* CartSaga() {
  yield takeEvery("cart/addToCart", addToCartSaga);
  yield takeEvery("cart/increaseQuantity", increaseQuantitySaga);
  yield takeEvery("cart/decreaseQuantity", decreaseQuantitySaga);
  yield takeEvery("cart/removeFromCart", removeFromCartSaga);
}

export default CartSaga;