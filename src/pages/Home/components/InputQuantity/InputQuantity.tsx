import { InputQuantityStyles } from "./styles";

interface Props {
  change: () => void;
  value: number;
  clicado: number;
  idGeral: number;
  productQuantity: number;
}

export function InputQuantity({ change, clicado, value, idGeral, productQuantity }: Props) {

  return (
    <InputQuantityStyles>
      {
        clicado === idGeral ?
          <input id="input-quantity" type="number" min="0" max="20" onChange={change}
            value={value}
          />
          :
          <input id="input-quantity" type="number" min="0" max="20" onChange={change}
            value={productQuantity}
          />
      }
    </InputQuantityStyles>
  )
}