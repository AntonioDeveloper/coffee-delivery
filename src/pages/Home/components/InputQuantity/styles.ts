import styled from "styled-components";

export const InputQuantityStyles = styled.div`
#input-quantity {
  width: 100%;
  height: 2.38rem;
  border: none;
  background-color: ${(props) => props.theme.button};
  text-align: center;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
}
`