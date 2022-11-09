import { useContext } from "react";
import { OrdersContext } from "../../context/OrdersContext";
import { SuccessPageStyle } from "./styles";
import imgPoint from '../../assets/pinpoint-white.png'
import imgClock from '../../assets/clock.png'
import imgDollar from '../../assets/dolar-icon-order-confirm.png'
import imgDeliveryMan from '../../assets/delivery-illustration.png'

export function SuccessPage() {

  const { orderFilled } = useContext(OrdersContext)

  console.log(orderFilled);

  return (
    <SuccessPageStyle>
      <div className="order-info">
        <h2 className="order-confirm-msg">Uhu! Pedido confirmado</h2>
        <p className="order-confirm-sub">Agora é só aguardar que logo o café chegará até você</p>
        <div className="order-summary-info">
          <div className="line">
            <div className="icon">
              <img src={imgPoint} alt="" />
            </div>
            <div className="text">
              <p>
                Entrega em <strong> Rua João Daniel Martinelli, 102</strong> <br /> Farrapos - Porto Alegre, RS
              </p>
            </div>
          </div>
          <div className="line">
            <div className="icon">
              <img src={imgClock} alt="" />
            </div>
            <div className="text">
              <p>
                Previsão de entrega <br />
                <strong> 20 min - 30 min </strong>
              </p>
            </div>
          </div>
          <div className="line">
            <div className="icon">
              <img src={imgDollar} alt="" />
            </div>
            <div className="text">
              <p>
                Pagamento na entrega <br />
                <strong> {orderFilled.paymentMode} </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="illustration">
        <img src={imgDeliveryMan} alt="Delivery Man" />
      </div>
    </SuccessPageStyle>
  )
}