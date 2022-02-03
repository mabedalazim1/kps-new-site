import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./actions/auth";
import EventBus from "./common/EventBus";
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import ContactUs from './pages/contactUs/ContactUs';
import Manasa from './pages/manasa/Manasa';
import AdminDashboard from './admin/AdminDashboard'
import ImageContant from './admin/pages/imageContant/ImageContant'
import ImageSection from './admin/pages/imageSection/ImageSection';
import Forms from './admin/components/formInput/Forms';
import AdminHome  from './admin/pages/home/AdminHome';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Roiaa from './pages/roiaa/Roiaa';
import Index from './pages/home/index/Index';
import Login from './components/login/login.component';

function App() {

  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
  EventBus.on("logout", () => {
    logOut();
  });

  return () => {
    EventBus.remove("logout");
  };
}, [currentUser, logOut]);

  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={ <Index /> } >
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='roiaa' element={<Roiaa />} />
          <Route path='contactus' element={<ContactUs />} />                   
        </Route>
        <Route path='/admin' element={ <AdminDashboard /> } >
            <Route path='home' element={ <AdminHome /> } />
            <Route path='imageContant' element={ <ImageContant /> } />
            <Route path='sections' element={ <ImageSection /> } />
            <Route path='forms' element={ <Forms /> } />
            
          </Route>
        <Route path='manasa' element={<Manasa />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;
