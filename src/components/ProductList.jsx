
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/Cart/CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2bb2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: 28,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Monstera",
    price: 35,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594574395-3b4c6e6f8e9b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Pothos",
    price: 22,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1616768091250-4e5d3d9e7f8e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 32,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=500&q=80",
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    price: 20,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Echeveria",
    price: 18,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Jade Plant",
    price: 24,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Haworthia",
    price: 19,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "String of Pearls",
    price: 27,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Burro's Tail",
    price: 26,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },

  // Flowering Plants
  {
    id: 13,
    name: "Orchid",
    price: 40,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1566920242650-7e7b7b6f9f5e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Rose Plant",
    price: 35,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Jasmine",
    price: 28,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1597848212624-e19e7e5e6e7e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Lavender",
    price: 30,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Anthurium",
    price: 38,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "African Violet",
    price: 25,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-page">
      <h1>Paradise Nursery</h1>

      <p className="product-subtitle">
        Bring nature into your home with our beautiful collection of plants.
      </p>

      {categories.map((category) => (
        <section key={category} className="plant-category">
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <div className="plant-info">
                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      onClick={() => dispatch(addToCart(plant))}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;