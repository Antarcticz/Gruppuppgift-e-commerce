import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Products from './pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App