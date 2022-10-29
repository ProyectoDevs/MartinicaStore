import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
//Router traído desde react-router-dom (no confundir con el Router de express para el back)
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import { BrowserRouter as Switch } from 'react-router-dom';
import Cart from './components/cart';
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/newProduct';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <div className='container container-fluid'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="Home" element={<Home />}/>
            <Route path="/producto/:id" element={<ProductDetails />}/>
            <Route path='/cart' element={<Cart />}/>

            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/productList" element={<ProductsList />}/>          
            <Route path="/nuevoProducto" element={<NewProduct />}/>
          </Routes>
        </div>
      <Footer/>
    </div>
    </Router>

  );
}

export default App;