import { useState } from "react";
import { FoodList } from "./components/FoodList";
import Search from "./components/Search";
import Nav from "./components/Nav";
import "./app.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("");
  return (
    <div className="App">
      <Nav />
      <Search
        foodData={foodData}
        setFoodData={setFoodData}
        setFoodID={setFoodID}
      />
      <Container>
        <InnerContainer>
          <FoodList
            foodData={foodData}
            setFoodData={setFoodData}
            setFoodID={setFoodID}
          />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodID={foodID}></FoodDetails>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
