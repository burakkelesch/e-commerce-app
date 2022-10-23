
import {BrowserRouter, Routes, Route} from "react-router-dom";
import loadable from './components/Common/loadable';
import pMinDelay from 'p-min-delay';

import Loader from './components/Common/Loader';
import './assets/css/style.css';
import './assets/css/color.css';
import './assets/css/animate.min.css';




const ProductDetailsTwos = loadable(() => pMinDelay(import('./Page/Product/product-details-two'),250), {fallback : <Loader />})
const Favorites = loadable(() => pMinDelay(import('./Page/WishList/'),250), {fallback : <Loader />})
const Fashion = loadable(() => pMinDelay(import('./Page/'),250), {fallback : <Loader />})
const Login = loadable(() => pMinDelay(import('./Page/Login'),250), {fallback : <Loader />})
const Register = loadable(() => pMinDelay(import('./Page/Register'),250), {fallback : <Loader />})
const ShopLeftSideBar = loadable(() => pMinDelay(import('./Page/Shop/shop-left-sidebar'), 250), { fallback: <Loader /> });
const Cart = loadable(() => pMinDelay(import('./Page/Cart'), 250), { fallback: <Loader /> });
const About = loadable(() => pMinDelay(import('./Page/About'), 250), { fallback: <Loader /> });
const ContactTwo = loadable(() => pMinDelay(import('./Page/Contact'), 250), { fallback: <Loader /> });
const CheckOutTwo = loadable(() => pMinDelay(import('./Page/CheckOut/checkout-two'), 250), { fallback: <Loader /> });
const OrderComplete = loadable(() => pMinDelay(import('./Page/Order/order-complete'), 250), { fallback: <Loader /> });
const CustomerOrder = loadable(() => pMinDelay(import('./Page/my-account'), 250), { fallback: <Loader /> });
const CustomerAddress = loadable(() => pMinDelay(import('./Page/my-account/customer-address'), 250), { fallback: <Loader /> });
const CustomerAccountDetails = loadable(() => pMinDelay(import('./Page/my-account/customer-account-details'), 250), { fallback: <Loader /> });
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Fashion />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />} />
        <Route path="/shop/shop-left-sidebar" element= {<ShopLeftSideBar />} />
        <Route path="/Cart" element= {<Cart />} />
        <Route path="/about" element= {<About />} />
        <Route path="/contact" element= {<ContactTwo />} />
        <Route path="/checkout-two" element= {<CheckOutTwo />} />
        <Route path="/order-complete" element= {<OrderComplete />} />
        <Route path="/wishlist" element= {<Favorites />} />
        <Route path="/product-details-two/:id" element= {<ProductDetailsTwos />} />
        <Route path="/my-account/customer-order" element= {<CustomerOrder />} />
        <Route path="/my-account/customer-address" element={<CustomerAddress />} />
        <Route path="/my-account/customer-account-details" element={<CustomerAccountDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
