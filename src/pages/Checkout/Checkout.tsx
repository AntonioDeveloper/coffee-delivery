import { CheckoutStyle } from "./styles"
import imgLocalPin from "../../assets/local-pin.png"
import imgDolar from "../../assets/dolar-icon.png"
import imgCreditCard from "../../assets/credit-card.png"
import imgDebitCard from "../../assets/debit-card.png"
import imgMoney from "../../assets/money.png"
import { useContext, useEffect } from "react"
import { OrdersContext } from "../../context/OrdersContext"
import { InputQuantity } from "../Home/components/InputQuantity/InputQuantity"
import imgTrashCan from '../../assets/trash-can.png'

export function Checkout() {
  const { listCart, handleDecreaseQt, onChange, handleIncreaseQt, addToCart, chosenProd } = useContext(OrdersContext);

  let index;
  const initialValue = 0;
  let total = listCart.reduce((prev, curr) => prev + curr.price, initialValue);

  useEffect(() => {
    total = total + (chosenProd.price * chosenProd.quantity);
    console.log(total);
  }, [chosenProd]);

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
          <div className="selected-prods">
            {listCart.map(item => {
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
                      <button className="remove-from-cart" id={item.name} onClick={() => addToCart(index = item.id)}>
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
                    total
                  }
                </td>
              </tr>
              <tr className="order-confirm-holder">
                <td>
                  <button type="button" className="order-confirm">
                    CONFIRMAR PEDIDO
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </CheckoutStyle >
  )
}
