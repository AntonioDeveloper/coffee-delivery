import styled from "styled-components";

export const HeaderContainer = styled.header`
width: 100%;
height: 6.5rem;

font-family:"Roboto",sans-serif;

display: flex;
justify-content: space-between;

img {
  width: 84.95px;
  height: 40px;
}

.right-blocks {
  display: flex;
  gap: 0.75rem;

  .local {
    width: 8.94rem;
    height: 2.4rem;

    border-radius: 6px;
    background: ${props => props.theme.purpleLight};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  
    img {
      width: 15.13px;
      height: 19.25px;
    }

    span {
      color: ${props => props.theme.purpleDark};
      line-height: 130px;
      font-size: 0.87rem;
    }
  }

  .btn-cart {
    width: 2.37rem;
    height: 2.37rem;

    background-color: ${props => props.theme.yellowLight};
    border-radius: 6px;
    border: none;
    
    cursor: pointer;

    img {
      width: 1.16rem;
      height: 1.12rem
    }
  }
}

`

