import styled from 'styled-components'

export const SuccessPageStyle = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;

  .order-info {
    width: 58%;
  }

  .illustration {
    width: 40%;
  }

  .order-info {
    .order-confirm-msg {
      font-family: "Baloo 2", sans-serif;
      color: ${props => props.theme.yellowDark};
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.6rem;
    }

    .order-confirm-sub {
      font-family: "Roboto", sans-serif;
      color: ${props => props.theme.subtitle};
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.6rem;
    }

    .order-summary-info {
      box-sizing: content-box;
      border-width: 1px;
      border-style: solid;
      border-image: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
      width: 100%;
      height: 100%;

      font-family: "Roboto", sans-serif;
      font-size: 1rem;
    }
  }
`