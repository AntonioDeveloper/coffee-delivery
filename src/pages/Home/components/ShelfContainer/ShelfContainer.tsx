import { Product } from "../../../../@types/Products";
import { ShelfStylesContainer } from "./styles";
import { HTMLInputTypeAttribute, useState } from "react";
import { InputProps } from "../../../../../src/@types/ShelfContainerTypes"
import { InputQuantity } from "../InputQuantity/InputQuantity";

interface Props {
  prod: Product[];
  decrease: (index: number) => void;
  increase: (index: number) => void;
  change: () => void;
  addProd: any;
  quantityProd: number;
}

export function ShelfContainer({ prod, decrease, increase, change, addProd, quantityProd }: Props) {

  return (
    <ShelfStylesContainer>
      <h1>Nossos cafés</h1>
      <div className="product-container">
        {prod.map((product, index) => {
          return (
            <div className="coffee-item" key={index}>
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
                  <button className="decrease" onClick={e => decrease(index)}>-</button>
                  <InputQuantity change={change} value={quantityProd} />
                  <button className="increase" onClick={e => increase(index)}>+</button>
                  <button className="push-to-cart" id={product.name} onClick={addProd}></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </ShelfStylesContainer>
  )
}