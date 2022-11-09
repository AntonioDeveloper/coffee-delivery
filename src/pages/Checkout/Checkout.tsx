import { CheckoutStyle } from "./styles"
import imgLocalPin from "../../assets/local-pin.png"
import imgDolar from "../../assets/dolar-icon.png"
import imgCreditCard from "../../assets/credit-card.png"
import imgDebitCard from "../../assets/debit-card.png"
import imgMoney from "../../assets/money.png"
import { useContext } from "react"
import { OrdersContext } from "../../context/OrdersContext"
import { InputQuantity } from "../Home/components/InputQuantity/InputQuantity"
import imgTrashCan from '../../assets/trash-can.png'
import { NavLink } from "react-router-dom"

export function Checkout() {
  const { listCart, removeFromCart, handleDecreaseQt, handleIncreaseQt, onChange, orderFilled, total, handleOrderForm, handleSubmitOrder, paymentBtnClick } = useContext(OrdersContext);

  return (
    <CheckoutStyle>
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
            <input type="number" name="cep" placeholder="CEP" value={orderFilled.cep} onChange={(e) => handleOrderForm(e)} />
            <input type="text" placeholder="Rua" name="rua" value={orderFilled.rua} onChange={(e) => handleOrderForm(e)} />
            <input type="number" placeholder="Número" name="numero" value={orderFilled.numero} onChange={(e) => handleOrderForm(e)} />
            <input type="text" placeholder="Complemento" name="complemento" value={orderFilled.complemento} onChange={(e) => handleOrderForm(e)} />
            <input type="text" placeholder="Bairro" name="bairro" value={orderFilled.bairro} onChange={(e) => handleOrderForm(e)} />
            <input type="text" placeholder="Cidade" name="cidade" value={orderFilled.cidade} onChange={(e) => handleOrderForm(e)} />
            <input type="text" placeholder="UF" name="uf" value={orderFilled.uf} onChange={(e) => handleOrderForm(e)} />
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
            <button type="button"
              id="credit-card-btn"
              name="Cartão de Crédito"
              onClick={(e) => paymentBtnClick(e)}
            >
              <img src={imgCreditCard} alt="" />
              CARTÃO DE CRÉDITO
            </button>
            <button type="button"
              id="debit-card-btn"
              name="Cartão de Débito"
              onClick={(e) => paymentBtnClick(e)}
            >
              <img src={imgDebitCard} alt="" />
              CARTÃO DE DÉBITO
            </button>
            <button type="button"
              id="money-btn"
              name="Dinheiro"
              onClick={(e) => paymentBtnClick(e)}
            >
              <img src={imgMoney} alt="" />
              DINHEIRO
            </button>
          </div>
        </div>
      </section>
      <section className="minicart-side">
        <h3>Cafés selecionados</h3>
        <div className="summary-container">
          <div className="selected-prods">
            {listCart.map((item, index) => {
              return (
                <div className="prod-cart" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="prod-quantity">
                    <span>{item.name}</span>
                    <span>R$ {item.price}</span>
                    <div className="product-quantity-selector">
                      <div className="inputs-quantity">
                        <button className="decrease" onClick={() => handleDecreaseQt(index = item.id)}>-</button>
                        <InputQuantity change={onChange} value={item.quantity} clicado={item.id} idGeral={item.id} productQuantity={item.quantity} />
                        <button className="increase" onClick={() => handleIncreaseQt(index = item.id)}>+</button>
                      </div>
                      <button className="remove-from-cart" id={item.name} onClick={() => removeFromCart(index = item.id)}>
                        <img src={imgTrashCan} alt="" />
                        REMOVER
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <table className="order-summary">
            <tbody>
              <tr className="total-items">
                <td>Total de itens</td>
                <td>
                  {
                    listCart.length
                  }
                </td>
              </tr>
              <tr className="total-items">
                <td>Entrega</td>
                <td>
                  R$ 5.00
                </td>
              </tr>
              <tr className="total-items">
                <td>Total</td>
                <td>
                  R$
                  {
                    total.toFixed(2)
                  }
                </td>
              </tr>
              <tr className="order-confirm-holder">
                <td colSpan={2}>
                  <NavLink to={{
                    pathname: '/success-page'
                  }}
                    className="btn-closeCart disabled"
                  >
                    CONFIRMAR PEDIDO
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </CheckoutStyle >
  )
}
