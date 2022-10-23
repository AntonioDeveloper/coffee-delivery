import { Product } from "../../../../@types/Products";
import { ShelfStylesContainer } from "./styles";

interface Props {
  prod: Product[];
}

export function ShelfContainer({ prod }: Props) {
  console.log(prod);

  return (
    <ShelfStylesContainer>
      <h1>Nossos cafés</h1>
      <div className="product-container">
        {prod.map(product => {
          return (
            <div className="coffee-item">
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
                <span className="price">R$ {product.price}</span>
                <div className="product-quantity-selector">
                  <button className="decrease">-</button>
                  <input id="input-quantity" type="number" min="0" max="20" />
                  <button className="increase">+</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </ShelfStylesContainer>
  )
}