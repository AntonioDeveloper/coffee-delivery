import { Banner } from "./components/Banner/Banner";
import { ShelfContainer } from "./components/ShelfContainer/ShelfContainer";
import { HomeContainer } from "./styles";
import { useState, useEffect } from 'react';
import { api } from "../../components/Api";
import { Product } from "../../@types/Products";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log("putz, que error: " + err);
      });
  }, [])

  return (
    <HomeContainer>
      <Banner />
      <ShelfContainer prod={products} />
    </HomeContainer>
  )
}
