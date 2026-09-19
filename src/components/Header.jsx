import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="logo">
          🌿 Paradise Nursery
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/plants">Plants</Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-count">
              {totalItems}
            </span>
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;