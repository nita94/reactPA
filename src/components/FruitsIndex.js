import {Link} from 'react-router-dom'


function FruitsIndex({fruits}) {
  return (
    <>
    <h2>Fruits Index</h2>
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
        </li>
      ))}
    </ul>
    </>
  );
}

export default FruitsIndex;
