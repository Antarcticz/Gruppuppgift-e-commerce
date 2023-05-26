import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const { totalQuantity } = useSelector(state => state.shoppingCart)

    return (
        <nav className="navbar d-flex justify-content-center align-item-center p-5">
            <div className="container-navbar">
                <Link className="navbar-brand" to="/"><img src="/Placeholders/Logo.svg" alt="" /></Link>
                <ul className="nav-links gap-5" >
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/add">ADD</NavLink></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                    <img className='icon-sm' src="/Placeholders/search.svg" alt="" />
                    <li><NavLink to="/login"><span>Login</span></NavLink></li>
                    <li className="nav-item dropdown">
                        <span className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaShoppingCart />
                            {
                                totalQuantity > 0 &&
                                <span className='position-absolut start-100 translate-middle badge rounded-pill bg-danger'>{totalQuantity}</span>
                            }
                        </span>
                        <ul className="dropdown-menu dropdown-menu-end shopping-cart">
                            <ShoppingCart />
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar