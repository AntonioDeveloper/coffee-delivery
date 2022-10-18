import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  height: 34rem;
  
  display: flex;
  justify-content: space-between;

  .perks {
    width: 52.5%;

    .bannerTitle {
      font-family: "Baloo 2", sans-serif;
      color: ${props => props.theme.title};
      font-size: 2.4rem;
      line-height: 130%;
    }

    .subtitleBanner {
      font-size: 1.25rem;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
      color: ${props => props.theme.subtitle};
      line-height: 130%;
    }

    .col1, .col2 {
      width: 49%;
      display: inline-block;
      list-style-type: none;

      span {
        border-radius: 50px;
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
      }

      .perk1 {
        font-size: 1rem;
        font-family: "Roboto", sans-serif;

        span {
          background: ${(props) => props.theme.yellowDark};
        }
      }

      .perk2 {
        font-size: 1rem;
        font-family: "Roboto", sans-serif;

        span {
          background: ${(props) => props.theme.yellow};
        }
      }

      .perk3 {
        font-size: 1rem;
        font-family: "Roboto", sans-serif;
        
        span {
          background: ${(props) => props.theme.text};
        }
      }

      .perk4 {
        font-size: 1rem;
        font-family: "Roboto", sans-serif;
        
        span {
          background: ${(props) => props.theme.purple};
        }
      }
    }
  }

  .prod-img {
    width: 42.5%;

    img {
      width: 100%;
    }
  }
`