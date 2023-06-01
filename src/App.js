import React, { useState, useEffect } from "react";
import "./App.css";
import { Products, Navbar } from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { Checkout } from "./components/Checkout/Checkout";
import { Hero } from "./components/Hero/Hero";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [cartItems, setCartItems] = useState(0);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    commerce.cart.retrieve().then((data) => {
      setCart(data);
      setCartItems(data.total_items);
    });
  };

  const handleAddToCart = async (productId, quantity) => {
    const {item} = await commerce.cart.add(productId, quantity)
    setCart(item.cart);
    setCartItems(item.total_items);
  };

  // const handleAddToCart = async (productId, quantity) => {
  //   commerce.cart.add(productId, quantity).then((item) => {
  //     setCart(item.cart);
  //     setCartItems(item.total_items);
  //   });
  // };

  const handleRemoveFromCart = async(productId) => {
    const {item} = await commerce.cart.remove(productId);
    setCart(item.cart);
  }

  // const handleRemoveFromCart = async(lineItemId) => {
  //   commerce.cart.remove(lineItemId).then((resp) => {
  //     setCart(resp.cart);
  //     setCartItems(resp.total_items);
  //   }).catch((error) => {
  //     console.error('There was an error removing the item from the cart', error);
  //   });
  // }

 const handleUpdateCart = async(productId, quantity)=>{
  const {item} = await commerce.cart.update(productId, {quantity});
  setCart(item.cart);
  setCartItems(item.total_items);
 }
  
 const handleEmptyCart = async()=>{
  const {item} = await commerce.cart.empty();
  setCart(item.cart);
  setCartItems(item.total_items);
 }
  
 

 
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [cart]);

  // console.log("CArt",cart);
  


  return (
    <Router>
      <div className="App bg-gray-50 dark:bg-gray-900">
        <Navbar totalItems={cartItems} />
        <Routes>
          <Route exact path="/" element={<Hero/>} />
          <Route
            exact
            path="/products"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />

          <Route exact path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} onUpdateCart={handleUpdateCart} onEmptyCart={handleEmptyCart} />} />
          <Route exact path="/checkout" element={<Checkout cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
