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
        width: 100%;
        justify-content: space-between;

        input[type="radio"] {
          appearance: none;
          -webkit-appearance: none;
          font-size: 0.7rem;
          padding: 0.2rem;
          background-color: ${props => props.theme.button};
          color: ${props => props.theme.text};
          border-radius: 6px;
          border: none;
          width: 32%;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          
          &:checked {
            background-color: ${props => props.theme.purpleLight} !important;
            border: 1px solid ${props => props.theme.purple};
          }

          &:focus {
            outline: 1px solid ${props => props.theme.purpleDark};
            outline-offset: 0px;
            box-shadow: 0 0 0 2px ${props => props.theme.purpleDark}; 
          }
        }

        #credit-card-btn {
          &:before {
            content: url("../src/assets/credit-card.png");
          }
          &:after {
            content: "Cartão de Crédito";
            text-transform: uppercase;
          }
        }

        #debit-card-btn {
          &:before {
            content: url("../src/assets/debit-card.png");
          }
          &:after {
            content: "Cartão de Débito";
            text-transform: uppercase;
          }
        }
        #money-btn {
          &:before {
            content: url("../src/assets/money.png");
          }
          &:after {
            content: "Dinheiro";
            text-transform: uppercase;
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
      position: relative;
      background-color: ${props => props.theme.card};
      padding: 2.5rem;
      border-radius: 6px 44px;
  
      font-family: "Roboto", sans-serif; 

      .selected-prods {
        max-height: 16rem;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: .4rem;
        }

        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px ${props => props.theme.background};
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${props => props.theme.button};
        }

        .prod-cart {
          display: flex;
          justify-content: space-between;
          width: 96%;
          padding: 1.5rem 0;
          border-bottom: 1px solid #E6E5E5;
  
          img {
            width: 22%;
            height: 22%;
          }
  
          .prod-quantity {
            font-size: 1rem;
            width: 75%;
  
            span {
              font-size: .9rem;
              line-height: 130%;
  
              &:first-child {
                margin-right: .6rem;
              }

              &:nth-child(2) {
                display: block;
              }
            }
          }
  
          .product-quantity-selector {
            display: flex;
            width: 100%;
            margin: .5rem 0;
  
            .inputs-quantity {
              width: 48%;
              display: flex;
            }
  
            #input-quantity {
              background-color: ${props => props.theme.button};
              width: 1.5rem;
              padding: 0 .5rem;
            }
  
            .decrease, .increase {
              border: 0;
              background-color: ${props => props.theme.button};
              width: 1.5rem;
              padding: 0 .5rem;
              cursor: pointer;
            }
  
            .decrease {
              border-radius: 6px 0  0 6px;
            }
  
            .increase {
              border-radius: 0 6px  6px 0;
            }
  
            .remove-from-cart {
              border: 0;
              background-color: ${props => props.theme.button};
              color: ${props => props.theme.text};
              font-size: .8rem;
              padding: 0 .5rem;
              border-radius: 6px;
              cursor: pointer;
  
              display: flex;
              align-items: center;
  
              img {
                width: 1rem;
                height: 1rem;
              }
            }
          }
        }
      }
    }

    .order-summary {
      width: 75%;
      position: absolute;
      bottom: 40px;

      .total-items {
        line-height: 21px;
      }

      .btn-closeCart {
        width: 100%;
        padding: .75rem .5rem;
        margin-top: 1.5rem;
        background-color: ${props => props.theme.yellow};
        color: ${props => props.theme.white};
        border-radius: 6px;
        border: none;
        display: block;
        text-decoration: none;
        text-align: center;

        &.disabled {
          background-color: ${props => props.theme.button};
          color: ${props => props.theme.text};
          pointer-events: none;
        }
      }

      .enabled {
        cursor: pointer;
        color: ${props => props.theme.white};
      }
    }
  }
`	