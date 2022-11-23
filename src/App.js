import React from 'react'
import Header from './containers/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ProductListing from './containers/ProductListing'
import ProductyDetails from './containers/ProductyDetails'
import Carousel from "./containers/Carousel"
import Footer from "./containers/Footer"

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Carousel />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductyDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

