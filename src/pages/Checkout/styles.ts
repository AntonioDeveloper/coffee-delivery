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

    h1 {
      font-family: "Baloo 2", sans-serif;
      line-height: 130%;
      font-size: 1.12rem;
      color: ${props => props.theme.subtitle};
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
    }
  }

  .minicart-side {
    width: 38%;

    .summary-container {
      width: 100%;
      height: 31rem;
      background-color: ${props => props.theme.card};
      padding: 2.5rem;
      border-radius: 6px 44px;
  
      "Roboto", sans 
    }
  }
`	