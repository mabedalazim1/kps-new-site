import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import ImageContant from './pages/imageContant/ImageContant'
import NotFound from './NotFound'
import Home from './pages/home/Home'
import Login from '../login/Login'
import Forms from './components/formInput/Forms'
import ImageSection from './pages/imageSection/ImageSection'
import ImageCategory from './pages/imageCategory/ImageCategory'
const Admin = () => {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/admin' element={ <AdminDashboard /> } >
            <Route path='home' element={ <Home /> } />
            <Route path='imageContant' element={ <ImageContant /> } />
            <Route path='sections' element={ <ImageSection /> } />
            <Route path='categories' element={ <ImageCategory /> } />
            <Route path='forms' element={ <Forms /> } />
          </Route>
          
          <Route path='/log' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default Admin
