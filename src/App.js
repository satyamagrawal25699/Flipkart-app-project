import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Endfooter from './Endfooter';
import Products from './Products';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Loginform from './Loginform';
import Productdisplay from './Productdisplay';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Loginform" element={<Loginform />} />
        <Route path="/productdisplay/:id" element={<Productdisplay />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      <Endfooter />
    </div>
  );
}

export default App;
