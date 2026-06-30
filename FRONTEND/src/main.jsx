import { useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./landing_page/home/HomePage"
import AboutPage from "./landing_page/about/AboutPage"
import PricingPage from "./landing_page/pricing/PricingPage"
import ProductPage from "./landing_page/product/ProductPage"
import LoginForm from "./landing_page/signup/LoginForm"
import Profile from "./landing_page/signup/Profile"
import RegisterForm from "./landing_page/signup/RegisterForm"
import SupportPage from "./landing_page/support/SupportPage"
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";


createRoot(document.getElementById('root')).render(  
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/product" element={<ProductPage/>}/>
    {/* <Route path="/*" element={<SignupPage/>}/> */}
    <Route path="/login" element={<LoginForm/>}/>
    <Route path="/signup" element={<RegisterForm/>}/>
    <Route path="/profile" element={<Profile/>}/>
     
    <Route path="/support" element={<SupportPage/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
