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
            <span className="icon">
              <img src={cartIcon} alt="cart icon" />
            </span>
            <span className="text">Compra simples e segura </span>
          </li>
          <li className="perk2">
            <span className="icon">
              <img src={clockIcon} alt="clock icon" />
            </span>
            <span className="text">Entrega rápida e rastreada </span>
          </li>
        </ul>
        <ul className="col2">
          <li className="perk3">
            <span className="icon">
              <img src={boxIcon} alt="box icon" />
            </span>
            <span className="text"> Embalagem mantém o café intacto </span>
          </li>
          <li className="perk4">
            <span className="icon">
              <img src={coffeeIcon} alt="coffee icon" />
            </span>
            <span className="text"> O café chega fresquinho até você </span>
          </li>
        </ul>
      </div>
      <div className="prod-img">
        <img src={prodImg} alt="imagem do produtos" />
      </div>
    </BannerContainer>
  )
}