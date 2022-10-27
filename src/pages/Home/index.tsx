import { Banner } from "./components/Banner/Banner";
import { ShelfContainer } from "./components/ShelfContainer/ShelfContainer";
import { HomeContainer } from "./styles";
import { useState, useEffect } from 'react';
import { api } from "../../components/Api";
import { Product } from "../../@types/Products";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const [quantity, setQuantity] = useState<number>(0);

  const [chosenProd, setChosenProd] = useState({
    id: 0,
    name: "",
    cathegory: [],
    description: "",
    price: 0.0,
    quantity: 0,
    image: ""
  });

  useEffect(() => {
    api.get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log("putz, que error: " + err);
      });
  }, []);

  function handleDecreaseQt(index: number) {
    if (chosenProd.quantity > 0) {
      const findProduct: any = products.find(product => {
        if (product.id === index) {
          product.quantity -= 1;
          return product;
        }
      });
      setChosenProd(findProduct);
      console.log(findProduct);
    } else {
      console.log("zero", quantity);
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
    return quantity;
  }

  function addToCart(event: any) {
    // setChosenProd({
    //   name: event.target.id,
    //   quantity: chosenProd.quantity
    // });
  }

  return (
    <HomeContainer>
      <Banner />
      <ShelfContainer prod={products} id={chosenProd.id} chosenProduct={chosenProd} decrease={handleDecreaseQt} increase={handleIncreaseQt} change={onChange} addProd={addToCart} />
    </HomeContainer>
  )
}
