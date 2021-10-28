import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Product from "./Product";
import Header from "./Header";
import Cart from "./Cart";
import {useState} from "react"
import { useSelector } from "react-redux";






function App() {
  const cartAddedItems = useSelector((state)=>state.ShoeData.cartInfo)
  console.log(cartAddedItems)
  const signup = true;
  return (
    <Router>
      <Switch>
        <>
        <Route path="/signup">
          <Login signup={signup} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <div className="App">
          <Header/>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <Product  />
          </Route>
          <Route path="/cart">
            {/* {cartAddedItems.map((shoes)=>(
              <Cart shoes = {shoes}  />
            )
            )}
             */}
          </Route>

        
          
          
      </div>
      </>
     
      </Switch>
    </Router>
  );
}

export default App;
