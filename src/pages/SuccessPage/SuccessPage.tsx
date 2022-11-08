import { useContext } from "react";
import { OrdersContext } from "../../context/OrdersContext";
import { SuccessPageStyle } from "./styles";

export function SuccessPage() {

  const { orderFilled } = useContext(OrdersContext)

  console.log(orderFilled);

  return (
    <SuccessPageStyle>
      <h1>Success Page</h1>
    </SuccessPageStyle>
  )
}