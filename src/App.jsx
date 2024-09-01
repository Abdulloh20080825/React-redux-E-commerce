import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';
import SingliProduct from './pages/SingliProduct';

const App = () => {
	return (
		<div className=''>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path='/products' element={<Product />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/product/:id' element={<SingliProduct />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
