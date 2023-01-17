import { useContext } from 'react'
import {Outlet, Link} from 'react-router-dom'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'
import logo from '../../assets/solmi.png'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles'


const Navbar = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={logo} alt="logo" width="50" height="50"/>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/game'>Game</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          {
            currentUser ? (
              <span className='nav-link'>
                <NavLink to='/auth' onClick={signOutUser}>Sign out</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
              </span>
            ) : (
              <Link className='nav-link' to='/auth'>Sign in</Link>
            )
          }
        </NavLinks>
      <CartIcon/>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </>
  )
}

export default Navbar