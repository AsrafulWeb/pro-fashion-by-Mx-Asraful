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
import Cart from './components/Cart/Cart';
import { AuthContextProvider, PrivateRoute } from './auth/auth';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Switch>
            <Route path="/login">
              <Header />
              <Login />
            </Route>
            <Route path="/product/:for/:cate/:pdId">
              <Header />
              <ProductDetail />
            </Route>
            <Route path="/cart">
              <Header />
              <Cart />
            </Route>
            <PrivateRoute path="/my-account">
              <Header />
            </PrivateRoute>
            <Route path="/men">
              <GenderPage gender="men" />
            </Route>
            <Route path="/women">
              <GenderPage gender="women" />
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
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;