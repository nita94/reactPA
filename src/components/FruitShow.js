import { useParams } from "react-router-dom";

function FruitShow({fruits}) {
  // useParams() returns an object with the params from the URL
  const {fruitId} = useParams();
  // to find the fruit with the id that matches the fruitId
  const fruit = fruits.find((currentFruit) => fruitId === currentFruit.id);
  return (
    <>
      <h2>{fruit.name}</h2>
      <p>{fruit.color}</p>
      <p>Sweetness: {fruit.sweetness}</p>
      <p>Seeds: {fruit.seeds}</p>
    </>
  )
}

export default FruitShow;
