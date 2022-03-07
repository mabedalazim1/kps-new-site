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
import Activity from './pages/activity/Activity';
import ActivityData from './components/activity/ActivityData';
import Manasa from './pages/manasa/Manasa';
import AdminDashboard from './admin/AdminDashboard'
import ImageSection from './admin/pages/imageSection/ImageSection';
import AdminHome  from './admin/pages/home/AdminHome';
import ImageCategory from './admin/pages/imageCategory/ImageCategory';
import ImageData from './admin/pages/imageData/ImageData';
import UpdateImageData from './admin/pages/imageData/UpdateImageData';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Roiaa from './pages/roiaa/Roiaa';
import Index from './pages/home/index/Index';
import Login from './components/login/login.component';
import AddImgData from './admin/pages/imageData/AddImgData';

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
            <Route path='activity' element={ <Activity /> } />
            <Route path='activity:id' element={<ActivityData />} />    
        </Route>
        <Route path='/admin' element={ <AdminDashboard /> } >
            <Route path='home' element={ <AdminHome /> } />
            <Route path='sections' element={ <ImageSection /> } />
            <Route path='categories' element={ <ImageCategory /> } />
            <Route path='imagedata' element={ <ImageData /> } >
            <Route path=':id' element={ <AddImgData /> } />
            </Route>
            <Route path='updateimgdata/:id' element={ <UpdateImageData /> } />
            
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
