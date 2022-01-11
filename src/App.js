import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import ContactUs from './pages/contactUs/ContactUs';
import Admin from './pages/admin/Admin';
import Manasa from './pages/manasa/Manasa';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Roiaa from './pages/roiaa/Roiaa';
import Index from './pages/home/index/Index';
import Login from './components/login/login.component';

function App() {
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
        
        <Route path='manasa' element={<Manasa />} />
        <Route path='admin' element={<Admin />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;
