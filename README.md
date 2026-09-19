# 🌿 Paradise Nursery

Paradise Nursery is a React-based plant shopping application where users can browse different categories of houseplants, add plants to their cart, manage quantities, and view the total cart value.

## 🚀 Features

- 🌱 Landing Page
- 🪴 About Us Page
- 🌿 Plant Listing Page
- 📂 Plants grouped into different categories
- 🛒 Add plants to cart
- ➕ Increase plant quantity
- ➖ Decrease plant quantity
- 🗑️ Remove plants from cart
- 💰 Dynamic total price calculation
- 🔢 Dynamic cart item count
- 📱 Responsive design
- 🧭 React Router navigation
- ⚡ Redux Toolkit for cart state management
- 🔄 Redux Saga integration

## 🛠️ Technologies Used

- React.js
- JavaScript
- React Router DOM
- Redux Toolkit
- React Redux
- Redux Saga
- CSS
- Vite

## 📁 Project Structure

```text
src/
├── api/
│   └── store/
│       ├── store.js
│       ├── CartSlice.jsx
│       └── CartSaga.js
│
├── components/
│   ├── Header.jsx
│   ├── LandingPage.jsx
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   └── CartItem.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
