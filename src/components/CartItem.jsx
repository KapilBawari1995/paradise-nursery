import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/Cart/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>
          <p>Add some beautiful plants to your cart.</p>

          <a href="/plants" className="continue-shopping-btn">
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">

        {/* Cart Heading */}
        <div className="cart-header">
          <div>
            <h1>Shopping Cart</h1>
            <p>{totalItems} plants in your cart</p>
          </div>

          <a href="/plants" className="continue-shopping-btn">
            Continue Shopping
          </a>
        </div>

        <div className="cart-content">

          {/* Cart Items */}
          <div className="cart-items">

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>

                  <p className="cart-category">
                    {item.category}
                  </p>

                  <p className="cart-unit-price">
                    ${item.price} / plant
                  </p>

                  {/* Quantity */}
                  <div className="quantity-section">

                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>

                  </div>
                </div>

                {/* Price + Delete */}
                <div className="cart-item-right">

                  <p className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Cart Summary */}
          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total Plants</span>
              <strong>{totalItems}</strong>
            </div>

            <div className="summary-row">
              <span>Total Price</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <button
              className="checkout-btn"
              onClick={() =>
                alert("Checkout Coming Soon!")
              }
            >
              Checkout
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CartItem;