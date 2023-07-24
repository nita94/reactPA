import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; // to redirect the user

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [sweetness, setSweetness] = useState(1);
  const [color, setColor] = useState(COLORS[1]);
  const [seeds, setSeeds] = useState("yes");
  const [validationObject, setValidationObject] = useState({});
  // const [errors, setErrors] = useState([]);

  useEffect(() => {
    // we want to validate the name and sweetness
    // if the name is less than 3 characters, we want to show an error
    // if the name is more than 20 characters, we want to show an error
    // if the name already exists, we want to show an error
    // if the sweetness is less than 1 or greater than 10, we want to show an error
    // we want to show all the errors at once
    // we want to show the errors in a list
    // we want to show the errors in a paragraph
    // we want to show the errors in a div
    // we want to show the errors in a span
    const errorsObject = {};
    // const errorsArray = []

    if(name.length < 3) {
      errorsObject.name = "Name must be 3 or more characters";
      // errorsArray.push("Name must be 3 or more characters")
    }

    if(name.length > 20) {
      errorsObject.name = "Name must be 20 characters or less"
      // errorsArray.push("Name must be 20 characters or less")
    }

    if(fruits.find((currentFruit) => currentFruit.name === name)) {
      errorsObject.name = "Name already exists";
      // errorsArray.push("Name already exists")
    }

    if(sweetness < 1 || sweetness > 10) {
      errorsObject.sweetness = "Sweetness must be between 1 and 10";
      // errorsArray.push("Sweetness must be between 1 and 10")
    }

    setValidationObject(errorsObject);
    // setErrors(errorsArray);
  }, [name, sweetness]);

  function onSubmit(e) {
    e.preventDefault();
    console.log({name, sweetness, color, seeds})
    history.push("/")
  }

  return (
    <form
      className="fruit-form"
      onSubmit={onSubmit}
    >
      <h2>Enter a Fruit</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
      </label>
      // if there is an error for name, show the error
       {validationObject.name && <p className="errors">{validationObject.name}</p>}
      {/* <p className="errors">{errors.filter((validation) => validation.includes("Name"))}</p> */}
      <label>
        Select a Color
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
            key={color}
            value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={(e) => setSweetness(e.target.value)}
        />
      </label>
      {validationObject.sweetness && <p className="errors">{validationObject.sweetness}</p>}
      {/* <p className="errors">{errors.filter((validation) => validation.includes("Sweetness"))}</p> */}
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds === "no"}
          onChange={(e) => setSeeds(e.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === "yes"}
          onChange={(e) => setSeeds(e.target.value)}
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={Object.keys(validationObject).length > 0}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
