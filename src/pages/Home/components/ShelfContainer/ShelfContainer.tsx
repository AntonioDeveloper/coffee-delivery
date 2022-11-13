import { Product } from "../../../../@types/Products";
import { ShelfStylesContainer } from "./styles";
import { HTMLInputTypeAttribute, useContext, useState } from "react";
import { InputProps } from "../../../../../src/@types/ShelfContainerTypes"
import { InputQuantity } from "../InputQuantity/InputQuantity";
import { ProductsContext } from "../..";
import { OrdersContext } from "../../../../context/OrdersContext";

export function ShelfContainer() {

  const { products, chosenProd, handleDecreaseQt, handleIncreaseQt, onChange, addToCart } = useContext(OrdersContext);

  return (
    <ShelfStylesContainer>
      <h1>Nossos cafés</h1>
      <div className="product-container">
        {products.map((product) => {
          return (
            <div className="coffee-item" key={product.id}>
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
                  <button className="decrease" onClick={() => handleDecreaseQt(product.id)}>-</button>
                  <InputQuantity change={onChange} value={chosenProd.quantity} clicado={chosenProd.id} idGeral={product.id} productQuantity={product.quantity} />
                  <button className="increase" onClick={() => handleIncreaseQt(product.id)}>+</button>
                  <button className="push-to-cart" id={product.name} onClick={() => addToCart(product.id)}></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </ShelfStylesContainer>
  )
}