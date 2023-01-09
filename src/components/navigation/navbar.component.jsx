import { useContext } from 'react'
import {Outlet, Link} from 'react-router-dom'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'
import logo from '../../assets/solmi.png'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'


const Navbar = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  return (
    <>
      <div className="navbar">
        <Link className='logo-container' to='/'>
          <img src={logo} alt="logo" width="50" height="50"/>
        </Link>
        <div className='nav-links-container'>
          {
            currentUser ? (
              <span className='nav-link'>
                <Link className='nav-link' to='/auth' onClick={signOutUser}>Sign out</Link>
                <Link className='nav-link' to='/profile'>Profile</Link>
              </span>
            ) : (
              <Link className='nav-link' to='/auth'>Sign in</Link>
            )
          }
        </div>
        <CartIcon/>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet/>
    </>
  )
}

export default Navbar