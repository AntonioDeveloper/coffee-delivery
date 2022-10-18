import { Banner } from "./components/Banner/Banner";
import { ShelfContainer } from "./components/ShelfContainer/ShelfContainer";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <ShelfContainer />
    </HomeContainer>
  )
}
