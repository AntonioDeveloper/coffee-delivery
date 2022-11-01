import { createContext, ReactNode } from 'react';
import { Product } from "../@types/Products";
import { api } from "../components/Api";
import { useState, useEffect } from 'react';

interface OrdersContextType {
  listCart: Product[];
  products: Product[];
  addToCart: (index: number) => void;
  removeFromCart: (index: number) => void;
  chosenProd: Product;
  handleDecreaseQt: (index: number) => void;
  handleIncreaseQt: (index: number) => void;
  onChange: () => void;
}

interface OrdersContextProviderProps {
  children: ReactNode;
}

export const OrdersContext = createContext({} as OrdersContextType);

export function OrdersContextProvider({ children }: OrdersContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [listCart, setListCart] = useState<Product[]>([]);

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
    setListCart(listCart);
  }

  function removeFromCart(index: number) {

    const foundProduct: any = products.find(prod => {
      if (prod.id === index) {
        return prod;
      }
    })

    listCart.splice(foundProduct.id, 1);
    setListCart(listCart);
    console.log(listCart);

    let el = document.querySelector(`div.prod-cart:nth-child(${foundProduct.id})`);
    if (el === null) {
      el = document.querySelector(`div.prod-cart:first-child`);
      el?.remove();
      console.log(el, foundProduct.id);
    } else {
      el = document.querySelector(`div.prod-cart:nth-child(${foundProduct.id})`);
      el?.remove();
      console.log(el, foundProduct.id);
    }

    console.log(foundProduct.id);
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
      return listCart;
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
    <OrdersContext.Provider value={{ listCart, products, addToCart, removeFromCart, chosenProd, handleDecreaseQt, handleIncreaseQt, onChange }}>
      {children}
    </OrdersContext.Provider>
  )
}