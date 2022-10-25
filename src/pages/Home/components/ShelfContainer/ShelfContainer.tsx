import { Product } from "../../../../@types/Products";
import { ShelfStylesContainer } from "./styles";
import { HTMLInputTypeAttribute, useState } from "react";
import { InputProps } from "../../../../../src/@types/ShelfContainerTypes"

interface Props {
  prod: Product[];
}

export function ShelfContainer({ prod }: Props) {

  const [quantity, setQuantity] = useState<number>(0);

  const [chosenProd, setChosenProd] = useState({
    name: "",
    quantity: 0,

  });

  const prodName = document.querySelector(".coffee-name")?.innerHTML;
  const priceVal = document.querySelector(".price")?.innerHTML.match(/[0-9]/g)?.toString();
  const productQtInput = document.querySelector("#input-quantity") as HTMLInputElement;

  let productQt = productQtInput?.value;
  //console.log(productQtInput, prodName, priceVal)

  function handleDecreaseQt() {
    // if (Number(productQt) > 0) {
    //   setQuantity(quantity => quantity - 1);
    //   //console.log("quantity", quantity);
    // } else {
    //   //console.log("zero", quantity);
    // }
  }

  function handleIncreaseQt() {
    setQuantity(quantity => quantity + 1);
  }
  console.log("quantity", quantity);

  // function onChange() {
  //   return chosenProd.quantity;
  // }

  function addToCart(event: any) {
    setChosenProd({
      name: event.target.id,
      quantity: quantity
    });
  }

  console.log(chosenProd);
  return (
    <ShelfStylesContainer>
      <h1>Nossos cafés</h1>
      <div className="product-container">
        {prod.map(product => {
          return (
            <div className="coffee-item" key={product.name}>
              <img src={product.image} alt={product.name} />
              <div className="cathegory-container">
                {
                  product.cathegory.length > 1 ?
                    (<div>
                      <span className="coffee-cathegory">{product.cathegory[0]}</span>
                      <span className="coffee-cathegory">{product.cathegory[1]}</span>
                    </div>)
                    : (<span className="coffee-cathegory">{product.cathegory}</span>)
                }
              </div>
              <h3 className="coffee-name">{product.name}</h3>
              <p className="description">{product.description}</p>
              <div className="prod-card-footer">
                <span className="price"><span>R$</span> {product.price}</span>
                <div className="product-quantity-selector">
                  <button className="decrease" onClick={handleDecreaseQt}>-</button>
                  <input id="input-quantity" type="number" min="0" max="20" />
                  <button className="increase" onClick={handleIncreaseQt}>+</button>
                  <button className="push-to-cart" id={product.name} onClick={addToCart}></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </ShelfStylesContainer>
  )
}