import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data.js";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart({ book }) {
    const duplicate = cart.find((item) => +item.id === +book.id);
    if (duplicate) {
      setCart(
        cart.map((item) => {
          if (+item.id === +duplicate.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        }),
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  function removeItem(book){

    console.log(book)
    setCart(cart.filter(item => book.id !== item.id))
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => item.id === book.id ? {...item, quantity: +quantity} : item      
    ))
  }

  function numOfItems(){
    let count = 0;
    cart.forEach(item => count += item.quantity)
    return count
  }

  useEffect(() => {}, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numOfItems = {numOfItems()}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity = {changeQuantity} removeItem= {removeItem} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
