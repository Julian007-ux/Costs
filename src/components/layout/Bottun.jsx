import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <>
      {props.url ? (
        <Link to={props.url} className="my-3 bg-black text-white w-28 duration-500 p-2 rounded m-auto hover:text-yellow-400">
          {props.name}
        </Link>
      ) : (
        <button
          className="my-3 bg-black text-white w-28 duration-500 p-2 rounded m-auto hover:text-yellow-400"
          type={props.type}
        >
          {props.name}
        </button>
      )}
    </>
  );
};

export default Button;
