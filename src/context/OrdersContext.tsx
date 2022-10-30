import { createContext, ReactNode } from 'react';
import { Product } from "../@types/Products";
import { api } from "../components/Api";
import { useState, useEffect } from 'react';

interface OrdersContextType {
  listCart: Product[];
  products: Product[];
  addToCart: (index: number) => void;
  chosenProd: Product;
  handleDecreaseQt: (index: number) => void;
  handleIncreaseQt: (index: number) => void;
  onChange: () => void;
}

interface OrdersContextProviderProps {
  children: ReactNode;
}

export const OrdersContext = createContext({} as OrdersContextType);
let listCart: Product[] = [];


export function OrdersContextProvider({ children }: OrdersContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log("putz, que error: " + err);
      });
  }, []);

  function addToCart(index: number) {

    const foundProduct: any = products.find(prod => {
      if (prod.id === index) {
        return prod;
      }
    })
    listCart.push(foundProduct);

    console.log(listCart);
  }

  const [chosenProd, setChosenProd] = useState({
    id: 0,
    name: "",
    cathegory: [],
    description: "",
    price: 0.0,
    quantity: 0,
    image: ""
  });

  function handleDecreaseQt(index: number) {
    if (chosenProd.quantity > 0) {
      const findProduct: any = products.find(product => {
        if (product.id === index) {
          product.quantity -= 1;
          return product;
        }
      });
      setChosenProd({ ...findProduct });
    } else {
      return;
    }
  }

  let findProduct: any;

  function handleIncreaseQt(index: number) {
    findProduct = products.find(product => {
      if (product.id === index) {
        product.quantity += 1;
        return product;
      }
    });
    setChosenProd({ ...findProduct });
  }

  function onChange() {
    return chosenProd.quantity;
  }

  return (
    <OrdersContext.Provider value={{ listCart, products, addToCart, chosenProd, handleDecreaseQt, handleIncreaseQt, onChange }}>
      {children}
    </OrdersContext.Provider>
  )
}