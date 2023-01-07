import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about-us'
import Brands from './pages/brands'
import Blogs from './pages/blogs'
import Products from './pages/products'
import Qoute from './pages/request-a-quote'
import Contact from './pages/contact-us'
import NetworkCables from './pages/products/network-devices'
import Product1 from './pages/home/products/network-cables'
import Product2 from './pages/home/products/routers'
import Product3 from './pages/home/products/transceivers'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/">
        <Redirect to="/" />
      </Route>
      <Route path={"/about-us"} component={About}></Route>
      <Route path={"/brands"} component={Brands}></Route>
      <Route path={"/blogs"} component={Blogs}></Route>
      <Route path={"/products"} component={Products}></Route>
      <Route path={'/network'} component={Product1}></Route>
      <Route path={'/routers'} component={Product2}></Route>
      <Route path={'/transeivers'} component={Product3}></Route>
      <Route path={'/request-a-quote'} component={Qoute}></Route>
      <Route path={'/contact-us'} component={Contact}></Route>
      <Route path={'/Network-cables/APM408P-10000S'} component={NetworkCables}></Route>
    </BrowserRouter>
  )
}

export default App
