import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Registration from './pages/Registration'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='productDetails' element={<ProductDetails />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App