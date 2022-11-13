import { CheckoutStyle } from "./styles"
import imgLocalPin from "../../assets/local-pin.png"
import imgDolar from "../../assets/dolar-icon.png"
import { useContext } from "react"
import { OrdersContext } from "../../context/OrdersContext"
import { InputQuantity } from "../Home/components/InputQuantity/InputQuantity"
import imgTrashCan from '../../assets/trash-can.png'
import { NavLink } from "react-router-dom"

export function Checkout() {
  const { listCart, removeFromCart, handleDecreaseQt, handleIncreaseQt, onChange, orderFilled, total, checkedCredit, checkedDebit, checkedMoney, handleOrderForm, paymentBtnClick } = useContext(OrdersContext);

  function handleCreditChange(e: any) {
    e.target.checked = checkedCredit;
  }

  function handleDebitChange(e: any) {
    e.target.checked = checkedDebit;
  }
  function handleMoneyChange(e: any) {
    e.target.checked = checkedMoney;
  }

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
          <form action="" className="payment-buttons">
            <input
              type="radio"
              id="credit-card-btn"
              name="Cartão de Crédito"
              onClick={(e) => paymentBtnClick(e)}
              checked={checkedCredit}
              //onChange serve para mudar o valor de checked acima, de acordo com o estado 
              // que vem de cada botão
              onChange={handleCreditChange}
            />

            <input
              type="radio"
              id="debit-card-btn"
              name="Cartão de Débito"
              onClick={(e) => paymentBtnClick(e)}
              checked={checkedDebit}
              onChange={handleDebitChange}
            />

            <input
              type="radio"
              id="money-btn"
              name="Dinheiro"
              onClick={(e) => paymentBtnClick(e)}
              checked={checkedMoney}
              onChange={handleMoneyChange}
            />

          </form>
        </div>
      </section>
      <section className="minicart-side">
        <h3>Cafés selecionados</h3>
        <div className="summary-container">
          <div className="selected-prods">
            {listCart.map((item, index) => {
              return (
                <div className="prod-cart" key={index}>
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
