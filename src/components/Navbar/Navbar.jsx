import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container">
            <Link to="/"><img src="/Placeholders/Logo.svg" alt="" /></Link>
            <ul className="nav-links">
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/products">PRODUCTS</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
                <img className='icon-sm' src="/Placeholders/search.svg" alt="" />
                <li><NavLink to="/login"><span>Login</span></NavLink></li>
                {/* <li><NavLink to="/registration"><span>Registration</span></NavLink></li> */}
                <img className='icon-sm' src="/Placeholders/shopping-cart.svg" alt="" />
            </ul>
        </div>
    </nav>
  )
}

export default Navbar