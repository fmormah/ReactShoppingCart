import React, { useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Cart from './components/Cart.jsx';

const App = (props) => {

  const [products, setProducts] = useState([]);
  const [fetchedProducts,setFetchedProducts] = useState(false);
  const [didMount, setMount] = useState(false);
  const prodAPI = "https://jsainsburyplc.github.io/front-end-test/products.json";


  useEffect(() => {
    if(didMount === false){
      setMount(true);
      getProducts();
    }
  });

  const getProducts=()=>{
    fetch(prodAPI)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      setProducts([...data]);
      setFetchedProducts(true);
    });
  }

  if(fetchedProducts === false){
    return <div className="pt30 pb30 pl30 pr30"><p> Loading ... </p></div>
  }else{
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/" component={() => <Home products={products} />}/>
              <Route path="/cart" component={() => <Cart />}/>
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
};
export default App;