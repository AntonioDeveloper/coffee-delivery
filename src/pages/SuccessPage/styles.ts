import styled from 'styled-components'

export const SuccessPageStyle = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 2.5rem;

  .order-info {
    width: 58%;
    margin-right: 2%;

    .inner {
      padding: 2.81rem 2.5rem;

      background: linear-gradient(white, white) padding-box,
                  linear-gradient(to right, #DBAC2C, #8047F8) border-box;
        border-radius: 6px 36px;
        border: 1px solid transparent;

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
          font-size: 1rem;
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
    
          .line {
            display: flex;
            margin: 2rem 0;
          }
    
          .line {
           .icon {
            padding: 0.5rem;
            width: 2rem;
            height: 2rem;
            border-radius: 50px;
    
            display: flex;
            justify-content: center;
           }
    
           .text {
            padding-left: 0.75rem;
           }
          }
    
          .line {
            &:first-child {
              .icon {
                &:first-child {
                  background-color: ${props => props.theme.purple};
                }
              }
            }
    
            &:nth-child(2) {
              .icon {
                &:first-child {
                  background-color: ${props => props.theme.yellow};
                }
              }
            }
    
            &:last-child {
              .icon {
                &:first-child {
                  background-color: ${props => props.theme.yellowDark};
                }
              }
            }
          }
        }
    }
  }

  .illustration {
    width: 40%;
  }
`