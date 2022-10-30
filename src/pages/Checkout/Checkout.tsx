import { CheckoutStyle } from "./styles"
import imgLocalPin from "../../assets/local-pin.png"
import imgDolar from "../../assets/dolar-icon.png"
import imgCreditCard from "../../assets/credit-card.png"
import imgDebitCard from "../../assets/debit-card.png"
import imgMoney from "../../assets/money.png"
import { useContext } from "react"
import { OrdersContext } from "../../context/OrdersContext"

export function Checkout() {
  const { listCart } = useContext(OrdersContext);

  console.log(listCart);

  return (
    <CheckoutStyle>
      <pre>
        {JSON.stringify(listCart)}
      </pre>
      <section className="form-side">
        <h3>Complete seu pedido</h3>
        <div className="form-container">
          <div className="headline">
            <div>
              <img src={imgLocalPin} alt="" />
            </div>
            <div>
              <h3>Endereço de Entrega</h3>
              <h4>Informe o endereço onde deseja receber seu pedido</h4>
            </div>
          </div>
          <form action="" >
            <input type="number" placeholder="CEP" required />
            <input type="text" placeholder="Rua" required />
            <input type="number" placeholder="Número" required />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" maxLength={2} />
          </form>
        </div>
        <div className="payment-ways">
          <div className="headline">
            <div>
              <img src={imgDolar} alt="" />
            </div>
            <div>
              <h3>Pagamento</h3>
              <h4>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h4>
            </div>
          </div>
          <div className="payment-buttons">
            <button type="button" className="credit-card-btn">
              <img src={imgCreditCard} alt="" />
              <span>CARTÃO DE CRÉDITO</span>
            </button>
            <button type="button" className="debit-card-btn">
              <img src={imgDebitCard} alt="" />
              <span>CARTÃO DE DÉBITO</span>
            </button>
            <button type="button" className="money-btn">
              <img src={imgMoney} alt="" />
              <span>DINHEIRO</span>
            </button>
          </div>
        </div>
      </section>
      <section className="minicart-side">
        <h3>Cafés selecionados</h3>
        <div className="summary-container">
          <div className="selected-prods"></div>
          <table className="order-summary">
            <tr className="total-items">
              <td>Total de itens</td>
              <td>R$</td>
            </tr>
            <tr className="total-items">
              <td>Entrega</td>
              <td>R$</td>
            </tr>
            <tr className="total-items">
              <td>Total</td>
              <td>R$</td>
            </tr>
          </table>
          <button type="button" className="order-confirm">
            CONFIRMAR PEDIDO
          </button>
        </div>
      </section>
    </CheckoutStyle >
  )
}
