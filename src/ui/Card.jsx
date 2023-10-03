import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ id, name }) => {
  return (
    <div
      className="flex bg-white flex-grow justify-between p-2 rounded-2xl py-4 items-center"
      key={id}
    >
      <div className="number -mt-4 bg-green-200 text-green-600 p-1 rounded-full">
        {id}
      </div>
      <Link to={`/${id}`} className="text-lg cursor-pointer font-medium">
        {name}
      </Link>
      <div className="cursor-pointer -mt-4 text-lg text-green-600">
        <FaHeart />
      </div>
    </div>
  );
};
export default Card;
