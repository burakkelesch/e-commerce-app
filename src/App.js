
import {BrowserRouter, Routes, Route} from "react-router-dom";
import loadable from './components/Common/loadable';
import pMinDelay from 'p-min-delay';

import Loader from './components/Common/Loader';
import './assets/css/style.css';
import './assets/css/color.css';
import './assets/css/animate.min.css';



const Fashion = loadable(() => pMinDelay(import('./Page/'),250), {fallback : <Loader />})
const Login = loadable(() => pMinDelay(import('./Page/Login'),250), {fallback : <Loader />})
const Register = loadable(() => pMinDelay(import('./Page/Register'),250), {fallback : <Loader />})
const ShopLeftSideBar = loadable(() => pMinDelay(import('./Page/Shop/shop-left-sidebar'), 250), { fallback: <Loader /> });
const Cart = loadable(() => pMinDelay(import('./Page/Cart'), 250), { fallback: <Loader /> });
const About = loadable(() => pMinDelay(import('./Page/About'), 250), { fallback: <Loader /> });
const ContactTwo = loadable(() => pMinDelay(import('./Page/Contact'), 250), { fallback: <Loader /> });

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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
