import { HeaderContainer } from "./styles"
import logoCoffee from '../../assets/logo.png'
import point from '../../assets/pinpoint.png'
import cart from '../../assets/cart.png'
import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="" />
      </NavLink>
      <div className="right-blocks">
        <div className="local">
          <img src={point} alt="" />
          <span>São Paulo, SP</span>
        </div>
        <NavLink to="/checkout" className="btn-cart">
          <img src={cart} alt="" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
