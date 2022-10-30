import styled from 'styled-components'

export const CheckoutStyle = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 4.5rem;

  display: flex;
  justify-content: space-between;
  
  .form-side {
    width: 58%;
    font-family: "Roboto", sans-serif; 

    h3 {
      font-family: "Baloo 2", sans-serif;
      line-height: 130%;
      font-size: 1.12rem;
      color: ${props => props.theme.subtitle};
      margin-bottom: .95rem;
    }

    .form-container {
      width: 100%;
      height: 23.25rem;
      background-color: ${props => props.theme.card};
      padding: 2.5rem;
      border-radius: 6px;

      form {
        margin-top: 2rem;

        input {
          background-color: ${props => props.theme.button};
          padding: 0.75rem;
          border: 1px solid ${props => props.theme.button};
          border-radius: 4px;
          margin: 0.25rem 0;
        }

        input[placeholder="CEP"] {
          width: 33.3%;
          display: inline-block;
        }

        input[placeholder="Rua"] {
          width: 100%;
          display: block;
        }

        input[placeholder="Número"] {
          width: 33.3%;
          display: inline-block;
        }

        input[placeholder="Complemento"] {
          width: 64%;
          display: inline-block;
          float: right;
        }

        input[placeholder="Bairro"] {
          width: 33.3%;
          display: inline-block;
          margin-right: 2%;
        }

        input[placeholder="Cidade"] {
          width: 52%;
          display: inline-block;
        }

        input[placeholder="UF"] {
          width: 10%;
          display: inline-block;
          float: right;
        }

      }

      .headline {
        width: 100%;
        display: flex;

        img {
          margin-right: 0.5rem;
        }

        h3 {
          font-size: 1rem;
          font-weight: 400;
          line-height: 130%;
          color: ${props => props.theme.subtitle};
        }

        h4 {
          font-size: .9rem;
          font-weight: 400;
          line-height: 130%;
          color: ${props => props.theme.subtitle};
        }
      }
    }

    .payment-ways {
      width: 100%;
      height: 12.94rem;
      background-color: ${props => props.theme.card};
      margin-top: 0.75rem;
      border-radius: 6px;
      padding: 2.5rem;

      .headline {
        display: flex;
        margin-bottom: 2rem;

        h3 {
          font-weight: 400;
          font-size: 1rem;
          line-height: 130%;
          color: ${props => props.theme.subtitle};
        }

        h4 {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 130%;
          color: ${props => props.theme.subtitle};
        }
      }

      .payment-buttons {
        display: flex;
        justify-content: space-between;

        button {
          font-size: 0.75rem;
          padding: 0.2rem;
          background-color: ${props => props.theme.button};
          color: ${props => props.theme.text};
          border-radius: 6px;
          border: none;
          width: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          &:active {
            background-color: ${props => props.theme.purpleLight};
            border: 1px solid ${props => props.theme.purple};
          }
        }
      }
    }
  }

  .minicart-side {
    width: 38%;

    h3 {
      font-family: "Baloo 2", sans-serif; 
      margin-bottom: .95rem;
    }
    .summary-container {
      width: 100%;
      height: 31rem;
      background-color: ${props => props.theme.card};
      padding: 2.5rem;
      border-radius: 6px 44px;
  
      font-family: "Roboto", sans-serif; 
    }

    .order-confirm {
      width: 100%;
      padding: .75rem .5rem;
      background-color: ${props => props.theme.yellow};
      color: ${props => props.theme.white};
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }
  }
`	