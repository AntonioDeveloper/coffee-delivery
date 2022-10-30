import { HeaderContainer } from "./styles"
import logoCoffee from '../../assets/logo.png'
import point from '../../assets/pinpoint.png'
import cart from '../../assets/cart.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <div className="right-blocks">
        <div className="local">
          <img src={point} alt="" />
          <span>São Paulo, SP</span>
        </div>
        <a href="/checkout" className="btn-cart">
          <img src={cart} alt="" />
        </a>
      </div>
    </HeaderContainer>
  )
}
