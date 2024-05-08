import PropTypes from "prop-types";
import { Name } from "./Name";

export const UserName = (props) => {
  return (
    <div>
      <b>
        Username: <span>{props.name}</span>
      </b>
      <br />
      <Name name={props.name} />
      <b>
        Age: <span>{props.age}</span>
      </b>
      <b>Favorite Foods:</b>

      <ul>
        {props.foods.map((food) => {
          return <li key={food.id}>{food.name}</li>;
        })}
      </ul>
    </div>
  );
};

UserName.prototype = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  food: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number,
    })
  ),
};
