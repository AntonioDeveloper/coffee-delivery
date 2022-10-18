import { BannerContainer } from "./styles";
import cartIcon from '../../../../assets/cart-white.png'
import clockIcon from '../../../../assets/clock.png'
import boxIcon from '../../../../assets/box.png'
import coffeeIcon from '../../../../assets/coffee-icon.png'
import prodImg from '../../../../assets/prod-cafe.png'

export function Banner() {
  return (
    <BannerContainer>
      <div className="perks">
        <h1 className="bannerTitle">Encontre o café perfeito para qualquer hora do dia</h1>
        <h5 className="subtitleBanner">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h5>
        <ul className="col1">
          <li className="perk1">
            <span>
              <img src={cartIcon} alt="cart icon" />
            </span>
            Compra simples e segura
          </li>
          <li className="perk2">
            <span>
              <img src={clockIcon} alt="clock icon" />
            </span>
            Entrega rápida e rastreada
          </li>
        </ul>
        <ul className="col2">
          <li className="perk3">
            <span>
              <img src={boxIcon} alt="box icon" />
            </span>
            Embalagem mantém o café intacto
          </li>
          <li className="perk4">
            <span>
              <img src={coffeeIcon} alt="coffee icon" />
            </span>
            O café chega fresquinho até você
          </li>
        </ul>
      </div>
      <div className="prod-img">
        <img src={prodImg} alt="imagem do produtos" />
      </div>
    </BannerContainer>
  )
}