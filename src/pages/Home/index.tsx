import { Banner } from "./components/Banner/Banner";
import { ShelfContainer } from "./components/ShelfContainer/ShelfContainer";
import { HomeContainer } from "./styles";
import { useState, createContext, useContext } from 'react';
import { api } from "../../components/Api";
import { Product } from "../../@types/Products";
import { OrdersContext } from '../../context/OrdersContext'

interface ProductsContextType {
  products: Product[];
  chosenProd: Product;
}

export const ProductsContext = createContext({} as ProductsContextType)

export function Home() {
  const { products, addToCart, chosenProd, handleDecreaseQt, handleIncreaseQt, onChange } = useContext(OrdersContext);

  //const [products, setProducts] = useState<Product[]>([]);



  // const [listProds, setListProds] = useState<Product[]>([]);
  // let cartContent: Product[] = [];





  return (
    <HomeContainer>
      <Banner />
      <ShelfContainer />
    </HomeContainer>
  )
}
