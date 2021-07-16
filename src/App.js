import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Reusable/Header/Header';
import Error from './components/Error/Error';
import Banner from './components/Home/Banner/Banner';
import ProductsSector from './components/Home/ProductsSector/ProductsSector';
import HomeMessage from './components/Home/HomeMessage/HomeMessage';
import SomeFeaturedProducts from './components/Home/SomeFeaturedProducts/SomeFeaturedProducts';
import ProductDetail from './components/ProductDetail/ProductDetail';
import GenderPage from './components/GenderPage/GenderPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/product/:pdId">
              <Header />
              <ProductDetail />
            </Route>
            <Route path="/men">
              <GenderPage gender="men"/>
            </Route>
            <Route path="/women">
              <GenderPage gender="women"/>
            </Route>
            <Route exact path="/">
              <Header home={true} />
              <Banner />
              <ProductsSector />
              <HomeMessage />
              <SomeFeaturedProducts />
            </Route>
            <Route path="*">
              <Header />
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;