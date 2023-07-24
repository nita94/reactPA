// import { useContext } from "react";
import {Link} from "react-router-dom"
import {FavFruitContext, useFruitContext} from "../context/FavFruitContext"

const FavoriteFruit = ({fruits}) => {
  // const {favFruitId} = useContext(FavFruitContext);
  const {favFruitId} = useFruitContext();
  const fruit = fruits.find((currentFruit) => currentFruit.id === favFruitId)
  return (
    <>
      <h2>Favorite Fruit</h2>
      <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
    </>
  );
}

export default FavoriteFruit;
