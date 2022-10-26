import { InputQuantityStyles } from "./styles";

interface Props {
  change: () => void;
  value: number;
}

export function InputQuantity({ change, value }: Props) {
  return (
    <InputQuantityStyles>
      <input id="input-quantity" type="number" min="0" max="20" onChange={change} value={value} />
    </InputQuantityStyles>
  )
}