import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory";
import Veg from "./Veg";
import Home from "./Home";
import './App.css';
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const cart = useSelector((state) => state.cart || []);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <GoogleOAuthProvider clientId="841941334289-mj9vkqgs2l4brl8eu2fl3pvtf8hrdrv5.apps.googleusercontent.com">
      <BrowserRouter>
        <nav>
          <Link to="/">Home 🏠</Link>
          <Link to="/veg">Veg 🥕</Link>
          <Link to="/nonveg">NonVeg 🍗</Link>
          <Link to="/cart">Cart ({totalItems}) 🛒</Link>
          <Link to="/purchasehistory">PurchaseHistory ⏳</Link>
          <Link to="/aboutus">AboutUs 📞</Link>
          <Link to="/contactus">ContactUs ℹ️</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchasehistory" element={<PurchaseHistory />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
