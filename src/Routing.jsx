import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomeScreen/Home";
import Register from "./pages/RegisterScreen/Register";
import Testimonials from "./pages/HomeScreen/Testimonials";
import ProductContainer from "./pages/HomeScreen/Product/ProductContainer";
import Dashboard from "./pages/DashBoardScreen/Dashboard";
import FirstOrderComponent from "./pages/OrderScreen/FirstOrderComponent";
import SecondOrderComponent from "./pages/OrderScreen/SecondOrderComponent";
import ThirdOrderComponent from "./pages/OrderScreen/ThirdOrderComponent";  
import ConfirmationConponent from './pages/OrderScreen/ConfirmationConponent'
import Manufacture from './pages/Manufacture/Manufacture'
import Features from "./pages/HomeScreen/Features";
import MyOrders from "./pages/Profile/MyOrders";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customer" element={<Testimonials />} />
        <Route path="/products" element={<ProductContainer />} />
        <Route path="/features" element={<Features />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/order-page/:productId"
          element={<FirstOrderComponent />}
        />
        <Route path="/second-order" element={<SecondOrderComponent />} />
        <Route path="/third-order" element={<ThirdOrderComponent />} />
        <Route path="/order-confirmation" element={<ConfirmationConponent />} />
        <Route path="/manufacture" element={<Manufacture />} />
        <Route path="/myOrders" element={<MyOrders />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
